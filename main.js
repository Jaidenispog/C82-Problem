var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color= "    #ff9100";
width_of_line=2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown") {
    
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth=width_of_line;

    console.log("Last Position Of X and Y Is =");
    console.log("X = "+ last_position_of_x + "Y = " +last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    

    console.log("Current Position Of X and Y Is =");
    console.log("X = "+ current_position_of_mouse_x + "Y = " +current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
}

last_position_of_x = current_position_of_mouse_x;
last_position_of_y= current_position_of_mouse_y;

}


