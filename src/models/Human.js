class Human {
    name;
    age;
    dateOfBirth;

    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = parseInt(age, 10);
        this.dateOfBirth = new Date(dateOfBirth);
    }

    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth.toLocaleString().split(',')[0]}`;
    }
}

export default Human;