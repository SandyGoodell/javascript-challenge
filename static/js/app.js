// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// select the table body
let tbody = d3.select("tbody");
// create function for the data table
function bt(data) {
    //clear out existing table data
    tbody.html("");

    // Loop through data and console.log each report object  -  console.log(sighting));
    data.forEach(dataRow => {
        // append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
          cell.text(val);
        }
    );
  });
}
function clickevent() {
    // define date from typed value
    const date = d3.select("#datetime").property("value")

    // define filtered data
    let filterdata = tableData
    
    // create a filterfor inputDate
    if (date) {filterdata = filterdata.filter(tablerow => tablerow.datetime === date)

    }
    bt(filterdata);

}
d3.select("#filter-btn").on("click", clickevent);
    //call data function     
    bt(tableData);
