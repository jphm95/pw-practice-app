import {Page} from '@playwright/test';

export class NavigationPage {

    readonly page: Page
    

    constructor(page: Page) {
        this.page = page;
    }

    async formLayoutsPage(){
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
    }

    async datePickerPage(){
        await this.selectGroupMenuItem('Forms')
        await this.page.waitForTimeout(1000)
        await this.page.getByText('Datepicker').click()
    }

    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()  
    }

    async toastrPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()

    }
    async tooltipPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == "false"){
            await groupMenuItem.click()
        }
    }


}
// Classic Approach : 
// readonly page: Page
//     readonly formLayoutsMenuItem: Locator;
//     readonly datePickerMenuItem: Locator;
//     readonly smartTableMenuItem: Locator;
//     readonly toasterMenuItem: Locator;
//     readonly tooltipMenuItem: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         this.formLayoutsMenuItem = page.getByText('Form Layouts');
//         this.datePickerMenuItem = page.getByText('Datepicker');
//         this.smartTableMenuItem = page.getByText('Smart Table');
//         this.toasterMenuItem = page.getByText('Toastr');
//         this.tooltipMenuItem = page.getByText('Tooltip');
//     }

//     async formLayoutsPage(){
//         await this.selectGroupMenuItem('Forms')
//         await this.formLayoutsMenuItem.click()
//     }

//     async datePickerPage(){
//         await this.selectGroupMenuItem('Forms')
//         await this.datePickerMenuItem.click()
//     }

//     async smartTablePage(){
//         await this.selectGroupMenuItem('Tables & Data')
//         await this.smartTableMenuItem.click()  
//     }

//     async toastrPage(){
//         await this.selectGroupMenuItem('Modal & Overlays')
//         await this.toasterMenuItem.click()

//     }
//     async tooltipPage(){
//         await this.selectGroupMenuItem('Modal & Overlays')
//         await this.tooltipMenuItem.click()
//     }

//     private async selectGroupMenuItem(groupItemTitle: string){
//         const groupMenuItem = this.page.getByTitle(groupItemTitle)
//         const expandedState = await groupMenuItem.getAttribute('aria-expanded')
//         if(expandedState == "false"){
//             await groupMenuItem.click()
//         }
//     }
