export {};

let count = 5;
// count = 'a';  We can't do this

let a;
a = 1;
a = true;
a = 'a';

//Type annotations
let b: number;
let c: boolean;
let d: string;
let e: any;
let f: number[] = [1, 2, 3];
let g: any[] = [1, true, 'a', false];


const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;


//enum Color {Red, Green, Blue};
 enum Color {Red=0, Green=1, Blue=2}; // Good practice
let backGroundColor = Color.Red;


let message = 'abc';
let endsWithC = message.endsWith('c');


//We'll loose intellisense if we do this, so we can use type assertions
let message1;
message1 = 'abc';
let message1endsWithC = (<string>message1).endsWith('c');
let alternatively = (message as string).endsWith('c');
