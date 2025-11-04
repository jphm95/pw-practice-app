import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test('Navigate to form page', async ({page}) =>  {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().onDatePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('Parametrize Methods', async({page}) =>{
    const pm = new PageManager(page)
    
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption("test@tes.com", "Pass123", "Option 2")
    await pm.onFormLayoutsPage().submitInLineFormWithNameEmailAndCheckbox("JP", "jp@test.com", false)
    await pm.navigateTo().onDatePickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(20)
    await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(6, 15)
})
