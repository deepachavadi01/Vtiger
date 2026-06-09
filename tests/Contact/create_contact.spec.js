import {expect,test} from '@playwright/test'


//import contact_details from '../../test_data/contact.json'
import { login } from '../../pages/login.js'
import {contact} from '../../pages/contact.js'
import { contacts_utils } from '../../utils/contact_utils.js'
import { contact_dpdwn } from '../../utils/dpdwn.js'
import contact_det from '../../test_data/contact.json'
import { logout } from '../../pages/logout.js'

// test('create_contact',async ({page}) => {
//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')

//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     //* contact information
//     await page.locator('(//a[text()="Contacts"])[1]').click()
//     await page.getByTitle('Create Contact...').click()
    
//    await page.locator('//input[@name="firstname"]').fill('Deepa1')
//    let fname=await page.locator('//input[@name="firstname"]').inputValue()
//    console.log(fname)
//    await page.locator('//input[@name="lastname"]').fill('M')

//     await page.locator('//input[@id="email"]').fill('DeepaM@gmail.com')
//     await page.locator('//input[@id="phone"]').fill('5608831265')
//    await page.locator('//select[@name="leadsource"]').selectOption({value:"Employee"})
//    await page.locator('//input[@type="radio"]').first().click()
    
//     //* customer portal address
//     await page.locator('(//input[@type="checkbox"])[5]').isChecked()
//    // await page.getByRole('checkbox',{name:'portal'}).check()

//     //* address inofrmation
//     await page.locator('(//input[@id="mailingcity"])').fill('Mysore')
//     await page.locator('(//input[@id="mailingstate"])').fill('Karnataka')
//     await page.locator('(//input[@id="mailingcountry"])').fill('India')


//     //* copy other address

//     await page.locator('(//input[@id="othercity"])').fill('Mysore')
//     await page.locator('(//input[@id="otherstate"])').fill('Karnataka')
//     await page.locator('(//input[@id="othercountry"])').fill('India')


//     await page.getByRole('button',{name:'Save'}).first().click()
  

//     //! validation:  Contact Name
//  //* using if else stmt
// let contact_name=await page.locator('//span[@id="dtlview_First Name"]').textContent()

// if(contact_name===fname)
// {
//     console.log('contact is created')

// }else{
//     console.log('contact is not created')
// }
   
// //* using Assertion:

// await expect(page.locator('//td[@id="mouseArea_First Name"]')).toContainText('Deepa1')
// await expect(page.locator('//td[@id="mouseArea_Last Name"]')).toContainText('M')
// await expect(page.locator('//span[@id="dtlview_Email"]')).toBeVisible()

// //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()
// })

// //orange hrm URl: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login (working fine)

// //.....................................................................................

// //! DDt


// // import login_details from '../../test_data/login.json'
// // import contact_details from '../../test_data/contact.json'

// test('create_contact1',async ({page}) => {
//     await page.goto(login_details.url)

//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()

//     //* contact information
//     await page.locator('(//a[text()="Contacts"])[1]').click()
//     await page.getByTitle('Create Contact...').click()
    
//    await page.locator('//input[@name="firstname"]').fill(contact_details.fname)
//    let fname=await page.locator('//input[@name="firstname"]').inputValue()
//    console.log(fname)
//    await page.locator('//input[@name="lastname"]').fill(contact_details.lname)

//    await page.locator('//input[@id="email"]').fill(contact_details.email)
//    await page.locator('//input[@id="phone"]').fill(contact_details.phone)
//    await page.locator('//select[@name="leadsource"]').selectOption({value:"Employee"})
//    await page.locator('//input[@type="radio"]').first().click()
    
//     //* customer portal address
//     await page.locator('(//input[@type="checkbox"])[5]').isChecked()
//    // await page.getByRole('checkbox',{name:'portal'}).check()

//     //* address inofrmation
//     await page.locator('(//input[@id="mailingcity"])').fill(contact_details.address_city)
//     await page.locator('(//input[@id="mailingstate"])').fill(contact_details.address_state)
//     await page.locator('(//input[@id="mailingcountry"])').fill(contact_details.address_state)


//     //* copy other address

//     await page.locator('(//input[@id="othercity"])').fill(contact_details.address_city)
//     await page.locator('(//input[@id="otherstate"])').fill(contact_details.address_state)
//     await page.locator('(//input[@id="othercountry"])').fill(contact_details.address_country)


//     await page.getByRole('button',{name:'Save'}).first().click()

//     //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()

// })
//...................................................................................................

//! POM:

test.only('contact',async ({page}) => {
    let obj=new login(page)
    await obj.signin()
    await obj.creadentials()
    

    let obj1=new contact(page)
    // let expectedLastName =await obj1.create_contact();
    await obj1.create_contact()

    //first name validation
    await expect(page.locator('//td[@id="mouseArea_First Name"]')).toContainText(contact_det.fname)
   // await expect(page.locator('//td[@id="mouseArea_First Name"]')).toHaveValue()

    //lastname validation
    await expect(page.locator('//td[@id="mouseArea_Last Name"]')).toContainText(contact_det.lname)
    //await expect(page.locator('//span[@id="dtlview_Email"]')).toBeVisible()

    //search validation
    //await expect(page.locator('//a[contains(text(),"M")]')).toBeVisible();

    // verify contact created successfully
    await expect(page.locator('//span[@class="dvHeaderText"]')).toContainText(contact_det.lname)
     //await expect(page.locator('//span[@class="dvHeaderText"]')).toHaveValue(contact_det.lname)

    let obj2=new logout(page)
    await obj2.signout
})
//.............................................................................


