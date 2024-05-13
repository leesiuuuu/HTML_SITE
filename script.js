const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const imgElement = document.getElementById("img");
var input = document.getElementById("user-id");
const NewID = "NewID";
const NewPwd = "NewPwd";

var input1 = document.getElementById("password");
var wrongtime = 0;
var wrongtime1 = 0;

loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    let newid = localStorage.getItem(NewID);
    let newpwd = localStorage.getItem(NewPwd);
    const username = document.getElementById("user-id").value;
    const password = document.getElementById("password").value;

    if (username === newid && password === newpwd) {
        imgElement.src = "img/Loginsucceed.png";
        input.value = null;
        input1.value = null;
        window.localStorage.setItem('User', localStorage.getItem(NewID));
        window.localStorage.removeItem('NewID');
        window.localStorage.setItem('Userpwd', localStorage.getItem(NewPwd));
        window.localStorage.removeItem('NewPwd');
        setTimeout(function() {
            window.location.replace('main.html'); // 올바른 사용법
        }, 1500);
    } else {
        
        if(wrongtime >= 5 && wrongtime1 == 0)
        {
            imgElement.src = "img/wtf.png";
            input.value = null;
            input1.value = null;
            wrongtime1++;
        }

        else if(wrongtime >= 10 && wrongtime1 == 1)
        {
            imgElement.src = "img/wwttff.png";
            input.value = null;
            input1.value = null;
            wrongtime = 0;
            wrongtime1 = 0;
        }
        else
        {
            imgElement.src = "img/whoareyou.png";
            input1.value = null;
            input.value = null;
            wrongtime++;
        }
            setTimeout(function() {
            imgElement.src = "img/Test_image.png";
            }, 3000);
        
    }
});





