const names = document.getElementById('name')
const Username = document.getElementById('Username')
const nameemail = document.getElementById('nameemail')
const password = document.getElementById('password')
const eyeShow = document.querySelector('.fa-eye')
const eyeHidden = document.querySelector('.fa-eye-slash')
const checkbox = document.getElementById('checkbox')
const outPut = document.getElementsByClassName('outPut')[0]
const outPutuse = document.getElementsByClassName('outPut')[1]
const outPutEmail = document.getElementsByClassName('outPut')[2]
const outPutPassword = document.getElementsByClassName('outPut')[3]
const check = document.getElementById('check')
const submit = document.getElementById('submit')
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
eyeShow.addEventListener("click", function () {
    eyeShow.classList.add('hidden')
    eyeHidden.classList.remove('hidden')
    password.setAttribute('type', 'text')
})
eyeHidden.addEventListener("click", function () {
    eyeHidden.classList.add('hidden')
    eyeShow.classList.remove('hidden')
    password.setAttribute('type', 'password')

})
names.onblur = function () {
    if (names.value == "") {
        outPut.innerHTML = "nhập tên"
        names.style.border = '1px solid red'

    } else {
        names.style.border = "1px solid green";
        outPut.innerHTML = ""

    }
}
Username.onblur = function () {
    if (Username.value == '') {
        outPutuse.innerHTML = "nhập tên người dùng";
        Username.style.border = '1px solid red'
    } else {
        Username.style.border = "1px solid green"
        outPutuse.innerHTML = "";
    }
}
nameemail.onblur = function () {
    if (!validateEmail(nameemail.value)) {
        nameemail.style.border = "1px solid red";
        outPutEmail.innerHTML = "nhập đúng tên người dùng or địa chỉ  email";
    } else {
        nameemail.style.border = "1px solid green"
        outPutEmail.innerHTML = "";
    }
}
password.onblur = function () {
    if (password.value.trim() == '' || password.value.length <= 6) {
        password.style.border = "1px solid red";
        outPutPassword.innerHTML = "nhập mật khẩu nhiều hơn 8 chữ "
    } else {
        password.style.border = "1px solid green"
        outPutPassword.innerHTML = "";
    }
}
check.addEventListener("click", function () {
    if (!check.checked) {
        submit.style.cursor = "not-allowed";
        submit.addEventListener('click', function (e) {
            e.preventDefault()
        })
    } else {
        submit.style.cursor = "default"
    }
})





function checkForm() {

    if (names.value.trim() == "") {
        names.style.border = "1px solid red"
        names.focus();

        return false;
    } else {
        names.style.border = "1px solid green"
    }
    if (Username.value.trim() == '') {
        console.log("check lại ");
        Username.style.border = "1px solid red"
        Username.focus();
        return false;
    } else {
        Username.style.border = "1px solid green"
    }

    if (!validateEmail(nameemail.value.trim())) {
        alert("Please enter correct email ID")
        nameemail.style.border = "1px solid red"
        nameemail.focus();

        return false;
    } else {
        nameemail.style.border = "1px solid green"
    }
    if (Username.value.trim() == "") {
        Username.style.border = "1px solid red"

        Username.focus()
        return false;
    } else {
        Username.style.border = "1px solid green"
    }
    if (password.value.trim() == '' || password.value.length <= 6) {
        password.style.border = "1px solid red"
        password.focus()
        return false;
    } else {
        password.style.border = "1px solid green"
    }

    return (true);
}