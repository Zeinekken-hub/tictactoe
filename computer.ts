
class ComputerEasy extends Computer {

    move(field: Field): Field {
        const empties: Point[] = field.getEmpties();
        let randCell: Point = empties[this.getRandomIndex(0, empties.length-1)];
        field.set(randCell.x, randCell.y, this.type)
        return field;
    }

    private getRandomIndex(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}

class ComputerMedium implements IEnemy {
    move(field: Field): Field {
        throw new Error("Method not implemented.");
    }

}

class ComputerHard implements IEnemy {
    move(field: Field): Field {
        throw new Error("Method not implemented.");
    }

}