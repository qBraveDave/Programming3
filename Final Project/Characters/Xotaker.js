class Xotaker extends KendaniEak {
    constructor(x, y, index){
        super(x, y, index);
        this.tariq = 0;
    }
   stanalNorKordinatner() {
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
   chooseCell(ch) {
       this.stanalNorKordinatner();
       return super.chooseCell(ch);
   }

    bazmanal() {
    if (weatherNum == 0 || weatherNum == 2) {
        if (this.energy >= 10) {
            xotakerner.push(new Xotaker(this.x, this.y));
            this.energy = 5;
            stats.xotakerner.bazmacele++;
        }
    }
    else if (weatherNum == 1) {
        if (this.energy >= 16) {
            xotakerner.push(new Xotaker(this.x, this.y));
            this.energy = 5;
            stats.xotakerner.bazmacele++;
        }
    }
    else if (weatherNum == 3) {
        if (this.energy >= 13) {
            xotakerner.push(new Xotaker(this.x, this.y));
            this.energy = 5;
            stats.xotakerner.bazmacele++;
        }
    }
    }
    mahanal() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1)
                    stats.xotakerner.mahacele++;
                }
            }
        }
    }

    sharjvel() {
        this.stanalNorKordinatner();
        var voidCells = this.chooseCell(0);
        var newCell = random(voidCells);
        this.energy--;

        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 2;
            this.x = newCell[0];
            this.y = newCell[1];
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var voidCells = this.chooseCell(1);
        var newCell = random(voidCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 2;
            this.y = newCell[1];
            this.x = newCell[0];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    stats.grass.eaten++;
                }

            }
            this.energy++;
            this.bazmanal();
        }
        else {
            this.sharjvel();
        }
    }
}
