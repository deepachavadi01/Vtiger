import {expect,test} from '@playwright/test'
import { login } from '../../pages/login.js'
import { logout } from '../../pages/logout.js'

test('login_logout',async ({page}) => {
    let obj=new login(page)
    let obj1=new logout(page)

    await obj.signin()
    await obj.creadentials()

    await obj1.signout()
    //await expect(page).toHaveURL('http://localhost:8888/index.php?action=index&module=Home')

    
})