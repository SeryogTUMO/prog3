let LivingCreature = require('./LivingCreature');
module.exports = class Hrashagorc extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 0;
    }
    move() {
        let found = super.chooseCell(0);
        let exact = found[[Math.floor(Math.random() * found.length)]];

        if (exact) {
            this.energy++
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 4;
            let grasseater = new GrassEater(this.x, this.y);
            if(this.energy > 5){
                matrix[this.y][this.x] = 2;
                this.energy = 0;
                grassEaterArr.push(grasseater);
            }
            else{
                matrix[this.y][this.x] = 0;
            }
            this.x = x;
            this.y = y;
        }
    }
}
