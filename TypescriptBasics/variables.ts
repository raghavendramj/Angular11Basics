var number = 1;
// Is present from ES6 onwards
let count = 2;


function doSomeThing(){
    for(var i=0; i<5; i++) { // let is block scoped -> 
        console.log(i);
    }
    console.log('Finally : '+ i); // let for i throws error!
}

doSomeThing();