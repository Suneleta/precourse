
var input1 = prompt("Please introduce your name");
var name = input1.toString();


    var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

    function getFlights(){
    for (var i=0; i<flights.length;i++){
      if(flights[i].scale===false){
        flights[i].scale="no realiza ninguna escala"
      }else{
        flights[i].scale="realiza escalas"
      }
      
      console.log(
        "El vuelo con origen "+ flights[i].from + " y destino "+ flights[i].to+ " tiene un coste de "+ flights[i].cost+ "€ y "+ flights[i].scale);      
      }
    }


    function getAveragePrice(){
      var array = [];
      for(var i=0;i<flights.length;i++){
        var price=Number([flights[i].cost]);
        array.push(price);
        var sum = array.reduce(function(a, b) { return a + b; }, 0);  
        var avg = sum / flights.length;

      }
     console.log("The average price of the flights is "+avg)
   
    }
    
    function getStopovers() {
      var stopsNumber = [];
      for (var i=0; i<flights.length;i++){
      if(flights[i].scale==="realiza escalas"){
        stopsNumber.push(i);
         
        }
      }
       console.log("There are "+stopsNumber.length+" flights with stopovers")  
    }

    function getLastFlight(){
      var lastFlights=[];
      for (var i=0; i>6;i++){
        var lastFlightsA=flights[i].to.toString();
        lastFlights.push(i);
      }
            console.log(lastFlightsA) 

    }
    function showFlights(name) {  
  
        //First we check if the name is empty

    if (
      (name.length === 0)
    ) {
      alert("Please introduce your name");

    } else {
        alert("Welcome "+name);
        getFlights();
        getAveragePrice();
        getStopovers();
        getLastFlight()

    }

  }

  showFlights(name);

