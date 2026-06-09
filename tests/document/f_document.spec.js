import { test } from '../../fixtures/crmfixtures.js'
import doc_det from '../../test_data/document.json'

test('document page',async ({document}) => {
    await document.create_doc(doc_det.title)
    
})