describe("navigation", function () {
    it("should see the initial page of the app", function () {
        const title = element(
            by.control({
                viewName: "test.Sample.view.Main",
                controlType: "sap.m.Title",
                properties: {
                    text: "#UI5 demo",
                },
            })
        );
        // don't know why this isn't title.asControl() ... :(
        expect(title.getText()).toBe("#UI5 demo");
    });

    it("should navigate to the list page and back", function() {
        element(
            by.control({
                viewName: "test.Sample.view.Main",
                id: "NavButton"
            })
        ).click();

        const list = element(
            by.control({
                viewName: "test.Sample.view.Other",
                id: "PeopleList"
            })
        )

        expect(list.asControl().getProperty("visible")).toBe(true)
    })
});
