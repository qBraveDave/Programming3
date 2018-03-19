var socket = io.connect();
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#acacac');
}

function mouseDragged() {
    socket.emit("send coords", [mouseX, mouseY]);
}

socket.on("display coords", function(data) {
    fill('blue');
    ellipse(data[0], data[1], 32, 32);
})