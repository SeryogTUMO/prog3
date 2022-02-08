var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
const { kill } = require('process');

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3001);



matrix = [];

function matrixGenerator(matrixSize, grassCount, grassEaterCount, gishatichnerCount, hrashagorccount, vorsordcount, xotabuyscount) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 2;
    }
    for (let i = 0; i < gishatichnerCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 3;
    }
    for (let i = 0; i < hrashagorccount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 4;
    }
    for (let i = 0; i < vorsordcount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 5;
    }
    for (let i = 0; i < xotabuyscount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 6;
    }
}

matrixGenerator(30, 30, 5, 5, 5, 2, 5);

io.sockets.emit('send matrix', matrix)


grassArr = [];
grassEaterArr = [];
gishatichner = [];
hrashagorcarr = [];
xotabuysarr = [];
vorsordarr = [];

Grass = require("./Grass");
GrassEater = require("./GrassEater");
Gishatich = require("./Gishatich");
Hrashagorc = require("./Hrashagorc");
Xotabuys = require("./Xotabuys");
Vorsord = require("./Vorsord");



function createObject() {

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
                let eater = new Gishatich(x, y);
                gishatichner.push(eater);
            }
            else if (matrix[y][x] == 4) {
                let eater = new Hrashagorc(x, y);
                hrashagorcarr.push(eater);
            }
            else if (matrix[y][x] == 5) {
                let eater = new Vorsord(x, y);
                vorsordarr.push(eater);
            }
            else if (matrix[y][x] == 6) {
                let eater = new Xotabuys(x, y);
                xotabuysarr.push(eater);
            }
        }
    }
    io.sockets.emit('send matrix', matrix)

}

function game() {
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
    io.sockets.emit('send matrix', matrix)
}


setInterval(game, 300);

var weath;

function Winter() {
    weath = "winter";
    io.sockets.emit('Winter', weath);
}

function Summer() {
    weath = "summer";
    io.sockets.emit('Summer', weath);
}

function Spring() {
    weath = "spring";
    io.sockets.emit('Spring', weath);
}
function Autumn() {
    weath = "autumn";
    io.sockets.emit('Autumn', weath);
}

function Kill() {
    grassArr = [];
    grassEaterArr = [];
    gishatichner = [];
    hrashagorcarr = [];
    xotabuysarr = [];
    vorsordarr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddGrass() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            var gr = new Grass(x, y);
            grassArr.push(gr);
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddGrassEater() {
    let count = 0;
    for (var i = 0; i < 50; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (count < 7) {
            if (i < 30) {
                if (matrix[y][x] == 0) {
                    count++;
                    matrix[y][x] = 2;
                    var grEater = new GrassEater(x, y);
                    grassEaterArr.push(grEater);
                }

            } else if (i >= 30) {
                if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                    count++;
                    matrix[y][x] = 2;
                    var grEater = new GrassEater(x, y);
                    grassEaterArr.push(grEater);
                }
            }
        }


    }

    io.sockets.emit("send matrix", matrix);
}
function AddGishatic() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            var gishatich = new Gishatich(x, y);
            gishatichner.push(gishatich);
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddGishatic() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            var gishatich = new Gishatich(x, y);
            gishatichner.push(gishatich);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddHrashagorc() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            var hrashq = new Hrashagorc(x, y);
            hrashagorcarr.push(hrashq);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddVorsord() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            var vors = new Vorsord(x, y);
            vorsordarr.push(vors);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddXotabuys() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
            var xot = new Xotabuys(x, y);
            xotabuysarr.push(xot);
        }
    }
    io.sockets.emit("send matrix", matrix);
}


io.on('connection', function (socket) {
    createObject();
    socket.on("spring", Spring);
    socket.on("summer", Summer);
    socket.on("autumn", Autumn);
    socket.on("winter", Winter);
    socket.on("addGrass", AddGrass);
    socket.on("addGrassEater", AddGrassEater);
    socket.on("killAll", Kill);
    socket.on("addGishatich", AddGishatic);
    socket.on("addHrashagorc", AddHrashagorc);
    socket.on("addVorsord", AddVorsord);
    socket.on("addXotabuys", AddXotabuys);
})

var statistics = {};
setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.gishatich = gishatichner.length;
    statistics.vorsord = vorsordarr.length;
    statistics.hrashagorc = hrashagorcarr.length;
    statistics.xotabuys = xotabuysarr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
    })
}, 1000);