const inputText = document.querySelector('#txt');
const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');

myButton.addEventListener('click', (e)=>{
    // if(inputText.value != ""){
        // e.preventDefault();
    //     // create li
    //     const myLi = document.createElement('li');
    //     myLi.innerHTML = inputText.value;
    //     list.appendChild(myLi);

    //     // create a span
    //     const mySpan = document.createElement('span');
    //     mySpan.innerHTML = 'x';
    //     myLi.appendChild(mySpan);
    // }
    // const close = document.querySelectorAll('span');
    // for(let i=0; i<close.length; i++){
    //     close[i].addEventListener('click', ()=>{
    //         close[i].parentElement.style.opacity = 0;
    //         setTimeout(() => {
                
    //             close[i].parentElement.style.display = "none";
    //             close[i].parentElement.remove();
    //         }, 500);
    //     })
    // }
    // inputText.value = "";
    var employeeName = prompt("What is your employee's name?");
    var employeeProfession = prompt("What does the employee do?");
    var employeeNumber = prompt("What is the new employee's phone number?");

    const myLi = document.createElement('li');
    myLi.innerHTML =
    `
    <h1>${employeeName}</h1>
    <p>${employeeProfession}</p>
    <p>${employeeNumber}</p>
    `;
    list.appendChild(myLi);
});
