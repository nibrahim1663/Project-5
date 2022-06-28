"use strict";
// This function formats the Date object that’s passed to it in MM/DD/YYYY format and then returns the date string
function convertToDate(dateString) 
{
    var day =  dateString.getDate();

    if (day < 10)
    {
        day = "0" + day;
    }

    var month = dateString.getMonth() + 1;

    if (month < 10)
    {
        month = "0" + month;
    }

    var year = dateString.getFullYear();

    let formattedDate = month + "/" + day + "/" + year;

    return formattedDate.toString();     
}

// This function calculates the discount precentage according to the customer type
const calculateDiscount = (customer, subtotal) => 
{
    if (customer == "reg") 
    {
        if (subtotal >= 100 && subtotal < 250) 
        {
            return .1;
        } 
        else if (subtotal >= 250 && subtotal < 500) 
        {
            return  .25;
        } 
        else if (subtotal >= 500) 
        {
            return .3;
        } 
        else 
        {
            return 0;
        }        
    }
    else if (customer == "loyal") 
    {
        return .3;        
    }
    else if (customer == "honored") 
    {
        if (subtotal < 500) 
        {
            return .4;
        }
        else 
        {
            return .5;
        }    
    }
};

$( document ).ready( () => 
{
    $("#calculate").click( () => 
    {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val();
        subtotal = parseFloat(subtotal);
        if ( isNaN(subtotal) || subtotal <= 0) 
        {
            alert("Subtotal must be a number greater than zero.");
            $("#subtotal").val("");
            $("#subtotal").focus();
            return;
        }

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;
        
        $("#subtotal").val( subtotal.toFixed(2) );
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );
       
        // set focus on type drop-down when done  
        $("#type").focus();

          // Get the invoice date string
          const invoiceDateString = $("#invoice_date").val();

          // Regular expression for the date format mm/dd/yyy
          const InvoiceDatePattern = /\b\d{2}[\/]\d{2}[\/]\d{4}\b/;
          
          if (invoiceDateString != "")
          {
                if ( !InvoiceDatePattern.test(invoiceDateString) ) 
                {
                    $("#invoice_date").next().text("Please enter the correct date format MM/DD/YYY");
                    $("#invoice_date").val("");
                    $("#invoice_date").focus();
                    return;
                }
                else
                {
                    // Clear the error message
                    $("#invoice_date").next().text("");

                    // Create a Date object from invoice date string
                    const dateObject = new Date(invoiceDateString);
                    
                    const formattedDate = convertToDate(dateObject);
                    // Set the value of the Invoice Date field to be that formatted Date
                    $("#invoice_date").val(formattedDate);
    
                    // calculates the due date as 30 days after the invoice date. Then, format that date
                    const dueDate = new Date(formattedDate);
                    dueDate.setDate( dueDate.getDate() + 30 );
                    const formattedDueDate = convertToDate(dueDate);
    
                    // Set the value of the Due Date field to be that formatted Due Date
                    $("#due_date").val(formattedDueDate);
    
                }
            
          }
          
          if (invoiceDateString == "")
          {
            const currentDate = new Date();
            const formattedDate = convertToDate(currentDate);

            // Set the value of the Invoice Date field to be that formatted Date
            $("#invoice_date").val(formattedDate);

            // calculates the due date as 30 days after the invoice date. Then, format that date
            const dueDate = new Date();
            dueDate.setDate( dueDate.getDate() + 30 );
            const formattedDueDate = convertToDate(dueDate);

            // Set the value of the Due Date field to be that formatted Due Date
            $("#due_date").val(formattedDueDate);
          }
    });
    
    $("#clear").click( () => 
    {
        // Clear all values in the following boxes
        $("#type").val("reg");
        $("#subtotal").val("");
        $("#invoice_date").val("");
        $("#percent").val("");
        $("#discount").val("");
        $("#total").val("");
        $("#due_date").val("");
        // Clear the error message
        $("#invoice_date").next().text("");

        // set focus on type drop-down when done
        $("#type").focus();
    })

    // set focus on type drop-down on initial load
    $("#type").focus();
});

