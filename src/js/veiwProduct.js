function addVariants(){
  setTimeout(function() {
    for(let i=1;i<=rowCount;i++){

        let productId_1 = $('#default-search').val();
        let color = $('#color-Select-'+i).val();
        let size = $('#size-Select-'+i).val();
        let quantity = $('#quantity-Select-'+i).val();
        let fileInput = $('#dropzone-file-'+i)[0];

        let file = fileInput.files[0];
        let reader = new FileReader();

        reader.onload = function(e){
            let productMedia = e.target.result;
            let byteArray = new Uint8Array(atob(productMedia.split(',')[1]).split("").map(char => char.charCodeAt(0)));
            
            let formData_1 = new FormData();
            formData_1.append('productId', productId_1);
            formData_1.append('color', color);
            formData_1.append('size', size);
            formData_1.append('quantity', quantity);


  
            $.ajax({
                url: 'http://localhost:5000/products/add-product',
                //url: 'http://54.191.229.94:5000/add-product-information',
                type: 'PUT',
                data: formData_1,
                contentType: false,
                processData: false,
                success: function(response) {
                    console.log('Success:', response);
                    
                },
                error: function(xhr, status, error) {
                    console.error('Error:', xhr.responseText);
                    validationMessage("Product variant adding unsucessfull...!");

                }
            });


            let formData_2 = new FormData();
            formData_2.append('productId', productId_1);
            formData_2.append('colour', color);
            formData_2.append('imageData',  new Blob([byteArray], { type: 'application/octet-stream' }));


            
            $.ajax({
                url: 'http://localhost:5000/products/add-product',
                //url: 'http://54.191.229.94:5000/product/product-images/addImage',
                type: 'POST',
                data: formData_2,
                contentType: false,
                processData: false,
                success: function(response) {
                    console.log('Success:', response);
                },
                error: function(xhr, status, error) {
                    console.error('Error:', xhr.responseText);
                    validationMessage("Product image adding unsucessfull...!");

                }
            });
         };
         reader.readAsDataURL(file);

    }
    successMessageBox("Saving Successful", "The product has been successfully saved. All required fields were filled out correctly, and your data has been securely stored. Thank you for your attention to detail.");
    setTimeout(() => {
        location.reload();
    }, 3000);
    },5000);
  
    }


    
 
function successMessageBox(message,description) {

    const productDetailsContainer = document.getElementById('search-form');

    const html = `
        <div id="success-message-box" class="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div class="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z" fill="white" stroke="white"></path>
                </svg>
            </div>
            <div class="w-full">
                <h5 class="mb-3 text-lg font-bold text-black dark:text-[#34D399]">${message}</h5>
                <p class="text-base leading-relaxed text-body">${description}</p>
            </div>
        </div>

    `;

    productDetailsContainer.innerHTML = html;
    setTimeout(() => {
        location.reload();
    }, 3000);

}

function warningMessageBox(message,description) {

    const productDetailsContainer = document.getElementById('search-form');

    const html = `
                <div
                  class="flex w-full border-l-6 border-warning bg-warning bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9"
                >
                  <div
                    class="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-warning bg-opacity-30"
                  >
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
                        fill="#FBBF24"
                      ></path>
                    </svg>
                  </div>
                  <div class="w-full">
                    <h5 class="mb-3 text-lg font-bold text-[#9D5425]">
                      ${message}
                    </h5>
                    <p class="leading-relaxed text-[#D0915C]">
                    ${description}
                    </p>
                  </div>
                </div>
    `;

    productDetailsContainer.innerHTML = html;

}

function failedMessageBox(message,description) {

    const productDetailsContainer = document.getElementById('search-form');

    const html = `
                <div
                  class="flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9"
                >
                  <div
                    class="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                        fill="#ffffff"
                        stroke="#ffffff"
                      ></path>
                    </svg>
                  </div>
                  <div class="w-full">
                    <h5 class="mb-3 font-bold text-[#B45454]">
                      ${message}
                    </h5>
                    <ul>
                      <li class="leading-relaxed text-[#CD5D5D]">
                        ${description}
                      </li>
                    </ul>
                  </div>
                </div>
    `;

    productDetailsContainer.innerHTML = html;

}

function validationMessage(message){

    const productDetailsContainer = document.getElementById('validation-message');

    const html = `
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Something Went Wrong!</strong>
  <span class="block sm:inline">${message}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>
    `;

    productDetailsContainer.innerHTML = html;
}







