const ui5require = require("ui5-simple-require").ui5require

test("plain module inits correctly", () => {
    const PlainModule = ui5require("../../lib/baseModule.js")
    expect(PlainModule.someFunc()).toStrictEqual("someFunc")
})