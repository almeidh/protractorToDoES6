import * as ptor from './node_modules/protractor'
export default class Page {
    constructor() {
        this.toDoInput = ptor.element(ptor.by.model('todoList.todoText'));
        this.addButton = ptor.element(ptor.by.css('[value="add"]'));
        this.toDoList = ptor.element.all(ptor.by.repeater('todo in todoList.todos'));
        this.completedAmount = ptor.element.all(ptor.by.css('.done-true'));
    }
    goTo(url) {
        ptor.browser.get(url);
    }
    addToDo() {
        this.toDoInput.sendKeys('write first protractor test');
        this.addButton.click();
    }
    verifyToDo() {
        expect(this.toDoList.count()).toEqual(3);
        expect(this.toDoList.get(2).getText()).toEqual('write first protractor test');
    }
    crossToDo() {
        ptor.element.all(ptor.by.repeater('todo in todoList.todos')).get(2).$('input').click();
        expect(this.completedAmount.count()).toEqual(2);
    }
}