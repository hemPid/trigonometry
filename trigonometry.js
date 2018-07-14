function Trig() {
//degrees to radians
function degToRad (deg) { return deg / 180 * Math.PI; }
//radians to degrees
function radToDeg (rad) { return rad / Math.PI * 180; }

//sin
this.sin = function(a) {
return (Math.sin(degToRad(a))).toFixed(3);
}
//cos
this.cos = function(a) {
return (Math.cos(degToRad(a))).toFixed(3);
}
//tg
this.tg = function(a) {
return (Math.tan(degToRad(a))).toFixed(3);
}
//arcsin
this.asin = function(a) {
return (radToDeg(Math.asin(a))).toFixed(3);
}
//arccos
this.acos = function(a) {
return (radToDeg(Math.acos(a))).toFixed(3);
}
//arctg
this.atg = function(a) {
return (radToDeg(Math.atan(a))).toFixed(3);
}
}
var trig = new Trig();




alert(trig.cos(60));