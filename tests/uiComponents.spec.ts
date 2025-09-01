import { test, expect } from '@playwright/test'

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
        await usingTheGridEmailInput.pressSequentially('test2@newtest.com', { delay: 500 })

        //Generic Assertion:
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test2@newtest.com')

        //Locator Assertion:
        await expect(usingTheGridEmailInput).toHaveValue('test2@newtest.com')
    })

    test('Radio Buttons', async ({ page }) => {
        const usingTheGridEmailInput = page.locator('nb-card', { hasText: "Using the Grid" })


        //await usingTheGridEmailInput.getByLabel('Option 1').check({force: true})
        await usingTheGridEmailInput.getByRole('radio', { name: "Option 1" }).check({ force: true })
        const radioSatuts = await usingTheGridEmailInput.getByRole('radio', { name: "Option 1" }).isChecked()
        expect(radioSatuts).toBeTruthy()
        await expect(usingTheGridEmailInput.getByLabel('Option 1')).toBeChecked()

        await usingTheGridEmailInput.getByRole('radio', { name: "Option 2" }).check({ force: true })
        expect(await usingTheGridEmailInput.getByRole('radio', { name: "Option 1" }).isChecked()).toBeFalsy()
        expect(await usingTheGridEmailInput.getByRole('radio', { name: "Option 2" }).isChecked()).toBeTruthy()



    })
})

test('checkboxes', async ({ page }) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    await page.getByRole('checkbox', {name: "Hide on click"}).check({force: true})
    await page.getByRole('checkbox', {name: "Prevent arising of duplicate toast"}).uncheck({force: true})

    const allBoxes = page.getByRole('checkbox')
    for (const box of await allBoxes.all()){
        await box.uncheck({force: true})
        expect(await box.isChecked()).toBeFalsy()

    }
})