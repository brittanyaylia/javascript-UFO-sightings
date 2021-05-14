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

//button clicks
function handleClick(){
    //prevent page refresh 
    d3.event.preventDefault();
    //get value of selected html input
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    //filter data using entered date/time
    if(date){
        //apply filter & keep rows that match date/time value 
        filterData = filterData.filter((row) => row.datetime === date);
    }
}