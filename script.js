const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');

myButton.addEventListener('click', (e)=>{

    var employeeName = prompt("What is your employee's name?");
    var employeeProfession = prompt("What does the employee do?");
    var employeeNumber = prompt("What is the new employee's phone number?");

    const myLi = document.createElement('li');
    myLi.innerHTML =
    `
    <h1>${employeeName}</h1>
    <p>${employeeProfession}</p>
    <div class="phone">
    <p><a href="tel: ${employeeNumber}" class="no-decoration">${employeeNumber}</a></p>
    </div>
    `;
    list.appendChild(myLi);

    // localStorage.setItem('employee', JSON.stringify(myLi.value));
    // console.log(localStorage);
    // JSON.parse(localStorage.getItem('employee'));

    // localStorage.clear();

    //  I feel like I can make this work

    let myLi_serialized = JSON.stringify(myLi);
    console.log(myLi_serialized);



});


// var contHistEl = $('.container');
// function renderHistory() {
//     contHistEl.empty();

//     for (let i = 0; i < employee.length; i++) {
//         var key = localStorage.key(i);
//         var value = localStorage.getItem(key);
//         var li = $('<li>');
//         li.text(value);
//         contHistEl.append(li);
//     }
// };

// renderHistory();
