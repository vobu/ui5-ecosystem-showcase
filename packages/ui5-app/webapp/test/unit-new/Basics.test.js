const { join } = require("path")
const nodeUI5 = require("node-ui5/factory")
const ui5require = require("ui5-simple-require").ui5require

let sap

// @ts-ignore
beforeAll(async () => {
    sap = (
        await nodeUI5({
            bootstrapLocation: "resources/sap-ui-core.js",
            resourceroots: {
                "": "/Users/vbuzek/Downloads/openui5-runtime-1.78.1/resources",
                test: join(__dirname, "../../lib")
            }
        })
    ).sap
})

test("plain ui5 module inits correctly", () => {
    const PlainModule = ui5require("../../lib/baseModule.js")
    expect(PlainModule.someFunc()).toStrictEqual("someFunc")
})
test.only("ui5 module w/ dep allows dep usage", () => {
    expect(sap.ui.requireSync("test/baseModuleWithDep").someFunc()).toStrictEqual("someFuncWithDep")
    const module = sap.ui.require("test/baseModuleWithDep")
    expect(module.someFunc()).toStrictEqual("someFuncWithDep")
    // TODO: mock console
    // expect(window.console.log).toHaveBeenCalledWith(expect.stringMatching("someFuncWithDep"))
})
