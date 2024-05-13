function signUpAndRedirect() {
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    let newPassword = document.getElementById("new-password").value;
    let newPasswordRe = document.getElementById("new-password-re").value;
    let newid = document.getElementById("new-user-id").value;

    if (newPassword !== newPasswordRe) {
        // 비밀번호와 비밀번호 확인이 일치하지 않으면 이미지 변경
        document.getElementById("img").src = "img/passwordwrong.png";
        return;
    } else if(newPassword === "" || newid === "" || newPasswordRe === "") {
        // 입력 필드가 비어있으면 이미지 변경
        document.getElementById("img").src = "img/write.png";
        return;
    } else {
        // 정상적인 경우
        document.getElementById("img").src = "img/newvisitor.png";
        window.localStorage.setItem('User', newid);
        window.localStorage.setItem('Userpwd', newPassword);
    }

    // 1.5초 후에 index.html로 이동
    setTimeout(function() {
        window.location.replace('index1.html'); 
    }, 1500); 
}
