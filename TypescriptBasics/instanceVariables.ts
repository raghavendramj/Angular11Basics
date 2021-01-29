
class Point {
    public x: number;
    public y: number;

    constructor(x: number, y:number ){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: '+this.x + ' Y: '+ this.y);
    }
}

let pointObj1 = new Point(10, 20);
pointObj1.draw();

//------------------------------------------------------

class Point_02 {
    constructor(public x: number, public y:number ){   
    }

    draw() {
        console.log('X: '+this.x + ' Y: '+ this.y);
    }
}

let point = new Point_02(10, 20);
point.draw();