
class Engine3x3 implements IEngine {
    field: Field;

    constructor(field: Field) {
        this.field = field;
    }

    private o: string = JSON.stringify([CellType.Circle, CellType.Circle, CellType.Circle]);
    private x: string = JSON.stringify([CellType.Cross, CellType.Cross, CellType.Cross]);

    iteration(): Result {
        let cntx = 0;
        let cnto = 0;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field.get(i, j).state == CellType.Cross) cntx++;
                if (this.field.get(i, j).state == CellType.Circle) cnto++;
            }
        }

        if (cntx - cnto > 1 || cntx - cnto < 0) return Result.Unknown;

        let c1: any = [];
        let c2: any = [];
        let c3: any = [];
        let d1: any = [];
        let d2: any = [];

        // c1
        c1.push(this.field.get(0, 0).state);
        c1.push(this.field.get(1, 0).state);
        c1.push(this.field.get(2, 0).state);

        //c2
        c1.push(this.field.get(0, 1).state);
        c1.push(this.field.get(1, 1).state);
        c1.push(this.field.get(2, 1).state);

        //c3
        c1.push(this.field.get(0, 2).state);
        c1.push(this.field.get(1, 2).state);
        c1.push(this.field.get(2, 2).state);

        //d1
        c1.push(this.field.get(0, 0).state);
        c1.push(this.field.get(1, 1).state);
        c1.push(this.field.get(2, 2).state);

        //d2
        c1.push(this.field.get(2, 0).state);
        c1.push(this.field.get(1, 1).state);
        c1.push(this.field.get(0, 2).state);

        c1 = JSON.stringify(c1);
        c2 = JSON.stringify(c2);
        c3 = JSON.stringify(c3);
        d1 = JSON.stringify(d1);
        d2 = JSON.stringify(d2);
        let v1 = JSON.stringify(this.field.getRow(0));
        let v2 = JSON.stringify(this.field.getRow(1));
        let v3 = JSON.stringify(this.field.getRow(2));

        if (cntx == cnto) {
            if (c1 == this.o ||
                c2 == this.o ||
                c3 == this.o ||
                d1 == this.o ||
                d2 == this.o ||
                v1 == this.o ||
                v2 == this.o ||
                v3 == this.o) {
                return Result.WinO;
            }
        }

        if (c1 == this.x ||
            c2 == this.x ||
            c3 == this.x ||
            d1 == this.x ||
            d2 == this.x ||
            v1 == this.x ||
            v2 == this.x ||
            v3 == this.x) {
            return Result.WinX;
        }

        return Result.Draw;
    }

}