let LivingCreature = require('./LivingCreature');
module.exports = class Xotabuys extends LivingCreature {
    constructor(x, y) {
        super(x, y);
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    move() {
        let found = super.chooseCell(0);
        let exact = found[[Math.floor(Math.random() * found.length)]];

        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 6;
            let grass = new Grass(this.x, this.y);
            matrix[this.y][this.x] = 1;
            grassArr.push(grass);

            this.x = x;
            this.y = y;
        }
        else {
            let found = super.chooseCell(1);
            let exact = found[[Math.floor(Math.random() * found.length)]];
            if (exact) {
                let x = exact[0];
                let y = exact[1];
                matrix[y][x] = 6;
                matrix[this.y][this.x] = 1;
                this.x = x;
                this.y = y;
            }
        }
    }
}
