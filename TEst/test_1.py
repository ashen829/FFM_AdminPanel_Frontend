import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver_path = 'D:/My Doc/chromedriver-win64/chromedriver.exe'
service = Service(driver_path)

driver = webdriver.Chrome(service=service)

try:

    driver.get('http://localhost:3000/add-product.html')
    driver.maximize_window()
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'brandNameInput'))
    )
    select_element = driver.find_element(By.ID, 'brandNameInput')

    from selenium.webdriver.support.ui import Select
    select = Select(select_element)
    select.select_by_visible_text('Nike')

    time.sleep(10)

    selected_option = select.first_selected_option.text
    assert selected_option == 'Nike', f"Expected 'Nike', but got '{selected_option}'"

    print("Selected option:", selected_option)

    print("Test completed successfully")

finally:

    driver.quit()
