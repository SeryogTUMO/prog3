var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var gishatichner = [];
var hrashagorcarr = [];
var xotabuysarr = [];
var vorsordarr = [];
var side = 30;
function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount, gishatichnerCount, hrashagorccount, vorsordcount, xotabuyscount) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let j = 0; j < matrixSize; j++) {
                matrix[i][j] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < gishatichnerCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
        for (let i = 0; i < hrashagorccount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 4;
        }
        for (let i = 0; i < vorsordcount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 5;
        }
        for (let i = 0; i < xotabuyscount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 6;
        }
    }
    noStroke();
    matrixGenerator(30, 30, 10, 10, 10, 10, 10)
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                let eater = new gishatich(x, y);
                gishatichner.push(eater);
            }
            else if (matrix[y][x] == 4) {
                let eater = new hrashagorc(x, y);
                hrashagorcarr.push(eater);
            }
            else if (matrix[y][x] == 5) {
                let eater = new vorsord(x, y);
                vorsordarr.push(eater);
            }
            else if (matrix[y][x] == 6) {
                let eater = new xotabuys(x, y);
                xotabuysarr.push(eater);
            }
        }
    }
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