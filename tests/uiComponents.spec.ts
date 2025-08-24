import {test, expect} from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test.describe('Form Layouts page', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('Input Fields', async ({ page }) => {
        const usingTheGridEmailInput = page.locator('nb-card', { hasText: "Using the Grid" })
            .getByRole('textbox', { name: "Email" })

        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear()
        await usingTheGridEmailInput.pressSequentially('test2@newtest.com', {delay: 500})

        //Generic Assertion:
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test2@newtest.com')

        //Locator Assertion:
        await expect(usingTheGridEmailInput).toHaveValue('test2@newtest.com')
    })


})