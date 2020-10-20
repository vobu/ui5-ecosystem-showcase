describe("basics", ()=> {
    it("should click the 'boo'-button", () => {
        const _button = {
            selector: {
                id: "booButton",
                controlType: "sap.m.Button",
                viewName: "test.Sample.view.Main"
            }
        }
        browser.asControl(_button).firePress()
    })
})