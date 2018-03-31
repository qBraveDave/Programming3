class Grass extends KendaniEak {

    bazmanal() {
        this.multyply++;
        var norVandak = random(this.chooseCell(0));
        if (norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1], 1);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
            stats.grass.bazmacele++;
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
