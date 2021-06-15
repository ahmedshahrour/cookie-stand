'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let sales = document.getElementById('sales');

function SalmonCookie(name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesPerHour = [];
  this.total = 0;
  SalmonCookie.allCookies.push(this);
}

SalmonCookie.allCookies = [];

function getFirstHeader() {
  let tableRowHeader = document.createElement('tr');
  sales.appendChild(tableRowHeader);
  let firstRowData = document.createElement('th');
  tableRowHeader.appendChild(firstRowData);
  firstRowData.textContent = '';
  for(let i = 0; i < hours.length; i++) {
    let innerRowData = document.createElement('th');
    tableRowHeader.appendChild(innerRowData);
    innerRowData.textContent = hours[i];
  }
  let lastRowData = document.createElement('th');
  tableRowHeader.appendChild(lastRowData);
  lastRowData.textContent = 'Daily totals';
}
function getFooter() {
  let tableRowFooter = document.createElement('tr');
  sales.appendChild(tableRowFooter);
  let firstData = document.createElement('th');
  tableRowFooter.appendChild(firstData);
  firstData.textContent = 'Totals';
  let totalHours = 0;
  let totalAll = 0;
  for(let i = 0; i < hours.length; i++) {
    totalHours = 0;
    for(let j = 0; j < SalmonCookie.allCookies.length; j++) {
      totalHours = 0;
      let total = SalmonCookie.allCookies[j].cookiesPerHour[i];
      totalHours += total;
      totalAll += totalHours;
    }
    let innerRowData = document.createElement('th');
    tableRowFooter.appendChild(innerRowData);
    innerRowData.textContent = totalHours;
  }
  let lastData = document.createElement('th');
  tableRowFooter.appendChild(lastData);
  lastData.textContent = totalAll;
}
SalmonCookie.prototype.render = function () {
  let innerTableRow = document.createElement('tr');
  sales.appendChild(innerTableRow);
  let firstData = document.createElement('td');
  innerTableRow.appendChild(firstData);
  firstData.textContent = this.name;
  for(let i = 0; i < hours.length; i++) {
    let innerData = document.createElement('td');
    innerTableRow.appendChild(innerData);
    innerData.textContent = this.cookiesPerHour[i];
  }
  let lastData = document.createElement('td');
  innerTableRow.appendChild(lastData);
  lastData.textContent = this.total;
};
SalmonCookie.prototype.getCustomer = function(){
  for(let i = 0; i < hours.length; i++){
    let cookie = Math.ceil(getRandom(this.min, this.max) * this.average);
    this.cookiesPerHour.push(cookie);
    this.total += cookie;
  }
};
function getRandom(min, max) {
  let customer = Math.floor(Math.random() * (max - min + 1) + min);
  return customer;
}

getFirstHeader();
let seattle = new SalmonCookie('Seattle', 23, 65, 6.3);
seattle.getCustomer();
seattle.render();

let tokyo = new SalmonCookie('Tokyo', 3, 24, 1.2);
tokyo.getCustomer();
tokyo.render();

let dubai = new SalmonCookie('Dubai', 11, 38, 3.7);
dubai.getCustomer();
dubai.render();

let paris = new SalmonCookie('Paris', 20, 38, 2.3);
paris.getCustomer();
paris.render();

let lima = new SalmonCookie('Lima', 2, 16, 4.6);
lima.getCustomer();
lima.render();
getFooter();