var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var width = screen.width;
var new_width = width - 70;
var height = screen.height;
var new_height = height - 300;
var mouseEvent="";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    in_col = document.getElementById("color").value;
    in_rad = document.getElementById("radius").value;
    in_wid = document.getElementById("width").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    c_x=e.clientX-canvas.offsetLeft;
    c_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=in_col;
        ctx.lineWidth=in_wid;
        ctx.arc(c_x, c_y, in_rad, 0, 2*Math.PI);
        ctx.stroke();   
    }
    l_x=c_x;
    l_y=c_y;
}
function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e) {
    in_col = document.getElementById("color").value;
    in_rad = document.getElementById("radius").value;
    in_wid = document.getElementById("width").value;

    width_of_line = document.getElementById("width").value;
    color = document.getElementById("color").value;
    l_x = e.touches[0].clientX - canvas.offsetLeft;
    l_y = e.touches[0].clientY - canvas.offseTop;
}


color = "black";



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {

    c_x = e.touches[0].clientX - canvas.offsetLeft;
    c_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + l_x + "y = " + l_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + c_x + "y = " + c_y);
    ctx.arc(c_x, c_y, in_rad, 0, 2*Math.PI);
    ctx.stroke();


    l_x = c_x;
    l_y = c_y;
}