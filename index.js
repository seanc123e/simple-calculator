window.addEventListener('DOMContentLoaded', (event) => {
    const addBtn = document.getElementById('add')
    const subtractBtn = document.getElementById('subtract')
    const multiplyBtn = document.getElementById('multiply')
    const divideBtn = document.getElementById('divide')

    addBtn.addEventListener('click', function(){
        const numArr = getValue()
        const answerData = add(numArr[0], numArr[1]);
        addToAnswerDiv(answerData);
    })

    subtractBtn.addEventListener('click', function(){
        const numArr = getValue()
        const answerData = subtract(numArr[0], numArr[1]);
        addToAnswerDiv(answerData)
    })

    multiplyBtn.addEventListener('click', function(){
        const numArr = getValue()
        const answerData = multiply(numArr[0], numArr[1]);
        addToAnswerDiv(answerData);
    })

    divideBtn.addEventListener('click', function(){
        const numArr = getValue()
        const answerData = divide(numArr[0], numArr[1]);
        addToAnswerDiv(answerData)
    })

    function add(a, b){
        return a + b;
    }

    function subtract(a, b){
        return a - b;
    }

    function multiply(a, b){
        return a * b;
    }

    function divide(a, b){
        return a / b;
    }

    function getValue(){
        const num1 = parseInt(document.getElementById('number1').value)
        const num2 = parseInt(document.getElementById('number2').value)
        return [num1, num2]
    }

    function addToAnswerDiv(data){
        const answerDiv = document.getElementById('answer')
        answerDiv.innerHTML = data;
    }
})