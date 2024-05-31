
function saveProduct() {
    let title = $('#titleInput').val();
    let productId = $('#productIdInput').val();
    let description = $('#descriptionInput').val();
    let mediaFile = $('#dropzone-file')[0].files[0];
    let brandName = $('#brandNameInput option:selected').text();
    let productCategory = $('#productCategoryInput option:selected').text();
    let itemCategory = $('#itemCategoryInput option:selected').text();
    let color = $('#colorInput option:selected').text();
    let price = $('#priceInput').val();
    let noOfItems = $('#noOfItemsInput').val();
    let imageFile = $('#dropzone-file-1')[0].files[0];
    let size = $('#sizeInput option:selected').text();

    console.log(title);
    console.log(productId);
    console.log(description);
    console.log(brandName);
    console.log(productCategory);
    console.log(itemCategory);
    console.log(color);
    console.log(size); 
    console.log(price);
    console.log(noOfItems);

    $.ajax({
        method : "POST",
        contentType : "application/json",
        url : "http://localhost:5000/Product/saveProduct",
        async: true,
        data:JSON.stringify({
            
                "productId": productId,
                "productName": title,
                "brand": {
                    "brandId": "B124",
                    "name": brandName,
                    "productMedia": "iVBORw0KGgoAAAANSUhEUgAAAAUA"
                },
                "price": price,
                "description": description,
                "productMedia": "iVBORw0KGgoAAAANSUhEUgAAAAUA",
                "productCategory": productCategory,
                "itemCategory": itemCategory
            
        })
    })


    // Convert image file to Base64
    if (imageFile) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let base64String = e.target.result.split(',')[1];
            console.log(base64String); // Print Base64 string

            // You can now send the base64String to your API
            // Example:
            // $.post('/your-api-endpoint', { image: base64String });
        }
        reader.readAsDataURL(imageFile);
    }

    // Convert media file to Base64
    if (mediaFile) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let base64String = e.target.result.split(',')[1];
            console.log(base64String); // Print Base64 string

            // You can now send the base64String to your API
            // Example:
            // $.post('/your-api-endpoint', { media: base64String });
        }
        reader.readAsDataURL(mediaFile);
    }
}

