// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep(energy){
        energy += 10;
        }
    doSomethingFun(energy){
        energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10, name, age, anaergy){
        this.xp = xp;
        this.hourlyWage = 10;
    }
    goToWork(xp){
        xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker("Bob", 21, 110, 0, 10);

    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    
}