//! using fixtures:

import {test} from '../../fixtures/login.js'

test('login page',async ({loginpage}) => {
    await loginpage.signin()
    await loginpage.creadentials()
    
})