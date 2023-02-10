var employees = [];

const addEmployee = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let employee = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        position: document.getElementById('position').value,
        phone: document.getElementById('phoneNumber').value,

};

employees.push(employee);
document.forms[0].reset(); // to clear the form for the next entry

console.warn('added' , {employees} );
let pre = document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(employees, '\t', 5);

//saving to localStorage
localStorage.setItem('MyEmployeeList', JSON.stringify(employees) );
};

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submit').addEventListener('click', addEmployee);
});


//  Andabamos viendo este video: https://www.youtube.com/watch?v=NxVCq4p0Kb0 pa guiarnos con este nuevo proyecto para guardar los elementos en el local Storage