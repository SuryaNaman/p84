Canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car_img = "car1.png";
car1_y = 10;
car1_x = 10;
car1_width = 120;
car1_height = 70;
car_img = "car2.png";
car2_y = 10;
car3_x = 100;
background_image = "racing.gif";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    background_imgTag.onload = uploadcar1;
    background_imgTag.src = car1_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car_imgTag, car1_x, car1_y, car1_width, car1_.height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("w");
    }
}