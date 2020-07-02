(function () {
    let level: string = "easy";
    let player: string = "circle";
    let gameStarted: boolean = false;
    let field = new Field(new Rect(3, 3), new Rect(0, 0));
    let enemy: IEnemy;
    render(field);

    let elems = document.getElementsByClassName("form-you");
    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener("click", function () {
            if (!gameStarted) {
                player = elems[i].getAttribute("value");
            }
        });
    }
    let elems2 = document.getElementsByClassName("form-enemy");
    for (let i = 0; i < elems2.length; i++) {
        elems2[i].addEventListener("click", function () {
            if (!gameStarted) {
                level = elems2[i].getAttribute("value");
            }
        });
    }
    let elems3 = document.getElementsByClassName("h");
    for (let i = 0; i < elems3.length; i++) {
        elems3[i].addEventListener("click", function () {
            // if (!gameStarted) {
            //     gameStarted = true;
            //     field = move(field, player, i);
            //     // field = createEnemy(player, level, field);
            // } else {
            //     field = move(field, player, i);
            // }
            field = move(field, player, i, elems3[i]);
            // render(field);
        });
    }
})();

function getEnemy(level: Enemy, cellType: CellType): IEnemy {
    switch (level) {
        case Enemy.Easy:
            return new ComputerEasy(cellType);
        // case Enemy.Medium:
        //     return new ComputerMedium(cellType);
        // case Enemy.Hard:
        //     return new ComputerHard(cellType);
    }
}

function move(field:Field, player:string, cellNum: number, elem: Element): Field {
    let i: number = parseInt((cellNum/3).toFixed(0));
    let j: number = parseInt((cellNum%3).toFixed(0));
    console.log("cell num: [", i, ",", j, "]\n");
    switch(player) {
        case "cross":
            field.set(i, j, CellType.Cross);
            elem.innerHTML += field.get(i, j).draw();
            return field;
        case "circle":
            field.set(i, j, CellType.Circle);
            elem.innerHTML += field.get(i, j).draw();
            return field;
    }
}

function createEnemy(player: string, enemy: string, field: Field): Field {
    let eng = new Engine3x3(field);
    let enem: IEnemy;

    if (player == "circle") {
        enem = getEnemy(Enemy[enemy], CellType.Cross);
        eng.field = enem.move(eng.field);
    } else {
        enem = getEnemy(Enemy[enemy], CellType.Circle);
    }
    return field;
}

function render(field: Field) {
    let size: Rect = field.getSize();
    let loader = document.getElementById("loader");
    for (let i = 0; i < size.height; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < size.width; j++) {
            row.innerHTML += '<div class="col-4 border border-danger h">';
            row.innerHTML += field.get(i, j).draw();
            row.innerHTML += '</div>';
        }
        loader.append(row);
    }
    loader.innerHTML += '<button class="btn btn-primary mt-2">Restart</button>';
}