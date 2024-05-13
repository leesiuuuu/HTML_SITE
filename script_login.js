const signinButton = document.getElementById("sign-up-button");
const loginErrorMsg = document.getElementById("login-error-msg");
const imgElement = document.getElementById("img");

signinButton.addEventListener("click", (event) => {
    event.preventDefault();

    let newid = document.getElementById("new-user-id").value;
    let newpwd = document.getElementById("new-password").value;
    let newpwdre = document.getElementById("new-password-re").value;
    
    
    if (newpwd !== newpwdre) {
        imgElement.src = "img/passwordwrong.png";
        setTimeout(function() {
            imgElement.src = "img/Signpu.png";
        }, 3000);
    }
    else if(newid.value === null || newpwd.id === null || newpwdre === null){
        imgElement.src = "img/write.png";
        setTimeout(function() {
            imgElement.src = "img/Signpu.png";
        }, 3000);
    }
    localStorage.setItem("NewID", newid);
    localStorage.setItem("NewPwd", newpwd);
});

