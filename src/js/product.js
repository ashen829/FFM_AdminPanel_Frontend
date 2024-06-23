
function saveProduct() {
    let productName = $('#product-title-input').val();
    let productId = $('#product-id-input').val();
    let description = $('#description-input').val();
    let brand = $('#brand-name-Input').val();
    let price = $('#price-Input').val();
    let gender = $('#gender-Select').val();
    let productCategory = $('#category-Select').val();

    if (!productName || !productId || !description || !brand || !price || !gender || !productCategory) {
        console.error("All fields are required.");
        alert("All fields are required!");
        return;
    }


    let formData = new FormData();
    formData.append('productId', productId);
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('brand', brand);
    formData.append('gender', gender);
    formData.append('productCategory', productCategory);
    formData.append('description', description);

    $.ajax({
        url: 'http://localhost:5000/add-product',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
            console.log('Success:', response);
        },
        error: function(xhr, status, error) {
            console.error('Error:', xhr.responseText);
        }
    });

    setTimeout(function() {
    for(let i=1;i<=rowCount;i++){

        let productId_1 = $('#product-id-input').val();
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
                url: 'http://localhost:5000/add-product-information',
                type: 'PUT',
                data: formData_1,
                contentType: false,
                processData: false,
                success: function(response) {
                    console.log('Success:', response);
                    
                },
                error: function(xhr, status, error) {
                    console.error('Error:', xhr.responseText);
                }
            });


            let formData_2 = new FormData();
            formData_2.append('productId', productId_1);
            formData_2.append('colour', color);
            formData_2.append('imageData',  new Blob([byteArray], { type: 'application/octet-stream' }));


            $.ajax({
                url: 'http://localhost:5000/product/product-images/addImage',
                type: 'POST',
                data: formData_2,
                contentType: false,
                processData: false,
                success: function(response) {
                    console.log('Success:', response);
                },
                error: function(xhr, status, error) {
                    console.error('Error:', xhr.responseText);
                }
            });
         };
         reader.readAsDataURL(file);

    }
    alert("Product Saved!");
    },3000);


 
}

function clearInputs() {
    // Clear main product inputs
    $('#product-title-input').val('');
    $('#product-id-input').val('');
    $('#description-input').val('');
    $('#brand-name-input').val('');
    $('#price-input').val('');
    $('#gender-select').val('');
    $('#category-select').val('');

    // Clear additional product information inputs
    for (let i = 1; i <= rowCount; i++) {
        $('#color-select-' + i).val('');
        $('#size-select-' + i).val('');
        $('#quantity-select-' + i).val('');
        $('#dropzone-file-' + i).val(''); // Reset file input
    }
}





