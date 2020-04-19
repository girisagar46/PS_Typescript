import {Customer} from "./model/customers";

let firstCustomer = new Customer("Sagar");
let newMessage: string = firstCustomer.announce();

let webHeading = document.querySelector("h1");
console.log(webHeading, "-----");
webHeading!.textContent = newMessage;
