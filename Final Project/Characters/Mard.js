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
                }
            }
            this.energy += 2;
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
            this.energy += 2;
            this.bazmanal();
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }


    bazmanal() {

            if( weatherNum == 0) {
                console.log("pornik")
                if (this.energy >= 18) {
                    mardik.push(new Human(this.x, this.y, 7));
                    console.log("Nor Mard")
                    this.energy = 10;
                }
            }
            else if(weatherNum == 2) {
                console.log("pornik")
                if (this.energy >= 18) {
                    mardik.push(new Human(this.x, this.y, 7));
                    console.log("Nor Mard")
                    this.energy = 10;
                }
            }
            else if (weatherNum == 1) {
                if (this.energy >= 19) {
                    mardik.push(new Human(this.x, this.y, 7));
                    this.energy = 10;
                }           
            }
            else if (weatherNum == 3) {
                if (this.energy >= 19) {
                    mardik.push(new Human(this.x, this.y, 7));
                    this.energy = 10;
                }           
            }
        }

    mahanal() { 
        if (weatherNum == 0 && weatherNum == 2) {
            if (this.energy <= 0) {
                matrix[this.y][this.x] = 0;
                for (var i in mardik) {
                    if (this.x == mardik[i].x && this.y == mardik[i].y) {
                        mardik.splice(i, 1)
                    }
                }
            }
        }
        else if(weatherNum == 1 && weatherNum == 3) {
            if (this.energy <= -10) {
                matrix[this.y][this.x] = 0;
                for (var i in mardik) {
                    if (this.x == mardik[i].x && this.y == mardik[i].y) {
                        mardik.splice(i, 1)
                    }
                }
            }
        }
    }
}
    