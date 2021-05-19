// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
  //if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable!

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'beth';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'still beth';
}
