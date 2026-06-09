
//! using fixtures:


import {test} from '../../fixtures/crmfixtures.js'
import prod_details from '../../test_data/product.json'

test('Product page',async({product})=>{
    await product.create_prod(prod_details.prod_name)                                                                                     //we don't get suggestions for method (create_prod),have to copy and p[aste it from respective js file]
    
})