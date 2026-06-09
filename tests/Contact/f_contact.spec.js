//! using fixture:

import {test} from '../../fixtures/crmfixtures.js'
import contacts from '../../test_data/contact.json'

test('contact page',async ({contact}) => {
    await contact.create_contact(contacts.lname)
    
})