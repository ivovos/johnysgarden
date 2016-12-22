$(document).ready(function() {

	// open the order list
    $("#orderListBtn").click(function() {
        $('.ui.basic.modal')
            .modal('show');
        $("#closeModalBtn").click(function() {
        $('.ui.basic.modal')
        	.modal('hide');
        });
    });

    // create a new array with all the unique types
    var types = new Array();

    var variable = "This is it...";
    var variableNoWhiteSpace = variable.replace(/\s+/g, '');
    console.log(variableNoWhiteSpace);

    // Parses the JSON into a  list organised by type of product
    $.getJSON('js/orders.json', function(data) {
        // get all the types
        $(data.items).each(function(index, value) {
            types.push(data.items[index].type);
        });

        // figure out the unique ones
        uniqueTypes = _.uniq(types);
        // create a list and header for each type
        $(uniqueTypes).each(function(index, value) {
            $('<ul id=' + uniqueTypes[index].toLowerCase().replace(/\s+/g, '') + 'List><h3></h3></ul>').appendTo('#orderList');
            $('#' + uniqueTypes[index].toLowerCase().replace(/\s+/g, '')  + 'List h3').text(uniqueTypes[index]);
        });
        // add the items to the right list
        $(data.items).each(function(index, value) {
            if (value.available == true) {
                $('<li></li>').text(value.name).appendTo('#' + value.type.toLowerCase().replace(/\s+/g, '')  + 'List');
            }
        });
    });
});
