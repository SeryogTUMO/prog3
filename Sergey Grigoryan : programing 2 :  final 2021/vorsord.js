
class vorsord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
    chooseCell(char) {
        this.getNewCordinates();
        let result = [];


        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }
        }
        return result;
    }
    move() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }

        else {
            let found = this.chooseCell(1);
            let exact = random(found)
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        let found = this.chooseCell(3);
        let exact = random(found);

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