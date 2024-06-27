
    async function fetchProductData(brandId) {
        try {
            //const response = await fetch(`http://54.191.229.94:5000/Brand/${brandId}`);
            const response = await fetch(`http://localhost:5000/Brand/${brandId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const brandData = await response.json();
            return brandData;
        } catch (error) {
            console.error('Error fetching brand data:', error);
            warningValidationMessage('Brand Id not found');
        }
    }

    async function displayMeasurementDetails(brandId) {
        const brandData = await fetchProductData(brandId);
        const brandDetailsContainer = document.querySelector('#brand-details tbody');

        const html = `
            

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">
                    <img src="data:image/jpeg;base64,${brandData.productMedia}" style="max-width: 50px;  margin-left: 20px;">
                </td>
                <td class="px-6 py-4">${brandData.brandName}</td>
                <td id="product-id-input" class="px-6 py-4">${brandData.brandId}</td>
                <td>
                    <div class="flex items-center p-2.2 xl:p-3">
                        <div x-data="{ isOptionSelected: false }" class="relative z-20 bg-transparent dark:bg-form-input">
                              <select id="item-Select" class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2.5 pr-10 py-1.5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" :class="isOptionSelected && 'text-black dark:text-white'" @change="isOptionSelected = true">
                                <option value="" class="text-body">Select Item</option>
                                <option value="T-Shirt" class="text-body">T-Shirt</option>
                                <option value="Shirt" class="text-body">Shirt</option>
                                <option value="Short" class="text-body">Short</option>
                                <option value="Denim" class="text-body">Denim</option>
                                <option value="Bottom" class="text-body">Bottom</option>
                                <option value="Tops & T-Shirts" class="text-body">Tops & T-Shirts</option>
                                <option value="Party Frock" class="text-body">Party Frock</option>
                                <option value="Jeans" class="text-body">Jeans</option>
                                <option value="Blouse" class="text-body">Blouse</option>
                                <option value="Night Dress" class="text-body">Night Dress</option>
                                <option value="Jacket" class="text-body">Jacket</option>
                                <option value="Dresses" class="text-body">Dresses</option>
                              </select>
                              <span class="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                                <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g opacity="0.8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill=""></path>
                                  </g>
                                </svg>
                              </span>
                            </div>
                    </div>
                </td>
                <td>
                    <div class="flex items-center p-2.5 xl:p-5">
                            <div x-data="{ isOptionSelected: false }" class="relative z-20 bg-transparent dark:bg-form-input">
                              <select id="category-Select" class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2.5 pr-10 py-1.5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" :class="isOptionSelected && 'text-black dark:text-white'" @change="isOptionSelected = true">
                                <option value="" class="text-body">Select Gender</option>
                                <option value="Men" class="text-body">Men</option>
                                <option value="Women" class="text-body">Women</option>
                                <option value="Kids" class="text-body">Kids</option>
                                <option value="Unisex" class="text-body">Unisex</option>
                                <option value="Sport" class="text-body">Sport</option>
                                <option value="Footwear" class="text-body">Footwear</option>
                              </select>
                              <span class="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                                <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g opacity="0.8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill=""></path>
                                  </g>
                                </svg>
                              </span>
                            </div>
                    </div>
                </td>
                <td>
                    <div class="flex items-center p-2.5 xl:p-5">
                        <div x-data="{ isOptionSelected: false }" class="relative z-20 bg-transparent dark:bg-form-input">
                              <select id="size-Select" class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2.5 pr-10 py-1.5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" :class="isOptionSelected && 'text-black dark:text-white'" @change="isOptionSelected = true">
                                <option value="" class="text-body">Select Size</option>
                                <option value="Extra Small" class="text-body">Extra Small</option>
                                <option value="Small" class="text-body">Small</option>
                                <option value="Medium" class="text-body">Medium</option>
                                <option value="Large" class="text-body">Large</option>
                                <option value="XXL" class="text-body">XXL</option>
                              </select>
                                <span class="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                                  <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill=""></path>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                            </div>
                    </div>
                </td>
                <td class="px-6 py-4 flex justify-center items-center">
                    <button id="fetchButton" onclick="fetchMeasurementData()" type="button" class="text-green-700 mt-1 ml-1 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Search</button>
                </td>
            </tr>
        `;

        brandDetailsContainer.innerHTML = html;
    }

async function fetchMeasurementData() {
    try {
        let brandId = $('#product-id-input').text();
        let category = $('#category-Select').val();
        let size = $('#size-Select').val();
        let item = $('#item-Select').val();

        console.log("Fetching data with parameters:");
        console.log("Brand ID:", brandId);
        console.log("Category:", category);
        console.log("Size:", size);
        console.log("Item:", item);

        //const url = `http://54.191.229.94:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;
        const url = `http://localhost:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;
        console.log("Fetch URL:", url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const measurementData = await response.json();
        console.log("Measurement Data:", measurementData);
        console.log(measurementData[0].measurement_id)

        if (measurementData.length > 0) {
            document.getElementById('ankleCircumference').value = measurementData[0].ankleCircumference;
            document.getElementById('armLength').value = measurementData[0].armLength;
            document.getElementById('bicepCircumference').value = measurementData[0].bicepCircumference;
            document.getElementById('calfCircumference').value = measurementData[0].calfCircumference;
            document.getElementById('chestCircumference').value = measurementData[0].chestCircumference;
            document.getElementById('forearmCircumference').value = measurementData[0].forearmCircumference;
            document.getElementById('headCircumference').value = measurementData[0].headCircumference;
            document.getElementById('hipCircumference').value = measurementData[0].hipCircumference;
            document.getElementById('insideLegLength').value = measurementData[0].insideLegLength;
            document.getElementById('neckCircumference').value = measurementData[0].neckCircumference;
            document.getElementById('shoulderBreadth').value = measurementData[0].shoulderBreadth;
            document.getElementById('shoulderToCrotch').value = measurementData[0].shoulderToCrotch;
            document.getElementById('thighCircumference').value = measurementData[0].thighCircumference;
            document.getElementById('waistCircumference').value = measurementData[0].waistCircumference;
            document.getElementById('wristCircumference').value = measurementData[0].wristCircumference;
        } else {
            warningValidationMessage("Measurement data array is empty or undefined.");          
        }

        return measurementData;
    } catch (error) {
        warningValidationMessage("Measurement data array is empty or undefined.");
        
    }
}


    async function updateBrandMeasurement() {
        let category = $('#category-Select').val();
        let size = $('#size-Select').val();
        let item = $('#item-Select').val();
        let brandId = $('#product-id-input').text();
        
        //const url = `http://54.191.229.94:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;
        const url = `http://localhost:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;


        console.log("Fetch URL:", url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const measurementData = await response.json();
        console.log("Measurement Data:", measurementData);
        console.log(measurementData[0].measurement_id);
        let measurementId = measurementData[0].measurement_id;
        let ankleCircumference = document.getElementById('ankleCircumference').value;
        let armLength = document.getElementById('armLength').value;
        let bicepCircumference = document.getElementById('bicepCircumference').value;
        let calfCircumference = document.getElementById('calfCircumference').value;
        let chestCircumference = document.getElementById('chestCircumference').value;
        let forearmCircumference = document.getElementById('forearmCircumference').value;
        let headCircumference = document.getElementById('headCircumference').value;
        let hipCircumference = document.getElementById('hipCircumference').value;
        let insideLegLength = document.getElementById('insideLegLength').value;

        let neckCircumference = document.getElementById('neckCircumference').value;
        let shoulderBreadth = document.getElementById('shoulderBreadth').value;
        let shoulderToCrotch = document.getElementById('shoulderToCrotch').value;
        let thighCircumference = document.getElementById('thighCircumference').value;

        let waistCircumference = document.getElementById('waistCircumference').value;
        let wristCircumference = document.getElementById('wristCircumference').value;

        console.log(armLength);
    
        // Create a JSON object
        const measurements = {
            ankleCircumference : ankleCircumference,
            armLength : armLength,
            bicepCircumference : bicepCircumference,
            calfCircumference : calfCircumference,
            chestCircumference : chestCircumference,

            forearmCircumference : forearmCircumference,
            headCircumference : headCircumference,
            hipCircumference : hipCircumference,
            insideLegLength : insideLegLength,
            neckCircumference : neckCircumference,
            shoulderBreadth : shoulderBreadth,
            shoulderToCrotch :shoulderToCrotch,
            thighCircumference :thighCircumference,
            waistCircumference :waistCircumference,
            wristCircumference :wristCircumference
        };

        //Send the PUT request
        try {
            //const response = await fetch(`http://54.191.229.94:5000/BrandMeasurement/${measurementId}`, {
            const response = await fetch(`http://localhost:5000/BrandMeasurement/${measurementId}`, {    
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(measurements)
            });

            if (response.ok) {
                successValidationMessage('Measurement data updated successfully');
            } else {
                warningValidationMessage('Failed to update measurement data');
            }
        } catch (error) {
            warningValidationMessage('Error:', error);

        }
    }

    async function deleteMeasurement(){
        let brandId = $('#product-id-input').text();
        let category = $('#category-Select').val();
        let size = $('#size-Select').val();
        let item = $('#item-Select').val();

        console.log("Fetching data with parameters:");
        console.log("Brand ID:", brandId);
        console.log("Category:", category);
        console.log("Size:", size);
        console.log("Item:", item);

        //const url = `http://54.191.229.94:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;
        const url = `http://localhost:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;
        console.log("Fetch URL:", url);

        const response = await fetch(url);


        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const measurementData = await response.json();
        console.log("Measurement Data:", measurementData);
        console.log(measurementData[0].measurement_id)
        let measurementId = measurementData[0].measurement_id;

        try {
            //const response = await fetch(`http://54.191.229.94:5000/BrandMeasurement/deleteBrandMeasurement/${measurementId}`, {
            const response = await fetch(`http://localhost:5000/BrandMeasurement/deleteBrandMeasurement/${measurementId}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            successValidationMessage('Measurement data deleted successfully');
            setTimeout(() => {
                location.reload();
            }, 6000);
        } else {
            warningValidationMessage('Failed to delete measurement data');
            setTimeout(() => {
                location.reload();
            }, 6000);
        }
        } catch (error) {
            warningValidationMessage('Error:', error);
        }


    }

    async function addMeasurement(){
        let brandId = $('#product-id-input').text();
        let category = $('#category-Select').val();
        let size = $('#size-Select').val();
        let item = $('#item-Select').val();

        console.log("Fetching data with parameters:");
        console.log("Brand ID:", brandId);
        console.log("Category:", category);
        console.log("Size:", size);
        console.log("Item:", item);

        //const url = `http://54.191.229.94:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;
        const url = `http://localhost:5000/BrandMeasurement/${brandId}-${category}-${item}-${size}`;
        console.log("Fetch URL:", url);

        const response = await fetch(url);


        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const measurementData = await response.json();
        console.log("Measurement Data:", measurementData);
        let ankleCircumference = document.getElementById('ankleCircumference').value;
        let armLength = document.getElementById('armLength').value;
        let bicepCircumference = document.getElementById('bicepCircumference').value;
        let calfCircumference = document.getElementById('calfCircumference').value;
        let chestCircumference = document.getElementById('chestCircumference').value;
        let forearmCircumference = document.getElementById('forearmCircumference').value;
        let headCircumference = document.getElementById('headCircumference').value;
        let hipCircumference = document.getElementById('hipCircumference').value;
        let insideLegLength = document.getElementById('insideLegLength').value;

        let neckCircumference = document.getElementById('neckCircumference').value;
        let shoulderBreadth = document.getElementById('shoulderBreadth').value;
        let shoulderToCrotch = document.getElementById('shoulderToCrotch').value;
        let thighCircumference = document.getElementById('thighCircumference').value;

        let waistCircumference = document.getElementById('waistCircumference').value;
        let wristCircumference = document.getElementById('wristCircumference').value;

                // Create a JSON object
        const measurements = {
                    brandId : brandId,
                    ankleCircumference : ankleCircumference,
                    armLength : armLength,
                    bicepCircumference : bicepCircumference,
                    calfCircumference : calfCircumference,
                    chestCircumference : chestCircumference,      
                    forearmCircumference : forearmCircumference,
                    headCircumference : headCircumference,
                    hipCircumference : hipCircumference,
                    insideLegLength : insideLegLength,
                    neckCircumference : neckCircumference,
                    shoulderBreadth : shoulderBreadth,
                    shoulderToCrotch :shoulderToCrotch,
                    thighCircumference :thighCircumference,
                    waistCircumference :waistCircumference,
                    wristCircumference :wristCircumference
        };
        try {
            
            const response = await fetch(`http://localhost:5000/BrandMeasurement/addBrandMeasurement/${brandId}`, {    
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(measurements)
            });

            if (response.ok) {
                successValidationMessage('Measurement data added successfully');
            } else {
                warningValidationMessage('Failed to add measurement data');
            }
        } catch (error) {
            warningValidationMessage('Error:', error);

        }




    }

    function successValidationMessage(message){
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
        setTimeout(() => {
            productDetailsContainer.style.display = 'none';
        }, 5000);
    }

    function warningValidationMessage(message){
        const productDetailsContainer = document.getElementById('validation-message');
    
        const html = `
            <div class="bg-red-100 border border-red-400 text-red-700 w-400 px-4 py-2 ml-5 mr-5 rounded relative" role="alert">
                <strong class="font-bold">Failed!</strong>
                <span class="block sm:inline">${message}</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        `;
    
        productDetailsContainer.innerHTML = html;

        productDetailsContainer.innerHTML = html;
        setTimeout(() => {
            productDetailsContainer.style.display = 'none';
        }, 5000);
    }





   