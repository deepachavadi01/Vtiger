import logout_details from '../test_data/logout.json'
//import { login_details } from '../pages/login'

export class logout{
    constructor(page){
        this.page=page;
        this.img=page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.signout=page.locator('//a[text()="Sign Out"]')
    }
    async signout() {
      await this.img.hover()
      await this.signout.click()
    }
}
