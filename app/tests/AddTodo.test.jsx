var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

var AddTodo = require('AddTodo');


describe('AddTodo', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if valid text entered', () => {
        var spy = expect.createSpy();

        var todoText = 'Check mail';

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el =  $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);

    });



    it('should not call onAddTodo if invalid input entered', () => {
        var spy = expect.createSpy();

        var todoText = '';

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el =  $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();

    });


});