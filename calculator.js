var m=prompt("Please introduce the first number");
var n=prompt("Please introduce the second number");


function calculate(m,n){
 if(isNaN(m) && isNaN(n) || m.length == 0 && n.length == 0){
alert("Please introduce numbers in the fields")
 }else if(isNaN(m) || m.length == 0){
	   var squareRootN=Math.sqrt(n).toFixed(3);
     alert("The square root of the number you introduced is: "+ squareRootN);
  }else if(isNaN(n) || n.length == 0){
	   var squareRootM=Math.sqrt(m).toFixed(3);
           alert("The square root of the number you introduced is: "+ squareRootM);
  } else {
    n=parseFloat(n);
    m=parseFloat(m);
    var results=[(m+n), (m/n), (m-n), (m*n)];
	var sum=results[0].toFixed(3);
	var division=results[1].toFixed(3);
	var subtraction=results[2].toFixed(3);
	var multiplication=results[3].toFixed(3);
    alert("The results are: sum: "+sum+" division: "+division + " subtraction: "+subtraction+" multiplication: "+multiplication); 
  }
 }

calculate(m,n);

