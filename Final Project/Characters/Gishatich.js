class Gishatich extends KendaniEak{
    
    constructor(x, y, index) {
        super(x, y, index)
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        this.index = 2;
    }
    chooseCell(ch) {
        var found = [];
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
    sharjvel() {
        this.stanalNorKordinatner();
        var voidCells = this.chooseCell(1);
        var newCell = random(voidCells);
        this.energy--;
        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var voidCells = this.chooseCell(2);
        var newCell = random(voidCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 3;
            this.y = newCell[1];
            this.x = newCell[0];
            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    stats.xotakerner.eaten++;
                }
            }
            this.energy += 2;
            this.bazmanal();
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        if( weatherNum == 0 ) {
            if (this.energy >= 17) {
                gishatichner.push(new Gishatich(this.x, this.y, 3));
                this.energy = 10;
                stats.gishatichner.bazmacele++;
            }
        }
        else if (weatherNum == 1) {
           if (this.energy >= 18) {
                gishatichner.push(new Gishatich(this.x, this.y, 3));
                this.energy = 10;
                stats.gishatichner.bazmacele++;
            }           
        }
        else if (weatherNum == 2) {
            if (this.energy >= 17) {
                 gishatichner.push(new Gishatich(this.x, this.y, 3));
                 this.energy = 10;
                 stats.gishatichner.bazmacele++;
             }           
         }
         else if (weatherNum == 3) {
            if (this.energy >= 18) {
                 gishatichner.push(new Gishatich(this.x, this.y, 3));
                 this.energy = 10;
                 stats.gishatichner.bazmacele++;
             }           
         }
    }
    
    mahanal() {
        if (weatherNum == 0) {
            if (this.energy <= -5) {
                matrix[this.y][this.x] = 0;
                for (var i in gishatichner) {
                    if (this.x == gishatichner[i].x && this.y == gishatichner[i].y) {
                        gishatichner.splice(i, 1);
                        stats.gishatichner.mahacele++;
                    }
                }
            }
        }
        else if(weatherNum == 1) {
            if (this.energy <= -22) {
                matrix[this.y][this.x] = 0;
                for (var i in gishatichner) {
                    if (this.x == gishatichner[i].x && this.y == gishatichner[i].y) {
                        gishatichner.splice(i, 1);
                        stats.gishatichner.mahacele++;
                    }
                }
            }
        }
        else if(weatherNum == 2) {
            if (this.energy <= -5) {
                matrix[this.y][this.x] = 0;
                for (var i in gishatichner) {
                    if (this.x == gishatichner[i].x && this.y == gishatichner[i].y) {
                        gishatichner.splice(i, 1);
                        stats.gishatichner.mahacele++;
                    }
                }
            }
        }
        else if(weatherNum == 3) {
            if (this.energy <= -20) {
                matrix[this.y][this.x] = 0;
                for (var i in gishatichner) {
                    if (this.x == gishatichner[i].x && this.y == gishatichner[i].y) {
                        gishatichner.splice(i, 1);
                        stats.gishatichner.mahacele++;
                    }
                }
            }
        }
    }
}
