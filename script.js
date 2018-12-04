/*
    Program Name: Recipe Display Action
    Author: William Clayton
    Date: 12/4/18
    Filename: script.js
    
*/

  /* global $ */

//displays the next element after current target 
function display(event) {

    $(event.currentTarget).next().fadeIn("slow");
    
} //end of display

//attach event listener to h3 elements to invoke display fucntion when clicked
$("h3").click(display);
    
   


