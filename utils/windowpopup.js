//export { contact } from "../pages/contact.js"

export async function window(page,action){
    let[popup]=await Promise.all([
        page.waitForEvent('popup'),
        action
    ])
    await popup.waitForLoadState()
    return popup
}

