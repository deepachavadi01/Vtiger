import {test} from '../../fixtures/crmfixtures.js'
import tic_det from '../../test_data/raiseticket.json'


test('ticket page',async ({ticket}) => {
    await ticket.create_newticket(tic_det.Title)
    await ticket.create_newticket(tic_det.Status)
})

