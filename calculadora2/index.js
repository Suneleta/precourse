// Get dom objects for calculator buttons and screen
var buttons = document.body.querySelectorAll('.calculator_keys > button');
var output = document.querySelector('.calculator_screen');

// Assigned variables
var operator = ['×', '÷', '-', '+', '%'];
var input = '';
var calculation = '';
var result = '';
var i;

for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        //get value of button
        var buttonValue = this.innerHTML;
        //if ac make input 0 and dont do any calculation
        if (buttonValue === 'AC') {
            input = ''; //bug I want this to be substituted by any number clicked
            calculation = '';
        } else if (buttonValue === '.') {
            // make sure only one dot is inserted---bug: how can I show it in the second number
            if (input.indexOf('.') === -1) {
                input += '.';
            }

        } //make calculation when we hit = 
        else if (buttonValue === '=') {

            calculation = input.replace(/×/g, '*');
            calculation = calculation.replace(/÷/g, '/');
            result = Math.round(eval(calculation) * 1000000) / 1000000;
            input = result;

        } //what happens when we hit an operator
        else if (operator.indexOf(buttonValue) > -1) {
            input += buttonValue;

        } // showing the numbers you click
        else {

            input += buttonValue;

        }
        output.innerHTML = input;
    }
}