const moduleLoader = require("ui5-simple-require")
const ui5require = require("ui5-simple-require").ui5require

test("plain ui5 module inits correctly", () => {
    const PlainModule = ui5require("../../lib/baseModule.js")
    expect(PlainModule.someFunc()).toStrictEqual("someFunc")
})

// providing sap.ui.core works in principle via
// const coreLib = moduleLoader.importLib("./path/to/sap.ui.core/files", "sap/ui/core", "sap.ui.core")
// but fails at the depencendies of the lib itself

// test("base controller has working lifecycle", () => {
//     const BaseController = ui5require("../../controller/BaseController.js")
// })
