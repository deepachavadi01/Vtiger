import {test as base} from './login.js'
import {contacts} from '../pages/contact.js'
import { org } from '../pages/organisation.js'
import { contact } from '../pages/contact.js'
import { Product } from '../pages/product.js'
import { Document} from '../pages/document.js'
import { Lead } from '../pages/lead.js'
import { Ticket } from '../pages/tickets.js'


// do not use any methods in the fixtures
export let test =base.extend({
    organisation: async({loginpage},use)=>{
        let org1=new org(loginpage) 
        await use(org1)                                          //returning org1 here,all information from the org class
    },

    contact: async({loginpage},use)=>{
        let fContact=new contact(loginpage)
        await use(fContact)
    },

    product: async({loginpage},use)=>{
        let fproduct=new Product(loginpage)
        await use(fproduct)
    },

    lead:async ({loginpage},use) => {
        let flead=new Lead(loginpage)
        await use(flead)
        
    },
     
    document:async ({loginpage},use) => {
        let fdocument=new Document(loginpage)
        await use(fdocument)    
    },

    ticket:async ({loginpage},use) => {
        let fticket=new Ticket(loginpage)
        await use(fticket)   
    }


})

