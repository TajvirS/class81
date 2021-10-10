canvas = document.getElementById("mycanvas");
color="red";

ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 40, 0, 2 * Math.PI); 
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_x = e.clienty - canvas.offsetTop;

    console.log("X =" + mouse_x + " ,Y = " + mouse_Y);
    circle(mouse_x , mouse_y);
} 

function circle(mouse_x , mouse_y)  
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 40, 0, 2 * Math.PI); 
ctx.stroke();
}