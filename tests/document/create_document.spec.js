import {expect,test} from '@playwright/test'
import { login } from '../../pages/login.js'
import { logout } from '../../pages/logout.js'
import { Document } from '../../pages/document.js'
import { docs } from '../../utils/doc.utils.js'
import doc_det from '../../test_data/document.json'


// test('create_document',async ({page}) => {
//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')

//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     //* documnet creation
//     await page.locator('(//a[text()="Documents"])[1]').click()
//     await page.getByTitle('Create Document...').click();

//     //* title
//     await page.locator('//input[@name="notes_title"]').fill('Laptop doc2');

//     await page.locator('(//input[@type="radio"])[1]').click()
//     //await page.locator('//span[@id="cke_notecontent"').fill('Laptop related Document')

//     //* fileupload
//     await page.locator('//input[@id="filename_I__"]').setInputFiles("C:/Users/Jagadish/Desktop/laptopdoc.docx")

//     await page.getByRole('button',{name:'Save'}).first().click()


// //!validation:
//    await expect(page.locator('//span[@id="dtlview_Title"]')).toContainText('Laptop doc2')
//    await expect(page.locator('//input[@name="filestatus"]')).toBeChecked()

//       //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()
// })

// //............................................................................................

// import login_details from '../../test_data/login.json'
// import create_doc from '../../test_data/document.json'

// test.only('create_doc1',async ({page}) => {
//     await page.goto(login_details.url)

//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()

//     //* documnet creation
//     await page.locator('(//a[text()="Documents"])[1]').click()
//     await page.getByTitle('Create Document...').click();

//     //* title
//     await page.locator('//input[@name="notes_title"]').fill(create_doc.title);

//     await page.locator('(//input[@type="radio"])[1]').click()
//     //await page.locator('//span[@id="cke_notecontent"').fill('Laptop related Document')

//     //* fileupload
//     await page.locator('//input[@id="filename_I__"]').setInputFiles(create_doc.inputfile)

//     await page.getByRole('button',{name:'Save'}).first().click()

//       //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()

// })
//..............................................................................................
//! POM :

test('document',async ({page}) => {

    let obj=new login(page)
    await obj.signin()
    await obj.creadentials()

    let obj1=new Document(page)
    await obj1.create_doc()
   

    //documnet title validation
  
   await expect(page.locator('//span[@id="dtlview_Title"]')).toContainText(doc_det.title)
   console.log(await page.url());
   //await page.pause()


    let obj3=new logout(page)
    await obj3.signout
    
})
