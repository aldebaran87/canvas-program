const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;


let count = 10;
let OB = []
let OB2 = []


let angle = 0;
let rectObj = {
	widthR: 300,
	heightR: 300,
	rectX: 0,
	rectY: 0,
}



class Rect {
	constructor(angle, color) {
		this.angle = angle;
		this.width = rectObj.widthR;
		this.height = rectObj.heightR;
		this.x = rectObj.rectX;
		this.y = rectObj.rectY;
		this.velosity = 0.3;
		this.color = color;
	}

	position() {
		this.angle += this.velosity;
		this.colot += 0.5
	}
	position2() {
		this.angle -= this.velosity;
		this.colot += 0.5
	}
	draw() {
		ctx.translate(300, 300);
		ctx.rotate(this.angle * Math.PI / 180);
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}

}
function newRects() {
	for (i = 0; i < count; i++) {
		angle += 15;
		col = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`
		OB.push(new Rect(angle, col))
	}
}
newRects();
function init() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i < OB.length; i++) {
		OB[i].position();
		OB[i].draw();
	}
	requestAnimationFrame(init)

}

init()

