class Animal {

    constructor(name,colour) {
        this.name = name;
        this.colour = colour;
    }

        speak(){
            console.log(`Hi I'm ${this.name} the ${this.name}`);
        }
}




class Lion extends Animal {

    constructor(name,colour){
        super(name,colour);
    }


}

var lion = new Lion("Leroy","golden");

console.log(lion);
lion.speak();

