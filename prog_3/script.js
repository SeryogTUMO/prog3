var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var gishatichner = [];
var hrashagorcarr = [];
var xotabuysarr = [];
var vorsordarr = [];
var side = 30;
function setup() {
 
    noStroke();

    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

  
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("deepskyblue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 6) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);

        }
    }

    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < gishatichner.length; i++) {
        const gishatich = gishatichner[i];
        gishatich.eat();
    }
    for (let i = 0; i < hrashagorcarr.length; i++) {
        const hrashagorc = hrashagorcarr[i];
        hrashagorc.move();
    }
    for (let i = 0; i < vorsordarr.length; i++) {
        const vorsord = vorsordarr[i];
        vorsord.eat();
    }
    for (let i = 0; i < xotabuysarr.length; i++) {
        const xotabuys = xotabuysarr[i];
        xotabuys.move();
    }
}