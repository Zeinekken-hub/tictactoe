class Circle extends Cell {
    draw(): string {
        return '<img src="images/circle.png" />';
    }

}

class Empty extends Cell {
    draw(): string {
        return "";
    }

}

class Cross extends Cell {
    draw(): string {
        return '<img src="images/cross.png" />';
    }

}