export {};

//let drawPoint = (x, y) => {  // always pass an object.
// let drawPoint = (point: {x:number, y:number}) => { // inline annotation..


// interface Point {
//     x: number,
//     y: number
// }

// let drawPoint = (point: Point) => {
//     //...
// }

// drawPoint({
//     x: 1,
//     y: 2
// });



class Point {
    x: number;
    y: number;

    draw() {
        //...
    }

    getDistance(another: Point){
        //...
    }
}

