import {test, expect} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test('Navigate to form page', async ({page}) =>  {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('Parametrize Methods', async({page}) =>{
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)
    const onDatePickerDate = new DatepickerPage(page)

    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption("test@tes.com", "Pass123", "Option 2")
    await onFormLayoutsPage.submitInLineFormWithNameEmailAndCheckbox("JP", "jp@test.com", false)
    await navigateTo.datePickerPage()
    await onDatePickerDate.selectCommonDatePickerDateFromToday(20)
    await onDatePickerDate.selectDatePickerWithRangeFromToday(6, 15)
})
