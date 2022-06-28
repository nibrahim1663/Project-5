"use strict";

$(document).ready( () => 
{
	// move focus to Arrival date text box
    $("#arrival_date").focus();
	
	// This event handler will validate the user entries. 
	// If any of the entries are invalid, the form will be NOT submitted
    $("#reservation_form").submit( event => 
	{
		let isValid = true;

		const arrivalDate = $("#arrival_date").val().trim();
		const arrivalDatePattern = /\b\d{2}[\/]\d{2}[\/]\d{4}\b/;

		if(arrivalDate == "")
		{
			$("#arrival_date").next().text("Arrival Date is required.");
			isValid = false;
		}
		else if ( !arrivalDatePattern.test(arrivalDate) ) 
		{
			$("#arrival_date").next().text("Arrival date must be of this format dd/mm/yyyy");
			isValid = false;
		}
		else 
		{
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);

		// Save the arrival date into session variable called savedArrivalDate
		sessionStorage.setItem("savedArrivalDate", arrivalDate);

		const nights = $("#nights").val().trim();

		// const nightsPattern = /\b[1-9]\b/; // Nights must contain only digits
		const nightsPattern = /\b^\0*(?:[1-9][0-9]?|\100)$\b/;

		if(nights == "")
		{
			$("#nights").next().text("Number of nights is required");
			isValid = false;
		}
		else if ( !nightsPattern.test(nights) ) 
		{
			$("#nights").next().text("Number of nights must be numeric and greater than Zero");
			isValid = false;
		}
		else if ($("#nights").val() > 30)
		{
			$("#nights").next().text("Number of nights must be less than 31 days");
			isValid = false;
		}
		else 
		{
			$("#nights").next().text("");
		}

		$("#nights").val(nights);

		// Save the number of nights into session variable called numberOfNights
		sessionStorage.setItem("numberOfNights", nights);

		const adultCount = $("#adults").val().trim();
		sessionStorage.setItem("numberOfAdults", adultCount);

		const childCount = $("#children").val().trim();
		sessionStorage.setItem("numberOfChildren", childCount);

		const roomRadioButton = $("input[name='room']:checked").val();
		sessionStorage.setItem("roomType", roomRadioButton);

		const bedRadioButton = $("input[name='bed']:checked").val();
		sessionStorage.setItem("bedType", bedRadioButton);

		const smokerValue = document.querySelector('#smoking:checked') !== null;
		var smoker = new String();
		if (!smokerValue)
		{
			smoker = "No";
		}
		else
		{
			smoker = "Yes";
		}
		sessionStorage.setItem("smoker", smoker);

		// Name must contain only letters
		const name = $("#name").val().trim();
		const namePattern = /\b^[a-zA-Z\s]+$\b/; 
		
		if (name == "") 
		{ 
			$("#name").next().text("Name is required.");
			isValid = false;
		}
		else if ( !namePattern.test(name) ) 
		{
			$("#name").next().text("Name must be of alpha characters");
			isValid = false;
		}
		else 
		{
			$("#name").next().text("");
		}

		$("#name").val(name);

		// Save the number of nights into session variable called numberOfNights
		sessionStorage.setItem("guestName", name);

		// validate the email entry 
		// Email address must be of this format joe@gamil.com
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		const email = $("#email").val().trim();

		if (email == "") 
		{ 
			$("#email").next().text("Email is required.");
			isValid = false;
		}
		else if ( !emailPattern.test(email) ) 
		{
			$("#email").next().text("Must be a valid email address");
			isValid = false;
		}
		else 
		{
			$("#email").next().text("");
		}

		$("#email").val(email);

		sessionStorage.setItem("guestEmail", email);

		// validate the Phone number entry
		// Phone number must be digit and of this format 999-999-9999
		const phonePattern = /\b\d{3}[\-]\d{3}[\-]\d{4}\b/; 
		
		const phone = $("#phone").val().trim();

		if (phone == "") 
		{ 
			$("#phone").next().text("Phone number is required.");
			isValid = false;
		}
		else if ( !phonePattern.test(phone) ) 
		{
			$("#phone").next().text("Must be a valid phone number of this format 999-999-9999");
			isValid = false;
		}
		else 
		{
			$("#phone").next().text("");
		}

		$("#phone").val(phone);

		sessionStorage.setItem("guestPhone", phone);
	
		// prevent the submission of the form if any entries
		// are invalid 
		if (isValid == false) 
		{
			event.preventDefault();
		}
	});
		
}); 