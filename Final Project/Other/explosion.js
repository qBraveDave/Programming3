// class Explosion {
// constructor(x, y, timeout) {
//     this.x = x;
//     this.y = y;
//     this.timeout = timeout;
// }
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
//      chooseCell(ch) {
//             var found = [];
//             this.stanalNorKordinatner();
//             for (var i in this.directions) {
//                 var x = this.directions[i][0];
//                 var y = this.directions[i][1];
//                 if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                     if (matrix[y][x] == ch) {
//                         found.push(this.directions[i]);
//                     }
//                 }
//             }
//             return found;
//         }

//      explode() {
//         var randomCharacter = Math.floor(Math.random() * 5);
//         var victim = chooseCell(randomCharacter);

//         if (victim) {
//             matrix[victim[1]][victim[0]] = 9;
//             this.y = victim[1];
//             this.x = victim[0];

//             for (var i in victim) {
//                 if (victim[i].x == this.x && victim[i].y == this.y) {
//                     matrix.splice(i, 1);
//                 }
//             }
//         }
//     }
// }


