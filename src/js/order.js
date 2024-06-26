document.addEventListener("DOMContentLoaded", function() {
    const endpoint = 'http://54.191.229.94:5000/orders/getAllOrders';

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#ordersTable tbody');
            tableBody.innerHTML = ''; // Clear existing rows

            data.forEach(order => {
                const row = document.createElement('tr');

                // Determine the status text and class based on payment status
                let statusText, statusClass;
                if (order.customer.cart.purchaseStatus === true) {
                    statusText = 'Delivered';
                    statusClass = 'bg-success text-success';
                } else {
                    statusText = 'Cancel';
                    statusClass = 'bg-danger text-danger';
                }

                row.innerHTML = `
                    <td class="px-3 py-4">${order.orderId}</td>
                    <td class="px-6 py-4">${order.customer.firstName} ${order.customer.lastName}</td>
                    <td class="px-6 py-4">${order.orderDate}</td>
                    <td class="px-6 py-4">${order.total.toFixed(2)}</td>
                    <td class="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p class="inline-flex rounded-full ${statusClass} bg-opacity-10 px-5 py-1 text-sm font-medium">
                            ${statusText}
                        </p>
                    </td>
                    <td class="px-6 py-4">${order.email}</td>
                    <td class="px-6 py-4">${order.phone}</td>
                    <td class="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p id="order-status-${order.orderId}" class="status-element inline-flex rounded-full bg-success bg-opacity-10 px-8 py-1 text-sm font-medium text-success" data-status="${order.orderStatus}">
                            ${order.orderStatus}
                        </p>
                    </td>
                    <td class="px-6 py-4">${order.customer.cart.cartId}</td>
                    <td>
                        <div class="grid-row flex gap-2">
                            <button type="button" onclick="handleChangeStatus(${order.orderId})" class="px-5 gap-1 py-2  mr-3 text-sm font-medium text-white inline-flex items-center bg-success hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View
                            </button>
                        </div>                               
                    </td>
                `;

                tableBody.appendChild(row);
            });

            // Add event listeners after populating the table
            const statusElements = document.querySelectorAll('.status-element');
            statusElements.forEach(statusElement => {
                statusElement.addEventListener('click', function() {
                    const orderId = this.getAttribute('id').replace('order-status-', '');
                    handleStatusClick(orderId);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching orders:', error);
        });

        function handleStatusClick(orderId) {
            const statusElement = document.querySelector(`#order-status-${orderId}`);
            let currentStatus = statusElement.getAttribute('data-status');
        
            // Example of changing status (you can implement your logic here)
            let newStatus;
            if (currentStatus === 'Pending') {
                newStatus = 'Pending';
            }else if (currentStatus === 'Delivered') {
                newStatus = 'Cancelled';
            } else if (currentStatus === 'Cancelled') {
                newStatus = 'Shipped';
            } else if (currentStatus === 'Shipped') {
                newStatus = 'Delivered';
            }
        
            // Update the UI
            statusElement.textContent = newStatus;
            statusElement.setAttribute('data-status', newStatus);
        
            // Prepare the PUT request URL
            const putEndpoint = `http://54.191.229.94:5000/orders/${orderId}-${newStatus}`;
        
            // Send the PUT request
            fetch(putEndpoint, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Optionally, include body data if required by your API
                // body: JSON.stringify({ newStatus }),
            })
            .then(response => {
                if (response.ok) {
                    validationMessage("Order status updated successfully.");
                } else {
                    throw new Error('Failed to update order status');
                }
            })
            .catch(error => {
                console.error('Error updating order status:', error);
                validationMessage("Failed to update order status.");
            });
        }
});

function validationMessage(message){
    const productDetailsContainer = document.getElementById('validation-message');

    const html = `
        <div class="bg-green-100 border border-green-400 text-green-700 w-400 px-4 py-2 ml-5 mr-5 rounded relative" role="alert">
            <strong class="font-bold">Done!</strong>
            <span class="block sm:inline">${message}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>
    `;

    productDetailsContainer.innerHTML = html;
}
