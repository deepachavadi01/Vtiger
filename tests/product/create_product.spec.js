import {expect,test}  from '@playwright/test'
import { login } from '../../pages/login.js'
import { logout } from '../../pages/logout.js'
import prod, { Product } from '../../pages/product.js'
import { products } from '../../utils/product.utils.js'
import pro_det from '../../test_data/product.json'


// test.only('create_product',async ({page}) => {

//     await page.goto('http://localhost:8888/index.php?action=Login&module=Users')
//     await page.locator('//input[@type="text"]').fill('admin')
//     await page.locator('//input[@type="password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     //* product creation 

//     await page.locator('(//a[text()="Products"])[1]').click()
//     await page.getByTitle('Create Product...').click()

//     let product='laptop'
//     await page.locator('//input[@name="productname"]').fill('Apple laptop1')
//     let dis_prod=await page.locator('//input[@name="productname"]').inputValue()
//     console.log(dis_prod)

//     //await page.locator('//td[text()="May, 2026"]/ancestor::div[@class="calendar"]//following-sibling::td[@class="day selected today"]')
//     //await page.locator('//td[text()="May, 2026"]').click();
//    // await page.locator('(//input[@type="radio"])[2]').click()
//     await page.locator('(//input[@type="checkbox"])[1]').click()

//     //* pricing information
//     await page.locator('//input[@id="unit_price"]').fill('200000')
//     await page.locator('//input[@id="qty_per_unit"]').fill('1')
//     await page.locator('//input[@id="commissionrate"]').fill('10')
    
//     await page.locator('//input[@id="tax1_check"]').check()
//     await page.locator('//input[@id="tax3_check"]').check()

//     //* stock information
//     await page.locator('//select[@name="usageunit"]').selectOption({value:"Quantity"})
//     await page.locator('//input[@id="qtyinstock"]').fill('2')
//     await page.locator('//input[@id="qty_per_unit"]').fill('1')
//     //await page.locator('radio',{name:'User'}).click()
//    //await page.locator('(//input[@type="radio"])[2]').click()


//    //* product image info
//     await page.locator('//input[@id="my_file_element"]').setInputFiles('C:/Users/Jagadish/Desktop/apple laptop.jpg')
   
   
//     await page.locator('(//input[@type="submit"])[1]').click()
    
//     // //! validation:
//     // //* using i else stmt
//     // let prod_name=await page.locator('//span[@id="dtlview_Product Name"]').textContent()
//     // if(prod_name===product){
//     //     console.log('product created successfully')   
//     // }else{
//     //     console.log('product creation is failed')
//     // }

// //     //* Assertions:
//     //product name
//      await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText('Apple laptop1')


//      // unit price
//     await expect(page.locator('//span[@id="dtlview_Unit Price"]')).toContainText('200,000.00')

//      //stock
//      //await expect(page.locator('//input[@id="qtyinstock"]')).toContainText('2')

//       //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()

//  })


// //.................................................................................................................

// //! DDT:
 
// import login_details from '../../test_data/login.json'
// import prod_details from '../../test_data/product.json'

// test('create_prod1',async ({page}) => {

//     await page.goto(login_details.url)
//     await page.locator('//input[@type="text"]').fill(login_details.username)
//     await page.locator('//input[@type="password"]').fill(login_details.password)
//     await page.locator('#submitButton').click()

//     //* product creation 

//     await page.locator('(//a[text()="Products"])[1]').click()
//     await page.getByTitle('Create Product...').click()

//     let product='laptop'
//     await page.locator('//input[@name="productname"]').fill(prod_details.prod_name)
//     let dis_prod=await page.locator('//input[@name="productname"]').inputValue()
//     console.log(dis_prod)

//     //await page.locator('//td[text()="May, 2026"]/ancestor::div[@class="calendar"]//following-sibling::td[@class="day selected today"]')
//     //await page.locator('//td[text()="May, 2026"]').click();
//     await page.locator('(//input[@type="radio"])[2]').click()

//     //* pricing information
//     await page.locator('//input[@id="unit_price"]').fill(prod_details.price)
//     //await page.locator('//input[@id="qty_per_unit"]').fill(prod_details.unit)
//     await page.locator('//input[@id="commissionrate"]').fill(prod_details.commssionRate)
    
//     await page.locator('//input[@id="tax1_check"]').check()
//     await page.locator('//input[@id="tax3_check"]').check()

//     //* stock information
//     await page.locator('//select[@name="usageunit"]').selectOption({value:"Quantity"})
//     await page.locator('//input[@id="qtyinstock"]').fill(prod_details.stock)
//     await page.locator('//input[@id="qty_per_unit"]').fill(prod_details.qty)
//     //await page.locator('radio',{name:'User'}).click()
//    //await page.locator('(//input[@type="radio"])[2]').click()


//    //* product image info
//     await page.locator('//input[@id="my_file_element"]').setInputFiles(prod_details.img_info)
   
//     await page.locator('(//input[@type="submit"])[1]').click()


//      //* logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()


// })
//..................................................................................................

test('pro',async ({page}) => {
    let obj=new login(page)
    await obj.signin()
    await obj.creadentials()

    let obj1=new Product(page)
    await obj1.create_prod()
  

    //product name validation
   let expectedproname=pro_det.prod_name
   await expect(page.locator('//span[@class="lvtHeaderText"]')).toContainText(pro_det.prod_name)

         
    let obj2=new logout(page)
    await obj2.signout
    
})





 