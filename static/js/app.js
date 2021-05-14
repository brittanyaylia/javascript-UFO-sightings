// UFO Java 

// from data.js
var tableData = data;
// table body selection 
let tbody = d3.select("tbody");

//build table function
function buildTable(data){
    //clear present data
    tbody.html("");
    //loop through data
    data.forEach((dataRow) => {
        //append table row to table body 
        let row = tbody.append("tr");
        //iterate through data using object.values & foreach 
        Object.values(dataRow).forEach((val) => {
            //append cell to row 
            let cell = row.append("td");
            cell.text(val);
        });
    })
}