function addNumTyped(num1: number, num2:number): number{
    return num1 + num2;
};

function addNums(num1: any, num2: number){
    if (typeof(num1) == "string") {
        if (isNaN(parseInt(num1,10))) {
            return 0;
        }
        num1 = parseInt(num1,10);
    }
    return num1 + num2;
    
}

console.log(addNumTyped(10,20));
console.log(addNums('10',20));