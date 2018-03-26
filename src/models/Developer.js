import Employee from "./Employee";
import * as React from "react";

class Developer extends Employee {
    manager;

    constructor(name, age, dateOfBirth, salary, department, manager = null) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }

    updateManager(manager) {
        this.manager = manager;
    }

    deleteManager(manager) {
        this.manager = null;
    }

    displayAllInfo() {
        let manString = 'нет';
        if (this.manager) {
            manString = this.manager.name
        }
        return (
            <p>{this.displayInfo()}; Менеджер: {manString}</p>
        );
    }
}

export default Developer;