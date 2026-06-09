import {test} from '../../fixtures/crmfixtures.js'
import lead_det from '../../test_data/lead.json'



test('Lead page',async ({lead}) => {                                               //lead is name of the fixture  
        await lead.create_lead(lead_det.lname)
    
})
