// import {expect,test} from '@playwright/test'

// test('dashboard',async ({page}) => {
//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')

//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     await page.locator('//a[text()="Dashboard"]').click()

//     //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()
// })

// //....................................................................................
// //! ddt

// import login_details from '../../test_data/login.json'
// import dashboard_details from '../../test_data/dashboard.json'

// test('dashboard1',async ({page}) => {
//     await page.goto(login_details.url)

//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()

//     await page.locator('//a[text()="Dashboard"]').click()

//     //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()
// })