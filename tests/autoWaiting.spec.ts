import { test, expect } from '@playwright/test'
import { timeout } from 'rxjs-compat/operator/timeout'

test.beforeEach(async ({ page }, testInfo ) => {
    await page.goto('http://www.uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
    testInfo.setTimeout(testInfo.timeout + 20000)
})

test('Auto waiting', async ({ page }) => {
    const successButton = page.locator('.bg-success')

    //await successButton.click()

    //const text = await successButton.textContent()
    //await successButton.waitFor({state: "attached"})
    //const text = await successButton.allTextContents()


    //expect(text).toContain('Data loaded with AJAX get request.')

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', { timeout: 20000 })

})
//For cmmds that don't support autowaiting (see Documentation) this methods can help:
test('Alternativa waits', async ({ page }) => {
    const successButton = page.locator('.bg-success')

    //Wait for element
    //await page.waitForSelector('.bg-success')

    //Wait for particular response
    //await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')

    //Wait for network calls to be completed ('NOT RECOMMENDED')
    await page.waitForLoadState('networkidle')


    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('timeouts', async ({ page }) => {
    //test.setTimeout(10000)
    test.slow()
    const successButton = page.locator('.bg-success')
    await successButton.click()

})