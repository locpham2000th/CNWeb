const d = new Date();
document.getElementById("demo").innerHTML = d;
console.log(d.getSeconds());
let h = d.getHours;

var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(50,100);
        ctx.stroke();
// Math.cos()