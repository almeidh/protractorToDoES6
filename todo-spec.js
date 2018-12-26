import Page from './page';

let page = new Page();

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    page.goTo('https://angularjs.org');
    page.addToDo();
    page.verifyToDo();
    page.crossToDo();
  });
});