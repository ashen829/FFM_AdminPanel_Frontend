function saveBrand() {
    let brandId = $('#brand-id-input').val();
    let name = $('#brand-name-input').val();
    let fileInput = $('#dropzone-file')[0];

    // Check if all input fields are filled
    if (!brandId || !name || !fileInput.files.length || rowCount==0) {
        console.error("All fields are required.");
        alert("All fields are required!");
        return;
    }

    let measurements = [];
    console.log(rowCount);

    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let productMedia = e.target.result;
        let byteArray = new Uint8Array(atob(productMedia.split(',')[1]).split("").map(char => char.charCodeAt(0)));

        let brandData = {
            brandId: brandId,
            brandName: name,
            productMedia: Array.from(byteArray)
        };

        for (let i = 1; i <= rowCount; i++) {
            let category = document.getElementById('category-Select-'+i).value;
            let size = document.getElementById('size-Select-'+i).value;
            let item = document.getElementById('item-Select-'+i).value;
            let m1 = $('#m1-input-'+i).val();
            let m2 = $('#m2-input-'+i).val();
            let m3 = $('#m3-input-'+i).val();
            let m4 = $('#m4-input-'+i).val();
            let m5 = $('#m5-input-'+i).val();
            let m6 = $('#m6-input-'+i).val();
            let m7 = $('#m7-input-'+i).val();
            let m8 = $('#m8-input-'+i).val();
            let m9 = $('#m9-input-'+i).val();
            let m10 = $('#m10-input-'+i).val();
            let m11 = $('#m11-input-'+i).val();
            let m12 = $('#m12-input-'+i).val();
            let m13 = $('#m13-input-'+i).val();
            let m14 = $('#m14-input-'+i).val();

            let brandMeasurementData = {
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
            measurements.push(brandMeasurementData);
        }

        $.ajax({
            url: 'http://localhost:5000/Brand/add-brand',
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
                    url: 'http://localhost:5000/BrandMeasurement/addBrandMeasurements',
                    type: 'POST',                 
                    contentType: 'application/json',
                    data: JSON.stringify(measurements),
                    success: function(response) {
                        console.log("Brand Measurement saved successfully:", response);
                        alert("Brand Saved Successfully");
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
                        alert("Brand Saved Successfully");
                        for(let i=1 ;i<=rowCount;i++){
                            removeRow("row-"+i);
                        }
                    }
                });

        },3000);
    };
    reader.readAsDataURL(file);      
}






