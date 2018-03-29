import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Developer from "./models/Developer";
import Manager from "./models/Manager";

class App extends Component {
    render() {
        let aleksey = new Manager('Алексей', 30, '12/12/1988', 1000, 'Management');
        let ivan = new Developer('Вася', 25, '08/08/1998', 1000, 'Development');
        let petya = new Developer('Петя', 26, '05/05/1995', 2000, 'Development', aleksey);
        ivan.updateManager(aleksey);

        aleksey.addDeveloper(ivan);
        aleksey.addDeveloper(petya);

        aleksey.removeDeveloper(ivan);
        ivan.deleteManager();

        App.testLoop();
        App.testCalculateArea();

        App.getUsers();
        Promise.all(App.getPromises()).then(users => console.log(users));
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                {aleksey.displayAllInfo()}
                {ivan.displayAllInfo()}
                {petya.displayAllInfo()}
            </div>
        );
    }

    static testLoop() {
        App.loop(5, num => App.coloredConsole(num, 'green'));
        App.loop(0, () => App.coloredConsole(0, 'green'));
        App.loop(5);
    }

    static testCalculateArea() {
        App.coloredConsole(App.calculateArea('triangle', 3, 4, 5));
        App.coloredConsole(App.calculateArea('circle', 3));
        App.coloredConsole(App.calculateArea('rectangle', 3, 4));
    }

    static getUsers() {
        let users = [];
        let count = 0;
        let maxCount = 10;
        let dataGetter = data => {
            count++;
            users.push(data);
            if (count === maxCount) {
                console.log(users);
            }
        };
        const url = "https://jsonplaceholder.typicode.com/users/";
        for (let i = 1; i <= maxCount; i++) {
            fetch(`${url}${i}`)
                .then(response => response.json())
                .then(dataGetter)
        }
    }

    static getPromises() {
        const url = "https://jsonplaceholder.typicode.com/users/";
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => fetch(`${url}${number}`)
            .then(response => response.json()));
    }

    static loop(times = 0, callback = null) {
        if (times !== 0 && typeof callback === "function") {
            for (times; times > 0; times--) {
                callback(times);
            }
        }
    }

    static calculateArea(figure, ...input) {
        let area = 0;
        switch (figure) {
            case 'circle':
                let r = parseInt(input[0], 10);
                area = parseFloat((Math.PI * r * r).toFixed(2));
                break;
            case 'triangle': {
                let [a, b, c] = input.map(item => parseInt(item, 10));
                let p = (a + b + c) / 2;
                area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            }
                break;
            case 'square':
            case 'rectangle':
            default: {
                let [a, b] = input.map(item => parseInt(item, 10));
                area = a * b;
            }
        }
        return {
            area: area,
            figure: figure,
            input: input
        };
    }

    static coloredConsole(element, color = 'red') {
        if (typeof element === 'object') {
            console.log(element);
        } else {
            console.log(`%c ${element}`, `color: ${color}`)
        }
    }
}

export default App;
