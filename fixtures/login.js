import {test as base} from '@playwright/test'
import { login } from '../pages/login.js'

export let test = base.extend({
    loginpage:async ({page},use)=>{
        let sign = new login(page)
        await sign.signin()
        await sign.creadentials()
        await use(page)
    }
})