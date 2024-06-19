
function saveBrand() {
    let brandId = $('#brand-id-input').val();
    let name = $('#brand-name-input').val();
    let fileInput = $('#dropzone-file')[0];
    let category = document.getElementById('category-Select').value;
    let size = document.getElementById('size-Select').value;
    let item = document.getElementById('item-Select').value;
    let m1 = $('#m1-input').val();
    let m2 = $('#m2-input').val();
    let m3 = $('#m3-input').val();
    let m4 = $('#m4-input').val();
    let m5 = $('#m5-input').val();
    let m6 = $('#m6-input').val();
    let m7 = $('#m7-input').val();
    let m8 = $('#m8-input').val();
    let m9 = $('#m9-input').val();
    let m10 = $('#m10-input').val();
    let m11 = $('#m11-input').val();
    let m12 = $('#m12-input').val();
    let m13 = $('#m13-input').val();
    let m14 = $('#m14-input').val();


    if (fileInput.files && fileInput.files[0]) {
        let file = fileInput.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            let productMedia = e.target.result;
            // Convert the base64 string to a byte array
            let byteArray = new Uint8Array(atob(productMedia.split(',')[1]).split("").map(char => char.charCodeAt(0)));

            console.log(brandId);
            console.log(name);
            console.log(byteArray);
            console.log(category);
            console.log(size);
            console.log(item);
            console.log(m1);
            console.log(m2);
            console.log(m3);
            console.log(m4);
            console.log(m5);
            console.log(m6);
            console.log(m7);
            console.log(m8);
            console.log(m9);
            console.log(m10);
            console.log(m11);
            console.log(m12);
            console.log(m13);
            console.log(m14);

            let brandMeasurementData = {
                measurementId: null,
                category: category,
                size: size,
                item: item,
                brand: {
                    brandId: brandId,
                    name: name,
                    productMedia: Array.from(byteArray)
                },
                ankleCircumference: m1,
                armLength: m2,
                bicepCircumference: m3,
                calfCircumference: m4,
                chestCircumference: m5,
                forearmCircumference: m6,
                headCircumference: m7,
                hipCircumference: m8,
                insideLegLength: m9,
                neckCircumference: m10,
                shoulderBreadth: m11,
                shoulderToCrotch : m12,
                thighCircumference: m13,
                waistCircumference: m14
            }

            // Now you can send the byteArray to your backend API
            let brandData = {
                brandId: brandId,
                name: name,
                productMedia: Array.from(byteArray)
            };


            // Send brandData to your backend using AJAX, fetch, or any other method
            $.ajax({
                url: 'http://localhost:5000/Brand/saveBrand',
                type: 'POST',
                
                contentType: 'application/json',
                data: JSON.stringify(brandData),
                success: function(response) {
                    console.log("Brand saved successfully:", response);
                },
                error: function(error) {
                    console.error("Error saving brand:", error);
                }
            });



            setTimeout(function() {
                $.ajax({
                    url: 'http://localhost:5000/BrandMeasurement/saveMeasurement',
                    type: 'POST',
                    
                    contentType: 'application/json',
                    data: JSON.stringify(brandMeasurementData),
                    success: function(response) {
                        console.log("Brand Measurement saved successfully:", response);
                        $('#brand-id-input').val('');
                        $('#brand-name-input').val('');
                        $('#dropzone-file').val('');
                        $('#category-Select').val('');
                        $('#size-Select').val('');
                        $('#item-Select').val('');
                        $('#m1-input').val('');
                        $('#m2-input').val('');
                        $('#m3-input').val('');
                        $('#m4-input').val('');
                        $('#m5-input').val('');
                        $('#m6-input').val('');
                        $('#m7-input').val('');
                        $('#m8-input').val('');
                        $('#m9-input').val('');
                        $('#m10-input').val('');
                        $('#m11-input').val('');
                        $('#m12-input').val('');
                        $('#m13-input').val('');
                        $('#m14-input').val('');
                    },
                    error: function(error) {
                        console.error("Error saving brand measurement:", error);
                    }
                });

            },5000);
        };

        reader.readAsDataURL(file);
    } else {
        showSuccessMessage();
        console.error("No file selected.");

    }
}


