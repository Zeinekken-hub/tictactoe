interface IEnemy {
    move(field: Field) :Field
}

class Point {
    x: number
    y: number

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

abstract class Cell {
    state: CellType = CellType.Empty
    color: string
    point: Point

    constructor(x: number, y: number) {
        this.point = new Point(x, y);
    }

    abstract draw(): string
}


interface ITicTacToe {
    field: Field
}

interface IGame {
    start(engine: IEngine): void
}

abstract class Computer implements IEnemy {
    abstract move(field: Field): Field;

    protected type: CellType;
    
    constructor (type: CellType) {
        this.type = type;
    } 
}

class Rect {
    height: number
    width: number

    constructor(h: number, w: number) {
        this.height = h;
        this.width = w;
    }
}

interface IEngine {
    iteration(): Result;
}