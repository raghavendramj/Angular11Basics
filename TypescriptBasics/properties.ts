class Point {

    // tsc will generate private variable for us in the class
    constructor(private _x?: number, private _y?:number ){    
    }

    get x(){
        return this.x;
    }

    
    set x(value){
        if(value < 0)
            throw new Error('value cannot be less than 0');
        this._x = value;
    }
    
    get y(){
        return this._y;
    }

    set y(value){
        if(value < 0)
            throw new Error('value cannot be less than 0');
        this._y = value;
    }


    draw() {
        console.log('X: '+this._x + ' Y: '+ this._y);
    }
}

let point = new Point(10, 20);
point.draw();

point.x = 140;
point.y = 234;
point.draw();




