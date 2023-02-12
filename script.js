var employees = [];

const addEmployee = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let employee = {
        id: Date.now(),
        name: document.getElementById('name').value,
        position: document.getElementById('position').value,
        phone: document.getElementById('phoneNumber').value,

};

employees.push(employee);
document.forms[0].reset(); // to clear the form for the next entry

console.warn('added' , {employees} );
let pre = document.querySelector('#msg pre');
pre.textContent = JSON.stringify(employees, '\t', 3);

//saving to localStorage
localStorage.setItem('MyEmployeeList', JSON.stringify(employees) );
};

// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('submit').addEventListener('click', addEmployee);
// });

document.getElementById('msg').innerHTML = localStorage.getItem('MyEmployeeList');


//  Andabamos viendo este video: https://www.youtube.com/watch?v=NxVCq4p0Kb0 pa guiarnos con este nuevo proyecto para guardar los elementos en el local Storage



