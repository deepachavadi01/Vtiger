import tic_det from '../test_data/raiseticket.json'
import { dropdown } from '../utils/dpdwn.js'

export class Ticket{
    constructor(page){
        this.page=page
       // this.title=page.getByTitle('Create Ticket...')
        this.title=page.locator('//a[@href="index.php?module=HelpDesk&action=index"]')

        //img
        this.image=page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]')

        //title
        this.tickettitle=page.locator('//textarea[@name="ticket_title"]')


        this.assignedTo=page.locator('(//input[@type="radio"])[1]')
        this.priority=page.locator('//select[@name="ticketpriorities"]')
        this.severity=page.locator('//select[@name="ticketseverities"]')
        this.category=page.locator('//select[@name="ticketcategories"]')
        this.status=page.locator('//select[@name="ticketstatus"]')
        
        this.description=page.locator('//textarea[@class="detailedViewTextBox"]')

        this.save=page.locator('(//input[@type="submit"])[1]')

    }


    async create_newticket(){

        await this.title.click()
        await this.image.click()
        await this.tickettitle.fill(tic_det.Title)
        await this.assignedTo.click()

        //dropdown
        await dropdown(this.priority,'High')
        await dropdown(this.severity,'Critical')
        await dropdown(this.category,'Big Problem')
        await dropdown(this.status,'Open')


        await this.description.fill(tic_det.Description)

        await this.save.click()

    }}