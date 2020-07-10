
var lists = document.querySelectorAll('[data-tagger]');

function getDropDownList(name, id, optionList) {
    var combo = $("<select></select>").attr("id", id).attr("name", name);
    $.each(optionList, function (i, el) {
         var jsonEl = JSON.parse(el);
         combo.append($("<option></option>").attr("value", jsonEl.value).text(jsonEl.label));
    });
    return combo;
}

$.each(lists,function(index,list){
    var id = "ls"+list.attributes["id"].value;
    var name = "ls"+list.attributes["name"].value;
    var options = list.attributes["data-tagger"].value.slice(1,-1).match(/{(.*?)}/g);
    var select = getDropDownList(name,id,options); 
    var listid = list.id;
    var selectEl = $("#"+listid).before(select);

    select.select2();
    select.on('select2:select', function (e) {
        var dataID = e.params.data.id;
        var selectID = list.attributes["id"].value;
        console.log("selectID",selectID);
        $("#"+selectID).val(dataID);
    });

});    
$(".nesty-input").slice(1).hide();
  