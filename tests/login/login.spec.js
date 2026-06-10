// import {test} from '@playwright/test'
// import login_details from '../../test_data/login.json'



// test('login',async ({page}) => {
//     await page.goto(login_details)

//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()

//  //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()

// })
//....................................................................
//!   POM :

import {test} from '@playwright/test'
import login_det from '../../test_data/login.json'
import { login } from '../../pages/login.js';


// test('pom',async ({page}) => {
//     let logi = new login(page)
//     await logi.page.goto(login)
//     await logi.username.fill(login_det.user)
//     await logi.password.fill(login_det.password)
//     await logi.button.click()
// })


test('methods',async ({page}) => {
    let login_methods = new login(page)
    await login_methods.signin()
    await login_methods.creadentials()
   }) 


