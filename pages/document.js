import doc_det from '../test_data/document.json'
import { docs } from '../utils/doc.utils.js'

export class Document{
    constructor(page){
        this.page=page
        this.document=page.locator('(//a[text()="Documents"])[1]')
        this.create_docs=page.getByTitle('Create Document...')
        this.title=page.locator('//input[@name="notes_title"]')
        this.assignedto=page.locator('(//input[@type="radio"])[1]')
        this.file=page.locator('//input[@id="filename_I__"]')
        //this.save=page.getByRole('button',{name:'Save'}).first()  
        this.save=page.locator('(//input[@type="submit"])[1]')
    }

    async create_doc(){
        await this.document.click()
        await this.create_docs.click()
        await this.title.fill(doc_det.title)
        await this.assignedto.click()
       
        await this.file.setInputFiles(doc_det.inputfile)
        await this.save.click()
        
    }

    async doc_utls(){
        let doc_title=docs()
        let doctitle=doc_title+doc_det.title
    }
    
}