describe("basics", ()=> {
    it("should navigate successfully to list page", () => {
        browser.screenshot("before-nav")

        const _button = {
            selector: {
                id: "navButton",
                viewName: "test.Sample.view.Main"
            }
        }
        browser.asControl(_button).firePress()

        browser.screenshot("after-nav")

        const _list = {
            selector: {
                id: "PeopleList",
                viewName: "test.Sample.view.Other"
            }
        }
        expect(browser.asControl(_list).getVisible()).toBeTruthy()
    })
    it("should check that list is bound", () => {
        const _list = {
            selector: {
                id: "PeopleList",
                viewName: "test.Sample.view.Other"
            }
        }
        const listItems = browser.asControl(_list).getItems()

        expect(listItems.length).toBeGreaterThanOrEqual(1)
    })
})