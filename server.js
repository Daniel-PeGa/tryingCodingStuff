var employeeName = prompt("What is the new employee's name?");
var employeeProfession = prompt("What does the employee do?");
var employeeNumber = prompt("What is the new employee's phone number?");
var employeeAdress = prompt("What is the new employee's address?");

var generateBtn = document.querySelector('#generate');

function addEmployee() {
    var employee = generateEmployee();
    var employeeInfo = document.querySelector('.container ul');

    employeeInfo.value = employee;
}

generateBtn.addEventListener("click", addEmployee);

function generateEmployee() {
    var employeeName = prompt("What is the new employee's name?");
    var employeeProfession = prompt("What does the employee do?");
    var employeeNumber = prompt("What is the new employee's phone number?");
    var employeeAdress = prompt("What is the new employee's address?");

    
}