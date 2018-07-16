function Trig() {
//degrees to radians
function degToRad (deg) { return deg / 180 * Math.PI; }
//radians to degrees
function radToDeg (rad) { return rad / Math.PI * 180; }

var self = this;

//sin
this.sin = function(a) {
return +(Math.sin(degToRad(a))).toFixed(3);
}
//cos
this.cos = function(a) {
return +(Math.cos(degToRad(a))).toFixed(3);
}
//tg
this.tg = function(a) {
return +(Math.tan(degToRad(a))).toFixed(3);
}
//ctg
this.ctg = function(a) {
return +(self.cos(a)/self.sin(a)).toFixed(3);
}
//sec
this.sec = function(a) {
return +(1/radToDeg(self.cos(a))).toFixed(3);
}
//cosec
this.cosec = function(a) {
return +(1/radToDeg(self.sin(a))).toFixed(3);
}
//arcsin
this.asin = function(a) {
return +(radToDeg(Math.asin(a))).toFixed(3);
}
//arccos
this.acos = function(a) {
return +(radToDeg(Math.acos(a))).toFixed(3);
}
//arctg
this.atg = function(a) {
return +(radToDeg(Math.atan(a))).toFixed(3);
}
//arcctg
this.actg = function(a) {
return +((a >= 0) ? trig.asin(1/Math.sqrt(1+1*1)) : Math.PI - trig.asin(1/Math.sqrt(1+1*1))).toFixed(3);
}
//arcsec
this.asec = function(a) {
return +((a >= 1 || a <= -1) ? (self.asin(Math.sqrt(a*a-1)/a) + ((a <= -1) ? Math.PI : 0)) : 0).toFixed(3);
}
//arccosec
this.acosec = function(a) {
return +(self.asin(1/a)).toFixed(3);
}
}
var trig = new Trig();





alert(trig.acosec(2));