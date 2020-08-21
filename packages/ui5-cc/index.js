// <Formatted text="this is [b]bold[/b]">
import Control from "sap/ui/core/Control";

// @namespace("jss.Formatted")
class Formatted extends Control {

    static metadata = {
        properties: {
            text: { type: "string", defaultValue: "", bindable: "bindable" }
        }
    };

    init() {
        this.text = ""
    }

    bold() {
        this.text.replace(/\[b\](.*)\[\/b\]/, "<strong>$1</strong>")
        return this
    }
    
    italics() {
        this.text.replace(/\[i\](.*)\[\/i\]/, "<em>$1</em>")
        return this
    }
    
    lineBreak() {
        this.text.replace(/\[br\]/, "<br>")
        return this
    }

    transformText() {
        this.bold().italics().lineBreak()
        return this.text
    }

    static renderer = {
        apiVersion: 2,
        render(oRM, oControl) {
            oRM.openStart("p", oControl)
            oRM.openEnd()
            oRM.unsafeHtml(this.transformText())
            oRM.end("p")
        }
    }

}

export default Formatted;
