sap.ui.define(["sap/base/Log"], (Log) => {
    const obj = {
        someFunc() {
            Log.info("bla")
            return "someFuncWithDep"
        }
    }
    return obj
})
