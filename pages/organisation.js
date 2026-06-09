import org_details from '../test_data/organisation.json'
import { dropdown } from '../utils/dpdwn.js'
import {orgs} from '../utils/org_utils.js'
import { org_popup } from '../utils/org_windowpopup.js'
import { window } from '../utils/windowpopup.js'

export class org{
    constructor(page){
        this.page=page
        this.organisation=page.locator('//a[@href="index.php?module=Accounts&action=index"]')
        //plus img
        this.create_orgnisation=page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]')

        this.org_name=page.locator('//input[@name="accountname"]')
       // this.org_name=page.locator('//input[@name="accountname"]')
        this.website=page.locator('//input[@name="website"]')

        // + sign popup(window handling)
        this.img_popup=page.locator('//img[@src="themes/softed/images/select.gif"]')
        //this.popup_searchtextbox=page.locator('//input[@id="search_txt"]')
        this.popup_orgname=page.locator('//a[text()="wipro16"]')
      

        this.phone=page.locator('//input[@id="phone"]')
        this.email=page.locator('//input[@id="email2"]')
        this.industry=page.locator('//select[@name="industry"]')
        this.type=page.locator('//select[@name="accounttype"]')
        this.assignedto=page.locator('(//input[@type="radio"])[1]')

        // billing address
        this.city=page.locator('//input[@id="bill_city"]')
        this.state=page.locator('//input[@id="bill_state"]')
        this.country=page.locator('//input[@id="bill_country"]')

        // copy billing address
        this.copy_address=page.locator('(//input[@name="cpy"])[2]')
        // this.header=page.locator('//span[@class="dvHeadertext"]')
        //this.save=page.getByRole('button',{name:'Save'}).first()
        this.save=page.locator('(//input[@type="button"])[1]')
    }


async create_org(){
   await this.organisation.click()
   await this.create_orgnisation.click()
   await this.org_name.fill(org_details.organisation_name)
    await this.website.fill(org_details.website)

    // organisation name   ,utils
    // let orga_name=orgs()
    // let orgname=org_details.organisation_name+orga_name
    // await this.org_name.fill(orgname)

    // (+ sign) window  popup
    let popup=await window(this.page,
        await this.page.locator('//img[@src="themes/softed/images/select.gif"]').click()  
    )
   //await popup.popup_orgname.click()
   await popup.locator('//a[text()="wipro7"]').click()

   
  
   await this.phone.fill(org_details.phone)
   await this.email.fill(org_details.email)

   //industry and type dropdown
   //await this.industry.selectOption({value:'Engineering'})
   await dropdown(this.industry,'Engineering')
   await dropdown(this.type,'Analyst') 
   //await this.type.selectOption({value:'Analyst'})


   await this.assignedto.click()
   await this.city.fill(org_details.city)
   await this.state.fill(org_details.state)
   await this.country.fill(org_details.country)
   await this.save.click()
}

}