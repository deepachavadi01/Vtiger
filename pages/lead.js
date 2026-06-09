import lead_det from '../test_data/lead.json'
import { dropdown } from '../utils/dpdwn.js'
import { leads } from '../utils/lead_utls.js'

export class Lead{
    constructor(page){
        this.page=page
        this.lead=page.locator('(//a[text()="Leads"])[1]')
        this.create_leads=page.getByTitle('Create Lead...')
        this.firstname=page.locator('//input[@name="firstname"]')
        this.lastname=page.locator('//input[@name="lastname"]')
        this.company=page.locator('//input[@name="company"]')
        this.phone=page.locator('//input[@id="phone"]')
        this.leadsource=page.locator('//select[@name="leadsource"]')
        this.industry=page.locator('//select[@name="industry"]')
        this.leadstatus=page.locator('//select[@name="leadstatus"]')
        this.rating=page.locator('//select[@name="rating"]')
        this.assignedto=page.locator('(//input[@type="radio"])[1]')
        this.city=page.locator('//input[@id="city"]')
        this.state=page.locator('//input[@id="state"]')
        this.country=page.locator('//input[@id="country"]')
        this.save=page.locator('(//input[@type="submit"])[1]')
    }

    async create_lead(){
        await this.lead.click()
        await this.create_leads.click()
        await this.firstname.fill(lead_det.fname)
        await this.lastname.fill(lead_det.lname)
        await this.company.fill(lead_det.company)
       // await this.phone.fill(lead_det.phone)

        //lead source dropdown
        //await this.leadsource.selectOption({value:"Employee"})
        await dropdown(this.leadsource,'Employee')
       
        // rating dropdown
        //await this.rating.selectOption({value:"Active"})
        await dropdown(this.rating,'Active')
        
        await this.assignedto.click()
        await this.city.fill(lead_det.city)
        await this.state.fill(lead_det.State)
        await this.country.fill(lead_det.Country)
        await this.save.click()
    }

    async lead_utls(){
        let lead_name=leads()
        let leadname=lead_det.lname+lead_name
    }

}
