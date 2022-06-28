"use strict";

// Retrieve/Get the values from the session varibales to be displayed on the response page
document.getElementById("arrival_date_display").innerHTML = sessionStorage.getItem("savedArrivalDate");

document.getElementById("nights_display").innerHTML = sessionStorage.getItem("numberOfNights");

document.getElementById("adults_display").innerHTML = sessionStorage.getItem("numberOfAdults");

document.getElementById("children_display").innerHTML = sessionStorage.getItem("numberOfChildren");

document.getElementById("roomTypeDisplay").innerHTML = sessionStorage.getItem("roomType");

document.getElementById("bedTypeDisplay").innerHTML = sessionStorage.getItem("bedType");

document.getElementById("smokingDisplay").innerHTML = sessionStorage.getItem("smoker");

document.getElementById("emailDisplay").innerHTML = sessionStorage.getItem("guestEmail");

document.getElementById("phoneDisplay").innerHTML = sessionStorage.getItem("guestPhone");

document.getElementById("nameDisplay").innerHTML = sessionStorage.getItem("guestName");
