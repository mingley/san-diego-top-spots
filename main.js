$(document).ready(function () {
    $.getJSON('http://localhost:8080/data.json',
        function (data) {
            console.log(data)
            var tr;
            for (var i = 0; i < data.length; i++) {
                tr = $('<tr>');
                tr.append("<tr>");
                tr.append("<td>" + data[i].name + "</td>");
                tr.append("<td>" + data[i].description + "</td>");
                tr.append("<td>" + 'https://www.google.com/maps?q=' + data[i].location + "</td>");
                tr.append("</tr>");
                $('table').append(tr);
            }})});