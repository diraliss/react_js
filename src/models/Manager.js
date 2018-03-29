import Employee from "./Employee";
import * as React from "react";

class Manager extends Employee {
    developers;

    constructor(name, age, dateOfBirth, salary, department, developers = []) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = developers;
    }

    addDeveloper(developer) {
        this.developers.push(developer);
    }

    removeDeveloper(developer) {
        this.developers = this.developers.filter(function (item) {
            return item !== developer;
        });
    }

    displayAllInfo() {
        let devString = this.developers.map(function (item) {
            return item.name;
        }).join(', ');
        return (
            <p>{this.displayInfo()}; Разработчики: {devString === '' ? 'нет' : devString}</p>
        );
    }
}

export default Manager;