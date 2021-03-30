canvas = document.getElementById("ca");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "purple";
ctx.lineWidth="7";
ctx.arc(390,250,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mm);
function mm(e) {
    X= e.clientX - canvas.offsetLeft;
    Y= e.clientY - canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle= "purple";
ctx.lineWidth="7";
ctx.arc(X,Y,40,0,2*Math.PI);
ctx.stroke();
}