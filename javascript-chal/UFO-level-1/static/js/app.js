
var tableData = data;
var tbody = d3.select("tbody");
var list = d3.select("tbody");
console.log(list);
table(tableData);

// YOUR CODE HERE!
console.log(tableData);




function table(localdata) {

    list.html("");

    localdata.forEach(function (data) {
        console.log(data);
        var row = tbody.append("tr");
        Object.entries(data).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

var button = d3.select("#filter-btn");

button.on("click", function() {


    var inputElement = d3.select("#datetime");


    var inputValue = inputElement.property("value");

    // var button = d3.select("#filter-btn");
    // var inputField = d3.select("#datetime");

    console.log(inputValue);

    var filteredData = tableData.filter(datetime => datetime.datetime === inputValue);

    // if (inputValue === filteredData) {
    //
    //     tableData = filteredData;
    // }

    console.log(filteredData);

    table(filteredData);
})