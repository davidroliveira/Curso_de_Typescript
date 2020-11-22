function add(num1: number, num2: number, num3?: number): number{
    console.log('num3 é ' + num3);

    if (typeof(num3) == "undefined") {       
        return num1 + num2;
    }

    //No curso ensina assim, mas não rolou!
    //if (isNaN(num3)) {        
    //    return num1 + num2;
    //}   

    return num1 + num2 + num3;   
};

console.log(add(10,20));
