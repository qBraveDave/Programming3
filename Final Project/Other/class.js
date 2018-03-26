/*class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multyply = 0;
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
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multyply++;
        var norVandak = random(this.chooseCell(0));
        if (this.multyply >= 3 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1], 1);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
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

}
*/
/*
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    chooseCell(ch) {
        var found = [];
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

   
}
*/
/*class Gishatich {
    constructor(x, y) {
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
        if (this.energy >= 18) {
            gishatichner.push(new Gishatich(this.x, this.y, 3));
            this.energy = 10;
        }
    }
    mahanal() {
        if (this.energy <= -35) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichner) {
                if (this.x == gishatichner[i].x && this.y == gishatichner[i].y) {
                    gishatichner.splice(i, 1)
                }
            }
        }
    }
}
*/
// class Mah {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.energy = 10;
//         this.directions = [];
//         this.index = 2;
//     }

//     chooseCell() {
//         var found = [];
//         this.stanalNorKordinatner();
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 found.push(this.directions[i]);
//             }
//         }
//         return found;
//     }

//     stanalNorKordinatner() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     sharjvel() {
//         this.stanalNorKordinatner();
//         var voidCells = this.chooseCell();
//         var newCell = random(voidCells);
//         this.energy++;
//         if (newCell) {
//             matrix[this.y][this.x] = 0;
//             matrix[newCell[1]][newCell[0]] = 6;
//             this.x = newCell[0];
//             this.y = newCell[1];
//         }
//     }

//     utelXotaker() {
//         this.stanalNorKordinatner();
//         var voidCells = this.chooseCell(2);
//         var newCell = random(voidCells);
//         if (newCell) {
//             matrix[this.y][this.x] = 0;
//             matrix[newCell[1]][newCell[0]] = 6;
//             this.y = newCell[1];
//             this.x = newCell[0];
//             for (var i in xotakerner) {
//                 if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
//                     xotakerner.splice(i, 1);
//                 }
//             }
//         }

//         else {
//             this.sharjvel();
//         }
//     }
//     utelGishatich() {
//         this.stanalNorKordinatner();
//         var voidCells = this.chooseCell(3);
//         var newCell = random(voidCells);
//         if (newCell) {
//             matrix[this.y][this.x] = 0;
//             matrix[newCell[1]][newCell[0]] = 6;
//             this.y = newCell[1];
//             this.x = newCell[0];
//             for (var i in gishatichner) {
//                 if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
//                     gishatichner.splice(i, 1);
//                 }
//             }
//         }
//     }
// }   