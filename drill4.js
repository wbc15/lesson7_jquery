/*
    Program Name: Recipe Display Action
    Author: William Clayton
    Date: 12/4/18
    Filename: drill4.js
    
*/

  /* global $ */

//displays the next element after current target 
function display(event) {

    $(event.currentTarget).next().fadeIn("slow");
    
} //end of display

//attach event listener to h3 elements to invoke display fucntion when clicked
//$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
    
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");

    
}//end of display2

//attach event listen to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color of the h3 element when the mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");

});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);
    
    
   


