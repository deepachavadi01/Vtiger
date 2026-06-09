import {expect,test} from '@playwright/test'
import { login } from '../../pages/login.js'
import { logout } from '../../pages/logout.js'
import tic_det from '../../test_data/raiseticket.json'
import { Ticket } from '../../pages/tickets.js'


// test('create_raiseticket',async ({page}) => {
//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')

//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()

    
//     await page.locator('(//a[text()="Trouble Tickets"])[1]').click()

//     // Create Trouble Ticket
//     await page.getByTitle('Create Ticket...').click()

//     // Ticket Title

//     await page.locator('//textarea[@name="ticket_title"]').fill('laptop issue1')

//      // assigned to
//     await page.locator('(//input[@type="radio"])[1]').click()


//     // Priority
//     await page.locator('//select[@name="ticketpriorities"]').selectOption({value:'High'})

//     // severity
//     await page.locator('//select[@name="ticketseverities"]').selectOption({value:'Critical'})

    
//     await page.locator('//select[@name="ticketcategories"]').selectOption({value:'Big Problem'})


//     // Status
//     await page.locator('//select[@name="ticketstatus"]').selectOption({value:'Open'})

//   // description
//     await page.locator('//textarea[@class="detailedViewTextBox"]').fill('laptop screen is damaged')

//     // Saving Ticket
//     await page.locator('(//input[@type="submit"])[1]').click()


// //* Validation:
// //title
// await expect(page.locator('//span[@id="dtlview_Title"]')).toContainText('laptop issue1')

// //Priority
// await expect(page.locator('//td[@id="mouseArea_Priority"]')).toContainText('High')

// //Severity
// await expect(page.locator('//span[@id="dtlview_Severity"]')).toContainText('Critical')

// //status
// await expect(page.locator('//td[@id="mouseArea_Status"]')).toContainText('Open')


//  //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()


// })

// //........................................................................................

// import login_details from '../../test_data/login.json'
// import ticket_details from '../../test_data/raiseticket.json'

// test.only('raiseticket',async ({page}) => {
//     await page.goto(login_details.url)

//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()

    
//     await page.locator('(//a[text()="Trouble Tickets"])[1]').click()

//     // Create Trouble Ticket
//     await page.getByTitle('Create Ticket...').click()

//     // Ticket Title

//     await page.locator('//textarea[@name="ticket_title"]').fill(ticket_details.Title)

//      // assigned to
//     await page.locator('(//input[@type="radio"])[1]').click()


//     // Priority
//     await page.locator('//select[@name="ticketpriorities"]').selectOption({value:'High'})

//     // severity
//     await page.locator('//select[@name="ticketseverities"]').selectOption({value:'Critical'})

    
//     await page.locator('//select[@name="ticketcategories"]').selectOption({value:'Big Problem'})


//     // Status
//     await page.locator('//select[@name="ticketstatus"]').selectOption({value:'Open'})

//   // description
//     await page.locator('//textarea[@class="detailedViewTextBox"]').fill(ticket_details.Description)

//     // Saving Ticket
//     await page.locator('(//input[@type="submit"])[1]').click()

//      //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()

// })
//.........................................................................................


//! POM
test('raiseticket',async ({page}) => {
    let obj=new login(page)
    await obj.signin()
    await obj.creadentials()

    let obj1=new Ticket(page)
    await obj1.create_newticket()

    //product title validation

    await expect(page.locator('//span[@id="dtlview_Title"]')).toContainText(tic_det.Title)


    let obj2=new logout(page)
     await obj2.signout

})