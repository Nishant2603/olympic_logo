canvas = document.getElementById("draw");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "rgb(34, 72, 122)";
ctx.lineWidth = 10;
ctx.rect(130, 100, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(250, 170, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(340, 170, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(430, 170, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(295, 220, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(385, 220, 40, 0, 2*Math.PI);
ctx.stroke();







