var users = [];
var person;
var points;
var mistakes;
var count;
var i = 0;
var x= 0;
var lettersNodeList = document.body.querySelectorAll('.letter'); //To select all the letters
var letters= Array.prototype.slice.call(lettersNodeList);
var answer=document.getElementById("answer");
var asking=document.getElementById("asking");
var result=document.getElementById("result");
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") }, { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },        { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") }
]

function getName() {
    //get the user´s name and welcome him on screen
    person = prompt("Please enter your first name", "Johnny");
    var x = document.getElementById('personName');
    x.innerHTML = person; // pass this value below into main function
    return person;
}

function runPasapalabra() { 
    i=0;
    points = 0;
    mistakes = 0;
    count=0;
    if (count < questions.length); { //only runs for as long as there are questions
        if (questions[i].status === 0) { //only shows questions that are not answered yet or have been skipped
            var givenAnswer = document.getElementById("answer").value;
            if (givenAnswer === questions[i].answer) { //first case: the answer is correct
                questions[i].status = 1;
                points++;
                count++;
             //   checkAnswer();
                console.log("right!");
            }
            //check if user wants to pass a question
            else if (givenAnswer === "pasapalabra" || givenAnswer === '') { //second case:there is no answer
                console.log("pass");
                count++;
                result.innerHTML = person + " you passed this but overall you have won " + points + " points and you´ve made " + mistakes + " mistakes."
            }
            //check if user exits game
            else if (givenAnswer === "exit") { //third case: user wants to exit
                console.log("out you go!");
                result.innerHTML = person + " goodbye, you have won " + points + " points and you´ve made " + mistakes + " mistakes."
                return;
            }
            //check for mistakes
            else {
                questions[i].status = -1;  //fourth case: the answer is incorrect
                mistakes++;
                count++;
               // checkAnswer();
                console.log("wrong!");
            }
        } 
      
    }
            
            result.innerHTML = person + ", you have won " + points + " points and you´ve made " + mistakes + " mistakes."
            i === questions.length-1 ? i = 0 : questions.splice(i,1);
            asking.innerHTML = (questions[i].question); //Go to the next question
            answer.value="";
            result.className += "show";
      
}

function checkAnswer(){
    if (questions[i].status === 1){
        points++
    }else if (questions[i].status === -1){
        mistakes++
    }else {
        
    }
}

//run main function on click
var pasapalabra = document.getElementById("play");
	pasapalabra.onclick = function (){
		letters[x].classList.remove("active");
		x === letters.length-1 ? x = 0 : x += 1; //goes to next letter
        runPasapalabra(); //restarts the loop with the next letter
	}