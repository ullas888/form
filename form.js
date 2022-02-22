const submitElement = document.getElementById('submit')
submitElement.addEventListener('click', function () {
    const nameVal = document.getElementById('name').value
  
    const emailVal = document.getElementById('email').value

    const isNameValid = validateName(nameVal)

    const isEmailValid = validateEmail(emailVal)
 

    if (isNameValid && isEmailValid) {
        alert('data valid')
        addRow()
    }
    else {
        alert('invalid data')
    }

})

function validateName(name) {

    let char = /^[a-zA-Z]+$/;
    let num= /[0-9]/g;
    if (name && name.match(char)) {
        console.log(name);
        showNameError(false);
        return true
    }
    else {
        showNameError(true)
        return false;
    }
}

function showNameError(isNameError) {
    const ele = document.getElementById('nameerror')
    if (isNameError) {
        ele.innerText = '*please provide a valid name'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}



function validateEmail(email) {
    let atPosition = email.indexOf("@")
    let dotPosition = email.lastIndexOf(".")
    if (atPosition > 1 && dotPosition > atPosition + 2 && dotPosition + 2 <= email.length) {
        console.log(email);
        showEmailError(false)
        return true
    }
    else {
        showEmailError(true)
        return false
    }
}

function showEmailError(isEmailError) {
    const ele = document.getElementById('emailerror')
    if (isEmailError) {
        ele.innerText = '*please provide a valid email'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }

}




let x=0;
let n=1;

let list1=[];

let list2=[];



function addRow(){
    let addRow = document.getElementById("show")
    
    let newRow = addRow.insertRow(n);

    list1[x]= document.getElementById('name').value
  
    list2[x]= document.getElementById('email').value


    let cel1=newRow.insertCell(0);
 
    let cel2=newRow.insertCell(1);
    



    cel1.innerHTML=list1[x];
 
    cel2.innerHTML=list2[x];
 

    x++
    n++
}