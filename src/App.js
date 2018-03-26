import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Developer from "./models/Developer";
import Manager from "./models/Manager";

class App extends Component {
    render() {
        let man = new Manager('Алексей', 30, '12/12/1988', 1000, 'Management');
        let dev0 = new Developer('Вася', 25, '08/08/1998', 1000, 'Development');
        let dev1 = new Developer('Петя', 26, '05/05/1995', 2000, 'Development', man);
        dev0.updateManager(man);

        man.addDeveloper(dev0);
        man.addDeveloper(dev1);

        man.removeDeveloper(dev0);
        dev0.deleteManager();

        App.loop(5, function (num) {
            console.log(num);
        });

        App.loop(0, function () {
            console.log(0);
        });

        App.loop(5);

        console.log(App.calculateArea('triangle', 3, 4, 5));
        console.log(App.calculateArea('circle', 3));
        console.log(App.calculateArea('rectangle', 3, 4));
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                {man.displayAllInfo()}
                {dev0.displayAllInfo()}
                {dev1.displayAllInfo()}
            </div>
        );
    }

    static loop(times = 0, callback = null) {
        if (times !== 0 && callback != null) {
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
                area = (Math.PI * r * r).toFixed(2);
                break;
            case 'triangle': {
                let a = parseInt(input[0], 10);
                let b = parseInt(input[1], 10);
                let c = parseInt(input[2], 10);
                let p = (a + b + c) / 2;
                area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            }
                break;
            case 'square':
            case 'rectangle':
            default: {
                let a = parseInt(input[0], 10);
                let b = parseInt(input[1], 10);
                area = a * b;
            }
        }
        return {
            area: area,
            figure: figure,
            input: input
        };
    }
}

export default App;
