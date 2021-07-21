// import { load } from "quickref.js";

let srcBase = ["data_action.js", "data_bonusaction.js", "data_condition.js", "data_environment.js", "data_movement.js", "data_reaction.js", "data_sections.js"]

function selLang(sel) {
    let sourceBase = "js/data/" + sel.value + "/"
    console.log("sel =", sel);
    console.log("selected =", sel.value)
    switch (sel.value) {
        case "EN":
            console.log("Case EN")
            break;
        case "FR":
            console.log("Case FR")
            if ($("#" + sel.value + "_firstDataScript").length) {
                console.log(sel.value + " already loaded");
            } else {
                srcBase.forEach((data, index) => {
                    console.log("passage case ", sel.value, "|", "data =", data, "selected =", sel.value)
                    let s = document.createElement("script");
                    if (index === 0) {
                        s.id = sel.value + "_firstDataScript";
                    }
                    s.type = "text/javascript";
                    s.src = sourceBase + sel.value + "_" + data;
                    s.innerHTML = null;
                    document.getElementById("scripts").innerHTML = "";
                    $("head").append(s);
                });
            }
            break;
    }
    init(sel.value);
}
