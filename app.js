// from data.js
var tableData = data;

d3.select("#filter-btn").on ("click", function() {
    d3.event.preventDefault();
    var input_date=d3.select("#datetime");
    var input_datavalue=input_date.property("value");
    createTable(input_datavalue);
});


// YOUR CODE HERE!
function creatTable(inputdate){
var filteredDate = tableData.filter(tableData => tableData.datetime=== inputdate);

filteredDate.forEach((item)=>{
    var row= d3.select("tbody").append("tr");
    Object.entries(item).forEach(([key, value]) => {
        var cell=d3.select("tbody").append("td"); 
        cell.text(value); });
});

}



  