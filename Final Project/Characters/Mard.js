class Human  {
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
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
            matrix[newCell[1]][newCell[0]] = 7;
            this.x = newCell[0];
            this.y = newCell[1];
        }
    }


     utelXotaker() {
        this.stanalNorKordinatner();
        var voidCells = this.chooseCell(2);
        var newCell = random(voidCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 7;
            this.y = newCell[1];
            this.x = newCell[0];
            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    stats.xotakerner.eaten++;
                }
            }
            this.energy += 3;
            this.mahanal();
            this.bazmanal();
        }
        else {
            this.sharjvel();
        }
    }

     utelGishatich() {
        this.stanalNorKordinatner();
        var voidCells = this.chooseCell(3);
        var newCell = random(voidCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 7;
            this.y = newCell[1];
            this.x = newCell[0];
            this.energy += 3;
            this.bazmanal();
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    stats.gishatichner.eaten++;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }


    bazmanal() {

            if( weatherNum == 0 || weatherNum == 2) {
                if (this.energy >= 30) {
                    mardik.push(new Human(this.x, this.y, 7));
                    this.energy = 10;
                    stats.mardik.bazmacele++;
                }
            }
            else if (weatherNum == 1) {
                if (this.energy >= 33) {
                    mardik.push(new Human(this.x, this.y, 7));
                    this.energy = 10;
                    stats.mardik.bazmacele++;
                }           
            }
            else if (weatherNum == 3) {
                if (this.energy >= 32) {
                    mardik.push(new Human(this.x, this.y, 7));
                    this.energy = 10;
                    stats.mardik.bazmacele++    ;
                }           
            }
        }

    mahanal() { 
        if (weatherNum == 0 || weatherNum == 2) {
            if (this.energy <= -20) {
                matrix[this.y][this.x] = 0;
                for (var i in mardik) {
                    if (this.x == mardik[i].x && this.y == mardik[i].y) {
                        mardik.splice(i, 1);
                        stats.mardik.mahacele++;
                    }
                }
            }
        }
        else if(weatherNum == 1) {
            if (this.energy <= -40) {
                matrix[this.y][this.x] = 0;
                for (var i in mardik) {
                    if (this.x == mardik[i].x && this.y == mardik[i].y) {
                        mardik.splice(i, 1);
                        stats.mardik.mahacele++;
                    }
                }
            }
        }
        else if(weatherNum == 3) {
            if (this.energy <= -35) {
                matrix[this.y][this.x] = 0;
                for (var i in mardik) {
                    if (this.x == mardik[i].x && this.y == mardik[i].y) {
                        mardik.splice(i, 1);
                        stats.mardik.mahacele++;
                    }
                }
            }
        }
    }
}
    