class Field {
    private size: Rect
    private cellSize: Rect
    private field: Cell[][]

    constructor(fieldSize: Rect, cellSize: Rect) {
        this.size = fieldSize;
        this.cellSize = cellSize;
        this.field = Cell[fieldSize.height][fieldSize.width];
        this.fillWithEmpty();
    }

    private fillWithEmpty(): void {
        for(let i = 0; i < this.size.height; i++) {
            for(let j = 0; j < this.size.width; j++) {
                this.field[i][j] = new Empty(i, j);
            } 
        }
    }

    public set(i:number, j: number, type: CellType) {
        switch(type) {
            case CellType.Circle:
                this.field[i][j] = new Circle(i, j);
                break;
            case CellType.Cross:
                this.field[i][j] = new Cross(i, j);
                break;
        }
    }

    public get(i:number, j:number) :Cell {
        return this.field[i][j];
    }

    public getSize() :Rect {
        return this.size;
    }

    public getRow(i: number): Cell[] {
        return this.field[i];
    }

    public getEmpties(): Point[] {
        const possibleWays :Point[] = [];

        for(let i = 0; i < this.size.height; i++) {
            for(let j = 0; j < this.size.width; j++) {
                let cell: Cell = this.get(i, j);
                if (cell instanceof Empty) {
                    possibleWays.push(cell.point);
                }
            }
        } 
        return possibleWays;
    }
 }