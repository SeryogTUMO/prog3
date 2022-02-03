let LivingCreature = require('./LivingCreature');
    module.exports = class vorsord extends LivingCreature{
    constructor(x, y) {
        super(x, y)

    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {
        let found = super.chooseCell(0);
        let exact = found[[Math.floor(Math.random() * found.length)]];

        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
        else {
            console.log("aa");
            let found = super.chooseCell(1);
            let exact = found[[Math.floor(Math.random() * found.length)]];
            if (exact) {
                let x = exact[0];
                let y = exact[1];
                matrix[y][x] = 5;
                matrix[this.y][this.x] = 1;
                this.x = x;
                this.y = y;
            }
        }
    }
    eat() {
        let found = super.chooseCell(3);
        let exact = found[[Math.floor(Math.random() * found.length)]];;

        if (exact) {
            let x = exact[0];
            let y = exact[1];
            if (matrix[y][x] == 3) {
                for (let i = 0; i < gishatichner.length; i++) {
                    if (gishatichner[i].x == x && gishatichner[i].y == y) {
                        gishatichner.splice(i, 1)
                    }
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 0;
            this.x = x;
            this.y = y;
        }
        else {
            this.move();
        }
    }

}