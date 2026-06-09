

export async function org_popup(page,action){
    let[popup]=await Promise.all([
        page.waitForEvent('popup'),
        action
    ])
    await popup.waitForLoadState()
    return popup
}