//----------------------------------------------------------------------
//                      1. Forms
//----------------------------------------------------------------------
let message = document.getElementById('message');

const onLogin = function(event) {
    event.preventDefault();
    message.innerHTML = "Hello " + event.target.username.value;
    message.style.display = 'block';
}


//----------------------------------------------------------------------
//                      2. Event Handlers
//----------------------------------------------------------------------
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let newSection = document.getElementById('keyboard-events-section');

const open = function() {
    close.style.display = 'block';
    newSection.style.display = 'block';
};

const hide = function() {
    close.style.display = 'none';
    newSection.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

const textChange = function() {
    view.innerHTML = 'Press a key and play with the ball';
};

const textReturn = function() {
    view.innerHTML = 'View next section';
};

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);


//----------------------------------------------------------------------
//                          3. Keyboard Events
//----------------------------------------------------------------------
let ball = document.getElementById('float-circle');

const up = function() {
    ball.style.bottom = '250px';
};
const down = function() {
    ball.style.bottom = '50px';
};

document.onkeydown = up;
document.onkeyup = down;