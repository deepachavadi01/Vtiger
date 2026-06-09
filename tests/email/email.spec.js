// import {test} from '@playwright/test'

// test('email',async ({page}) => {
//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')

//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     //  Email 
//     await page.locator('(//a[text()="Email"])[1]').click();

//     // Compose Email
//     await page.locator('//a[text()="Compose"]').click();

//     // Email Details

//     //cant add recepients -- it wont work
//     //! await page.locator('//input[@id="parent_name"]').fill('deep.chavadi@gmail.com')
//     // await page.locator('//input[@name="subject"]') .fill('Product Info');
//     // await page.locator('//textarea[@name="description"]') .fill('product details');

//     //Attach File
//     await page.locator('//input[@id="my_file_element"]').setInputFiles('C:/Users/Jagadish/Desktop/apple laptop.jpg');

//     //  Send Email
//     await page.locator('//input[@title="Save [Alt+S]"]').click()

// })
