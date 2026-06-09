import prod_details from '../test_data/product.json'
import { products } from '../utils/product.utils'

export class Product{
constructor(page){
  this.page=page
  this.product=page.locator('(//a[text()="Products"])[1]')
  //this.create_prods=page.getByTitle('Create Product...')
  this.create_prods=page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]')
  this.prod_name=page.locator('//input[@name="productname"]')
  this.prod_category=page.locator('//select[@name="productcategory"]')
  // pricing info
  this.price=page.locator('//input[@id="unit_price"]')
  this.commissionrate=page.locator('//input[@id="commissionrate"]')
   this.Vat=page.locator('//input[@id="tax1_check"]')
   this.service=page.locator('//input[@id="tax3_check"]')
  // stock info
  this.usageunit=page.locator('//select[@name="usageunit"]')
  this.stock=page.locator('//input[@id="qtyinstock"]')
  this.qty=page.locator('//input[@id="qty_per_unit"]')
  // img upload
  this.imgupload=page.locator('//input[@id="my_file_element"]')
  this.save=page.locator('(//input[@type="submit"])[1]')
}

async create_prod(){
    await this.product.click()
    await this.create_prods.click()

    // many products will be added on each execution(run) so shouldl use 
    let pro=products()                                        // from utils
    let Products=prod_details.prod_name+pro
    await this.prod_name.fill(Products)

    //await this.prod_name.fill(prod_details.prod_name)
    await this.prod_category.selectOption({value:"Software"})
    await this.price.fill(prod_details.price)
    await this.commissionrate.fill(prod_details.commssionRate)
    await this.Vat.check()
    await this.service.check()
    await this.usageunit.selectOption({value:"Quantity"})
    await this.stock.fill(prod_details.Stock)
    await this.qty.fill(prod_details.Qty)
    await this.imgupload.setInputFiles('C:/Users/Jagadish/Desktop/apple laptop.jpg')
    await this.save.click()
}

}
  
