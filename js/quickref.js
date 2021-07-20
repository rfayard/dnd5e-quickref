function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";
    var bType = data.type || type;

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color,bType);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

function fill_section(data, parentname, type) {
    empty_section(parentname);
    var parent = document.getElementById(parentname);

    
    // data.sort(dynamicSort("title"));

    // console.log("console.log de data", data);

    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function empty_section(parentname) {
    var parent = document.getElementById(parentname);
        parent.innerHTML = "";
}

function add_base_data(parent, data) {
        var items = [];

        Object.entries(data).forEach(entry => {
            const [key, value] = entry;
            let item = document.createElement("div");
            switch(key) {
                case "title":
                    item.className = "section-title";
                    item.innerHTML = value + ' ' + "<span class='float-right'>" + data.max + "</span>";
                    items.push(item);
                    break;
                case "subtitle":
                    item.className = "section-content";
                    item.innerHTML = "<div class='section-row section-subtitle text fontsize'>" + value + "</div> <div class='section-row' id=" + data.subtitleId + "></div>";
                    items.push(item);
                    break;
            }
          });
        items.forEach(child => {
            parent.appendChild(child);
        })
}

function fill_section_base(data, parentname) {
    empty_section(parentname);
    var parent = document.getElementById(parentname);


    data.forEach(function (item) {
        add_base_data(parent, item);
    })
}

function dynamicSort(property) {
    let sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function(a,b) {
        if(sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

function init(lang) {
    if (typeof lang === "string" || lang instanceof String) {
        console.log("all good");
    } else {
        lang = "EN";
    }
    console.log("passage init", lang)

    console.log(window[lang + "_data_movement_title"], "section-movement");

    fill_section_base(window[lang + "_data_movement_title"], "section-movement");
    fill_section_base(window[lang + "_data_action_title"], "section-action");
    fill_section_base(window[lang + "_data_bonus_action_title"], "section-bonus-action");
    fill_section_base(window[lang + "_data_reaction_title"], "section-reaction");
    fill_section_base(window[lang + "_data_condition_title"], "section-condition");
    fill_section_base(window[lang + "_data_environment_title"], "section-environment");

    console.log("what is data= ", window[lang + "_data_movement"], "héhé = ", lang + "_data_movement" )
    fill_section(window[lang + "_data_movement"], "basic-movement", "Move");
    fill_section(window[lang + "_data_action"], "basic-actions", "Action");
    fill_section(window[lang + "_data_bonusaction"], "basic-bonus-actions", "Bonus action");
    fill_section(window[lang + "_data_reaction"], "basic-reactions", "Reaction");
    fill_section(window[lang + "_data_condition"], "basic-conditions", "Condition");
    fill_section(window[lang + "_data_environment_obscurance"], "environment-obscurance", "Environment");
    fill_section(window[lang + "_data_environment_light"], "environment-light", "Environment");
    fill_section(window[lang + "_data_environment_vision"], "environment-vision", "Environment");
    fill_section(window[lang + "_data_environment_cover"], "environment-cover", "Environment");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$("select").on("change", function() {
    selLang(this);
}).change();

// $(window).load(init);
