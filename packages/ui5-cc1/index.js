// <Formatted text="this is [b]bold[/b]">
var define = function() {}
define(["sap/ui/core/Element"], (Element) => {
    const _ = {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "", bindable: "bindable" }
            }
        },
        init() {
            this.text = ""
        },
        bold() {
            this.text.replace(/\[b\](.*)\[\/b\]/, "<strong>$1</strong>")
            return this
        },
        italics() {
            this.text.replace(/\[i\](.*)\[\/i\]/, "<em>$1</em>")
            return this
        },
        lineBreak() {
            this.text.replace(/\[br\]/, "<br>")
            return this
        },
        transformText() {
            this.bold().italics().lineBreak()
            return this.text
        },
        renderer: {
            apiVersion: 2,
            render(oRM, oControl) {
                oRM.openStart("p", oControl)
                oRM.openEnd()
                oRM.unsafeHtml(this.transformText())
                oRM.end("p")
            }
        }
    }
    return Element.extend("jss.Other", _)
})
