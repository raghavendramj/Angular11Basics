export {};

class Point {

    // tsc will generate private variable for us in the class
    constructor(private x?: number, private y?:number ){    
    }

    draw() {
        console.log('X: '+this.x + ' Y: '+ this.y);
    }

    getx(){
        return this.x;
    }

    setx(value){
        if(value < 0)
            throw new Error('value cannot be less than 0');
        this.x = value;
    }
}

let point = new Point(10, 20);
point.setx(52);
point.draw();


