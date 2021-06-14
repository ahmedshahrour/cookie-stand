'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//let parentElement = HTMLAnchorElement

let parentElement = document.getElementById('salmon');


let seattle = {

    name: 'seattle',
    minimumCustomers: 23,
    maximumCustomers: 65,
    avgcookies: 6.3,

    cookiesPerHours: [],
    total: 0,
    getCustomer: function () {

        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minimumCustomers,this.maximumCustomers*))

            let cookies = Math.ceil(getRandomCustomer(this.minimumCustomers, this.maximumCustomers) * this.avgcookies);

            this.cookiesPerHours.push(cookies);

            this.total += cookies;
            //this.total = this.total+cookies;
        }

        console.log(this.cookiesPerHours);
        console.log(this.total);

    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);

        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {

            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `${hours[i]}: ${this.cookiesPerHours[i]}cookies`;

        }

        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `total: ${this.total}cookies`;
    }
}


seattle.getCustomer();
seattle.render();

function getRandomCustomer(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
}


//tokyo


let tokyo = {

    name: 'tokyo',
    minimumCustomers: 3,
    maximumCustomers: 24,
    avgcookies: 1.2,

    cookiesPerHours: [],
    total: 0,
    getCustomer: function () {

        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minimumCustomers,this.maximumCustomers*))

            let cookies = Math.ceil(getRandomCustomer(this.minimumCustomers, this.maximumCustomers) * this.avgcookies);

            this.cookiesPerHours.push(cookies);

            this.total += cookies;
            //this.total = this.total+cookies;
        }

        console.log(this.cookiesPerHours);
        console.log(this.total);

    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);

        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {

            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `${hours[i]}: ${this.cookiesPerHours[i]}cookies`;

        }

        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `total: ${this.total}cookies`;
    }
}


tokyo.getCustomer();
stokyo.render();

function getRandomCustomer(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
}

//dubai


let dubai = {

    name: 'dubai',
    minimumCustomers: 11,
    maximumCustomers: 38,
    avgcookies: 3.7,

    cookiesPerHours: [],
    total: 0,
    getCustomer: function () {

        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minimumCustomers,this.maximumCustomers*))

            let cookies = Math.ceil(getRandomCustomer(this.minimumCustomers, this.maximumCustomers) * this.avgcookies);

            this.cookiesPerHours.push(cookies);

            this.total += cookies;
            //this.total = this.total+cookies;
        }

        console.log(this.cookiesPerHours);
        console.log(this.total);

    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);

        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {

            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `${hours[i]}: ${this.cookiesPerHours[i]}cookies`;

        }

        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `total: ${this.total}cookies`;
    }
}


dubai.getCustomer();
dubai.render();

function getRandomCustomer(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
}

//paris


let paris = {

    name: 'paris',
    minimumCustomers: 20,
    maximumCustomers: 38,
    avgcookies: 2.3,

    cookiesPerHours: [],
    total: 0,
    getCustomer: function () {

        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minimumCustomers,this.maximumCustomers*))

            let cookies = Math.ceil(getRandomCustomer(this.minimumCustomers, this.maximumCustomers) * this.avgcookies);

            this.cookiesPerHours.push(cookies);

            this.total += cookies;
            //this.total = this.total+cookies;
        }

        console.log(this.cookiesPerHours);
        console.log(this.total);

    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);

        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {

            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `${hours[i]}: ${this.cookiesPerHours[i]}cookies`;

        }

        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `total: ${this.total}cookies`;
    }
}


paris.getCustomer();
paris.render();

function getRandomCustomer(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
}

//lima


let lima = {

    name: 'lima',
    minimumCustomers: 2,
    maximumCustomers: 16,
    avgcookies: 4.6,

    cookiesPerHours: [],
    total: 0,
    getCustomer: function () {

        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minimumCustomers,this.maximumCustomers*))

            let cookies = Math.ceil(getRandomCustomer(this.minimumCustomers, this.maximumCustomers) * this.avgcookies);

            this.cookiesPerHours.push(cookies);

            this.total += cookies;
            //this.total = this.total+cookies;
        }

        console.log(this.cookiesPerHours);
        console.log(this.total);

    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);

        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {

            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `${hours[i]}: ${this.cookiesPerHours[i]}cookies`;

        }

        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `total: ${this.total}cookies`;
    }
}


lima.getCustomer();
lima.render();

function getRandomCustomer(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
}



