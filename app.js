  
'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let salesdata = document.getElementById('salesdata');

function SalmonCookies(name, min, max, average) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.average = average;
    this.cookiesPerHour = [];
    this.total = 0;
    SalmonCookies.allCookies.push(this);

}

SalmonCookies.allCookies = [];

function getFHeader() {

    let tableRowHeader = document.createElement('tr');
    salesdata.appendChild(tableRowHeader);
    let firstRowData = document.createElement('th');
    tableRowHeader.appendChild(firstRowData);
    firstRowData.textContent = '';
    for (let i = 0; i < hours.length; i++) {
        let innerRowData = document.createElement('th');
        tableRowHeader.appendChild(innerRowData);
        innerRowData.textContent = hours[i];
    }
    let lastRowData = document.createElement('th');
    tableRowHeader.appendChild(lastRowData);
    lastRowData.textContent = 'Daily Hours';
}
function getFooter() {
    let tableRowFooter = document.createElement('tr');
    salesdata.appendChild(tableRowFooter);
    let firstData = document.createElement('th');
    tableRowFooter.appendChild(firstData);
    firstData.textContent = 'Total';
    let totalHours = 0;
    let alltotal = 0;
    for (let i = 0; i < hours.length; i++) {
        totalHours = 0;
        for (let j = 0; j < SalmonCookies.allCookies.length; j++) {
           
            let total = SalmonCookies.allCookies[j].cookiesPerHour[i];
            totalHours += total;
            alltotal += totalHours;
        }
        let innerRowData = document.createElement('th');
        tableRowFooter.appendChild(innerRowData);
        innerRowData.textContent = totalHours;
    }
    let lastData = document.createElement('th');
    tableRowFooter.appendChild(lastData);
    lastData.textContent = alltotal;
}
SalmonCookies.prototype.render = function () {
    let innerTableRow = document.createElement('tr');
    salesdata.appendChild(innerTableRow);
    let firstData = document.createElement('td');
    innerTableRow.appendChild(firstData);
    firstData.textContent = this.name;
    for (let i = 0; i < hours.length; i++) {
        let innerData = document.createElement('td');
        innerTableRow.appendChild(innerData);
        innerData.textContent = this.cookiesPerHour[i];
    }
    let lastData = document.createElement('td');
    innerTableRow.appendChild(lastData);
    lastData.textContent = this.total;
};
SalmonCookies.prototype.getCustomer = function () {
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(getRandom(this.min, this.max) * this.average);
        this.cookiesPerHour.push(cookies);
        this.total += cookies;
    }
};
function getRandom(min, max) {
    let customer = Math.floor(Math.random() * (max - min + 1) + min);
    return customer;
}

getFHeader();
let seattle = new SalmonCookies('Seattle', 23, 65, 6.3);

seattle.getCustomer();

seattle.render();

let tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
tokyo.getCustomer();

tokyo.render();

let dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
dubai.getCustomer();

dubai.render();

let paris = new SalmonCookies('Paris', 20, 38, 2.3);

paris.getCustomer();

paris.render();


let lima = new SalmonCookies('Lima', 2, 16, 4.6);

lima.getCustomer();

lima.render();

getFooter();


function formSubmission(event) {
    console.log('call')
    event.preventDefault();
    let name = event.target.name.value;
    let min = event.target.min.value;
    let max = event.target.max.value.split(',');
    let average = event.target.average.value;
   


    let newlocation = new SalmonCookies(name, min, max, average);

    newlocation.getCustomer(3, 12);
    //remove the footer from table
    //remove the last row from HTML table using JS.
    deleterow('sales');
    
    newlocation.render();
  
    console.log(newlocation);
    getFooter();
  }
  function deleterow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
}

  salesdata.addEventListener('submit', formSubmission);