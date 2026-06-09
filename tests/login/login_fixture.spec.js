//! using fixtures:

import {test} from '../../fixtures/login.js'

test('login page',async ({logginpage}) => {
    await logginpage.signin()
    await logginpage.creadentials()
    
})