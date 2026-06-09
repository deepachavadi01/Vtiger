import login_det from '../test_data/login.json'
import { random } from '../utils/org_utils.js';

export class login{
    constructor(page){
        this.page = page;//launch the url
        //this.username = page.getByLabel('username');//locating the username field
        this.username=page.locator('//input[@type="text"]')
       // this.password = page.locator('//input[@type="password"]')//locating the password field
        this.password=page.locator('//input[@type="password"]')
        this.button=page.locator('#submitButton')
        //this.button = page.getByRole('button')//this is locating to the button
    }
    
    
    async signin(){
        await this.page.goto(login_det.url)
    }
 
    async creadentials(){
        await this.username.fill(login_det.username)
        await this.password.fill(login_det.password)
        await this.button.click()
    }

    
} 