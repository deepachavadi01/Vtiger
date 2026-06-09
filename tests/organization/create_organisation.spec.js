import {expect,test} from '@playwright/test'

//import org_details from '../../test_data/organisation.json'
import {org} from '../../pages/organisation.js'
import { login } from '../../pages/login.js'
import { logout } from '../../pages/logout.js'
import { orgs } from '../../utils/org_utils.js'
import org_details from '../../test_data/organisation.json'


// test('create_Organization',async ({page}) => {

//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')
//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()

//    //*org information
//     await page.locator('(//a[text()="Organizations"])[1]').click()
//     await page.waitForLoadState()
//     await page.getByTitle('Create Organization...').click()

//     // * organization name
//     //let orga='wipro1'
    
//     await page.locator('//input[@name="accountname"]').fill('wipro8')
//     let orga=await page.locator('//input[@name="accountname"]').inputValue()
//     console.log(orga)

//     await page.locator('//input[@name="website"]').fill('wipro@gmail.com')
//     await page.locator('//input[@id="phone"]').fill('5634489624')
//     await page.locator('//input[@id="email2"]').fill('wipro1@gmail.com')
//     //await page.locator('(//input[@type="text"])[2]').fill('wipro')
   
//     // let nav=await Promise.all([
//     //  page.waitForEvent('popup'),
//     //  await page.getByRole('button',{name:'Save'}).click()
//     // ])
 
//     //* industry
//      await page.locator('//select[@name="industry"]').selectOption({value:'Engineering'})


//     //* type
//     await page.locator('//select[@name="accounttype"]').selectOption({value:'Analyst'})
   
//     //* Assigned to
//     await page.locator('(//input[@type="radio"])[1]').click()


//     //* Address information/billing adress
//     await page.locator('//input[@id="bill_city"]').fill('Bangalore')
//     await page.locator('//input[@id="bill_state"]').fill('Karnataka')
//     await page.locator('//input[@id="bill_country"]').fill('India')


//     //* copy billing address
//     await page.locator('(//input[@name="cpy"])[2]').click()
     
//     await page.getByRole('button',{name:'Save'}).first().click()

//     //! validation:
//   //   //! without assertions(using if else stmt)

//   //  let orga_name=await page.locator('//span[@id="dtlview_Organization Name"]').textContent()
//   // if(orga_name===orga){
//   //   console.log('the organizationis created')
//   // }else{
//   //   console.log('the organization is not created')
//   // }
   
//   //! with assertions:

//   //* validation wheather  name field is visible or not
//   await expect(page.locator('//input[@name="accountname"]')).toBeVisible()
  
//  //* validation for org iname field
//   await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText('wipro8')

//    //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()


// })

// //....................................................................................................

// //!  "DDT"


// // import login_details from "../../test_data/login.json"
// // import org_details from "../../test_data/organisation.json"

// test('create_Organization1',async ({page}) => {

//     await page.goto(login_details.url)
//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()

//    //*org information
//     await page.locator('(//a[text()="Organizations"])[1]').click()
//     await page.waitForLoadState()
//     await page.getByTitle('Create Organization...').click()

//     // * organization name
//     //let orga='wipro1'
    
//     await page.locator('//input[@name="accountname"]').fill(org_details.org_name)
//     let orga=await page.locator('//input[@name="accountname"]').inputValue()
//     console.log(orga)

//     await page.locator('//input[@name="website"]').fill(org_details.website)
//     await page.locator('//input[@id="phone"]').fill(org_details.phone)
//     await page.locator('//input[@id="email2"]').fill(org_details.email)
//     //await page.locator('(//input[@type="text"])[2]').fill('wipro')
   
//     // let nav=await Promise.all([
//     //  page.waitForEvent('popup'),
//     //  await page.getByRole('button',{name:'Save'}).click()
//     // ])
 
//     //* industry
//      await page.locator('//select[@name="industry"]').selectOption({value:'Engineering'})


//     //* type
//     await page.locator('//select[@name="accounttype"]').selectOption({value:'Analyst'})
   
//     //* Assigned to
//     await page.locator('(//input[@type="radio"])[1]').click()


//     //* Address information/billing adress
//     await page.locator('//input[@id="bill_city"]').fill(org_details.city)
//     await page.locator('//input[@id="bill_state"]').fill(org_details.state)
//     await page.locator('//input[@id="bill_country"]').fill(org_details.country)


//     //* copy billing address
//     await page.locator('(//input[@name="cpy"])[2]').click()
     
//     await page.getByRole('button',{name:'Save'}).first().click()

//      //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()
// })


//...........................................................................................

//! POM :

test('organization',async ({page}) => {

    let obj=new login(page)
    await obj.signin()
    await obj.creadentials()

    let obj1=new org(page)
    await obj1.create_org()

    // org name validation
     console.log(await page.url());
    //await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText(org_details.organisation_name)
    
  // await expect(page.getByText('wipro16')).toBeVisible();

    // validation of org title
    //await expect(page.locator('//span[@class="dvHeaderText"]')).toContainText(org_details.organisation_name)
   
 

    let obj2=new logout(page)
    await obj2.signout
    
   })



