import contact_det from '../test_data/contact.json'
import { window } from '../utils/windowpopup.js'
import { contacts_utils } from '../utils/contact_utils.js'
import { dropdown } from '../utils/dpdwn.js'
//import { search_dpdwn } from '../utils/contact_dpdwn.js'
import { search_dpdwn } from '../utils/contactsearch_dpdwn.js'
//import { login_details } from '../pages/login'


export class contact{
    constructor(page){
        //click on contact tab
        this.page=page
        this.contact=page.locator('(//a[text()="Contacts"])[1]')
        this.createcontact=page.getByTitle('Create Contact...')
         // fill contact info
         this.firstname=page.locator('//input[@name="firstname"]')
         this.lastname=page.locator('//input[@name="lastname"]')
          //(+)sign popup   
          this.img_popup=page.getByAltText('Select')
        //this.img_popup=page.locator('(//img[@title="Select"])[1]')   
        //this.img_popup=page.locator('//img[@alt="Select"]')
      
         this.popupsearchtxt=page.locator('//input[@id="search_txt"]')
         //this.select_orgname=page.locator('//a[text()="wipro1"]')
         this.popupsearchbtn=page.locator('//input[@name="search"]')

         this.emailid=page.locator('//input[@id="email"]')  
         this.Phone=page.locator('//input[@id="phone"]')
         //dropdown
          this.Leadsource=page.locator('//select[@name="leadsource"]')
         // radio button(Assigned to)
          this.assignedto=page.locator('//input[@type="radio"]').first()
          // checkbox
          this.portaluser =page.locator('(//input[@type="checkbox"])[5]')
          // address info
          this.City=page.locator('(//input[@id="othercity"])')
          this.State=page.locator('(//input[@id="otherstate"])')
          this.Country=page.locator('(//input[@id="othercountry"])')
          this.save=page.getByRole('button',{name:'Save'}).first()

          //search button
          this.searchTextBox = page.locator('//input[@name="search_text"]');
          this.filters=page.locator('//select[@id="bas_searchfield"]')
          this.searchButton = page.locator('//input[@name="submit"]');
    }


   async create_contact(){
    await this.contact.click()
    await this.createcontact.click()

   //lname
    let contact_lname=contacts_utils()
    let contactlname=contact_det.lname+contact_lname

    await this.firstname.fill(contact_det.fname)
    await this.lastname.fill(contactlname)
    

    //popup
    let popup=await window(this.page,
      //await this.page.locator('//img[@alt="Select"]').click()
      //await this.page.getByAltText('Select').click()
      await this.page.locator('(//img[@src="themes/softed/images/select.gif"])[1]').click()
    )
    await popup.locator('//a[text()="wipro1"]').click()
  // used xpath
  //  await popup.locator('#search_txt').fill(contact_det.Select_orgname);
  //  await popup.locator('//input[@name="search"]').click();

 
    // await popup.this.popupsearchtxt.fill(contact_det.Select_orgname)
    // await popup.this.popupsearchbtn.click()
      
    
   //  await this.search.click()
   //  await this.select_orgname.fill(contact_det.Select_orgname)

    await this.Phone.fill(contact_det.phone)

    // dropdown (leadsource)
    //await this.Leadsource.selectOption({value:"Employee"})
    await dropdown(this.Leadsource,'Employee')
   //  await contact_dpdwn(this.Leadsource, {
   //  label: 'Employee'
   //  })

    await this.assignedto.click()
    await this.portaluser.isChecked()
    await this.City.fill(contact_det.address_city)
    await this.State.fill(contact_det.address_state)
    await this.Country.fill(contact_det.address_country)
    await this.save.click()
    //return contactlname
   }

     //search field
   async searchContact(){
   await this.contact.click();
   await this.searchTextBox(contact_det.lname)
   //await this.filters.selectOption({value:"lastname"})
   await search_dpdwn(this.searchTextBox,'lastname')
   //await search_dpdwn(this.page.locator('//select[@id="bas_searchfield"]','lastname'))  //! error
    await this.searchButton.click();
}
} 







