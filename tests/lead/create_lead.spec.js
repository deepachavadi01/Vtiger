import {expect,test} from '@playwright/test'

import { login } from '../../pages/login.js'
import { Lead } from '../../pages/lead.js'
import { leads } from '../../utils/lead_utls.js'
import lead_det from '../../test_data/lead.json'
import { logout } from '../../pages/logout.js'


// test('create_lead',async ({page}) => {
//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')
//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()
//    // await page.locator('(//input[@type="submit][1]').click()


//     //* creation
//     await page.locator('(//a[text()="Leads"])[1]').click()
//     await page.getByTitle('Create Lead...').click()


//     let lead='Deepa_lead1'
//     await page.locator('//input[@name="firstname"]').fill('Deepa_lead1')
//     let lead_name= await page.locator('//input[@name="firstname"]').inputValue()
//     console.log(lead_name)

//     await page.locator('//input[@name="lastname"]').fill('M')
//     await page.locator('//input[@name="company"]').fill('wipro1')
//     await page.locator('//input[@id="phone"]').fill('8123365942')

//     //*lead source
//     await page.locator('//select[@name="leadsource"]').selectOption({value:"Employee"})


//     //*industry
//     await page.locator('//select[@name="industry"]').selectOption({value:"Engineering"})


//     //*lead status
//     await page.locator('//select[@name="leadstatus"]').selectOption({value:"Qualified"})


//     //* rating
//    await page.locator('//select[@name="rating"]').selectOption({value:"Active"})


//    //*Assigned to 
//    await page.locator('(//input[@type="radio"])[1]').click()


//    await page.locator('//input[@id="country"]').fill('India')
//    await page.locator('//input[@id="city"]').fill('Bangalore')
//    await page.locator('//input[@id="state"]').fill('Karnataka')
//    await page.locator('(//input[@type="submit"])[1]').click()
//    //await page.locator('button',{name:'Save'}).first().click()
   

//    //! validation:

//  let lead_name1= await page.locator('//span[@id="dtlview_First Name"]').textContent()

// if(lead_name1===lead){
//     console.log('lead is created')
// }else{
//     console.log('creation of lead is failed')
// }



// //Using Assertion:

// await expect(page.locator('//td[@id="mouseArea_First Name"]')).toContainText('Deepa_lead1')

// //company
// await expect(page.locator('//td[@id="mouseArea_Company"]')).toContainText('wipro1')


// //lead source
// await expect(page.locator('//td[@id="mouseArea_Lead Source"]')).toContainText('	Employee')

// //industry
// await expect(page.locator('//td[@id="mouseArea_Industry"]')).toContainText('Engineering')



// //! Assigned to 
// // await expect(page.locator(' //a[text()="Administrator"]')).toContainText('Administrator')

//   //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()

// })

// //...................................................................................
// //! DDT


// // import login_details from '../../test_data/login.json'
// // import lead_deatils  from '../../test_data/lead.json'

// test.only('create_lead1',async ({page}) => {
//     await page.goto(login_details.url)
//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()
//    // await page.locator('(//input[@type="submit][1]').click()


//     //* creation
//     await page.locator('(//a[text()="Leads"])[1]').click()
//     await page.getByTitle('Create Lead...').click()


//     let lead='Deepa_lead1'
//     await page.locator('//input[@name="firstname"]').fill(lead_deatils.fname)
//     let lead_name= await page.locator('//input[@name="firstname"]').inputValue()
//     console.log(lead_name)

//     await page.locator('//input[@name="lastname"]').fill(lead_deatils.lname)
//     await page.locator('//input[@name="company"]').fill(lead_deatils.company)
//     await page.locator('//input[@id="phone"]').fill('8123365942')

//     //*lead source
//     await page.locator('//select[@name="leadsource"]').selectOption({value:"Employee"})


//     //*industry
//     await page.locator('//select[@name="industry"]').selectOption({value:"Engineering"})


//     //*lead status
//     await page.locator('//select[@name="leadstatus"]').selectOption({value:"Qualified"})


//     //* rating
//    await page.locator('//select[@name="rating"]').selectOption({value:"Active"})


//    //*Assigned to 
//    await page.locator('(//input[@type="radio"])[1]').click()


//    await page.locator('//input[@id="country"]').fill(lead_deatils.Country)
//    await page.locator('//input[@id="city"]').fill(lead_deatils.city)
//    await page.locator('//input[@id="state"]').fill(lead_deatils.State)
//    await page.locator('(//input[@type="submit"])[1]').click()

//      //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()


// })
//....................................................................................
//! POM :

test('lead',async ({page}) => {
  let obj=new login(page)
  await obj.signin()
  await obj.creadentials()

  let obj2=new Lead(page)
  await obj2.create_lead()

  //verify lead is created
  let expectedLeadName=lead_det.lname
   await expect(page.locator('//span[@class="dvHeaderText"]')).toContainText(expectedLeadName);
   console.log(await page.url());
  //await expect(page.locator('//span[@class="dvHeaderText"]')).toContainText(lead_det.fname)
 
  // verify firstname
  await expect(page.locator('//span[@id="dtlview_First Name"]')).toContainText(lead_det.fname)
  console.log(await page.url());
  

  // let obj3=new leads(page)
  // await obj3.lead_utls()

  let obj4=new logout(page)
  await obj4.signout

  
})

