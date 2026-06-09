
//! using fixtures:
import {test} from '../../fixtures/crmfixtures.js'
import organi from '../../test_data/organisation.json'

test('organise ',async({organisation})=>{
    
    await organisation.create_org(organi.organisation_name)
    
})