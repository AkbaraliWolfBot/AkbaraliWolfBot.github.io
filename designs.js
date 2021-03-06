// Selecting color and size inputs

var height, width, color;
$(document).ready(function() {
    $("#sizePicker").submit(function(event) {
        event.preventDefault();
        height = $("#inputHeight").val();
        width = $("#inputWidth").val();
        makeGrid(height, width);
        console.log("height = " + height + " and width = " + width);

    })
});

// Creating a makeGrid() function and When size is submitted by the user, call the makeGrid()

function makeGrid(x, y) {
    $("tr").remove();
    for (var i = 1; i <= x; i++) {
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (var j = 1; j <= y; j++) {
            $("#table" + i).append("<td></td>");
        }
    }
    // adding color to cell by click
    $("td").click(function(element) {
        color = $("#colorPicker").val();
        $(event.target).css("background-color", color);
    });
}
