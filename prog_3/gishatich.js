class gishatich extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 3;
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
    chooseCell(char, char1) {
        this.getNewCordinates();
        let result = [];


        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char || matrix[y][x] == char1) {
                    result.push(this.directions[i]);

                }
            }

        }
        return result;


    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 10) {
            let x = exact[0];
            let y = exact[1];

            let eater = new gishatich(x, y);
            matrix[y][x] = 0;
            gishatichner.push(eater);
            this.energy = 3;
        }
        for (let i = 1; i < 10; i++) {
            if (gishatichner.length > 5) {
                this.die;
            }
        }

    }
    eat() {
        let found = this.chooseCell(1, 2);
        let exact = random(found);

        if (exact) {
            this.energy += 5;
            let x = exact[0];
            let y = exact[1];
            if (matrix[y][x] == 1) {
                for (let i = 0; i < grassArr.length; i++) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                }
            }

            else if (matrix[y][x] == 2) {
                for (let i = 0; i < grassEaterArr.length; i++) {
                    if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                        grassEaterArr.splice(i, 1)
                    }
                }
            }

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            if (this.energy > 30) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    move() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy--;

            if (this.energy < 0) {
                this.die();
            }
        }
        else {
            this.energy--;
            if (this.energy < 0) {
                this.die();
            }
        }
    }
    die() {
        for (let i = 0; i < gishatichner.length; i++) {
            if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                gishatichner.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;

    }
}
