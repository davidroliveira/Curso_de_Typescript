class Greeter2<T> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
};

let greeter2 = new Greeter2<string>("Hello world");

let button2 = document.createElement('button');
button2.textContent = "Say Hello";
button2.onclick = function () {
    alert(greeter2.greet());
};

document.body.appendChild(button2);

//console.log('david2');