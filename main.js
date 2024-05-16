if (localStorage.getItem("point") == 0) {
    window.localStorage.setItem("point", 20000); // 포인트가 없을 경우에만 초기화
}

//신 찬양 수 확인 함
function GodBlessing() {
    let count = parseInt(window.localStorage.getItem('BlessingCount') || '1');
    const tmp = document.getElementById("tmp");
    tmp.innerText = `당신은 ${count}번 버튼을 눌렀습니다!`;
    ++count;
    window.localStorage.setItem('BlessingCount', count.toString());
}

//로그아웃 함수
function LOGOUT() {
    window.localStorage.setItem('NewID', localStorage.getItem('User'));
    window.localStorage.setItem('NewPwd', localStorage.getItem('Userpwd'));
    window.location.replace('index1.html');
}

let text = document.getElementById("textspace");
let point = parseInt(window.localStorage.getItem('point'));

//COIN 값을 주기적으로 바꿔주는 함수
function gamblebasic() {
    let gamble = document.getElementById("point");
    let point = parseInt(window.localStorage.getItem('point')); // point 값을 가져옴]

    gamble.innerText = `${point} COIN`; // 표시되어야 할 값을 설정
    setTimeout(() => {    
        document.getElementById("back").disabled = false;
        document.getElementById("front").disabled = false;
        gifimg.addEventListener("click", clickFunction);
    }, 1700);
}


// HTML이 완전히 로드된 후에 코드 실행
window.onload = function() {
    randomBet();
};

//앞뒷면 알려주고 출력하는 함수
function randomSum() {
    // 0 또는 1 중 하나의 무작위 정수를 생성
    let randomNumber = Math.floor(Math.random() * 2);
    // 생성된 무작위 정수를 문자열로 변환하여 로컬 스토리지에 저장
    window.localStorage.setItem("Sum", randomNumber.toString());
}
//베팅 결과 함수
function randomBet(betAmount) {
    const button1 = document.getElementById("front");
    const button2 = document.getElementById("back");
    const GamblerImage = document.getElementById("gambler"); //이미지
    var sumValue = localStorage.getItem("Sum"); //렌덤 값 받아옴
    var pointValue = parseInt(localStorage.getItem("point")); //총 코인출력
    let message = document.getElementById("wrong");
    let loading = document.getElementById("loading");
    let sum = document.getElementById("sum"); //맞았는지 틀렸는지 출력해주는 태그
    GamblerImage.src = "img/gambler.png";
    sum.className = "";
    loading.className = "";
    button1.disabled = true;
    button2.disabled = true;

    if (betAmount <= 0 || !betAmount) {
        GamblerImage.src = "img/gambler_wrong.png";
        message.className = "animation_move";
        message.innerText = "값이 잘못됐습니다!"
        console.log("값이 잘못됐습니다.");
        setTimeout(function() {
            GamblerImage.src = "img/gambler.png";
            message.className = "";
            document.getElementById("back").disabled = false;
            document.getElementById("front").disabled = false;
        }, 3000);
    }
    else if(betAmount > pointValue){
        console.log("포인트가 부족합니다.");
        GamblerImage.src = "img/gambler_money.png";
        setTimeout(function() {
            GamblerImage.src = "img/gambler.png";
        }, 3000);
    }
    else {
        GamblerImage.src = "img/gambler_finger.gif";
        loading.innerText = "결과는...?"
        loading.className = "animation_loading";
        setTimeout(function() {
            loading.innerText = "";
            if (betAmount <= pointValue && pointValue > 0) {
                if (sumValue === "1") {
                    // 베팅 금액의 두 배를 "point" 값에 추가
                    pointValue += betAmount;
                    console.log("이겼습니다! 현재 포인트: " + pointValue);
                    sum.innerText = "이겼습니다!";
                    sum.className = "animation_answer";
                    GamblerImage.src = "img/gambler_success.png";
                    window.localStorage.setItem("point", pointValue);
                    gamblebasic(); // 결과를 표시하는 함수 호출
                } else if (sumValue === "0") {
                    // "Sum" 키의 값이 1이 아니면 베팅 금액을 잃음
                    pointValue -= betAmount;
                    console.log("졌습니다... 현재 포인트: " + pointValue);
                    sum.innerText = "졌습니다...";
                    sum.className = "animation_answer";
                    GamblerImage.src = "img/gambler_fail.png";
                    window.localStorage.setItem("point", pointValue);
                    gamblebasic(); // 결과를 표시하는 함수 호출
                }
            }
            setTimeout(function() {
                GamblerImage.src = "img/gambler.png";
                sum.innerText = "";
                loading.className = "";
                button1.disabled = false;
                button2.disabled = false;
                gamblebasic();
            }, 2000);
        }, 2000);
    }
}


//랜덤 출력하는 함수1
function getRandomInt1(max) {
    return Math.floor(Math.random() * max);
}
//2
function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
}
//3
function getRandomInt3(max) {
    return Math.floor(Math.random() * max);
}



//잭팟 룰렛 판별, 실행 함수
function startRoulette() {   
    const gifimg = document.querySelector("#gifimg"); // 레버
    console.log("함수 실행됨!");
    let slot1 = document.getElementById("1").style;
    let slot2 = document.getElementById("2").style;
    let slot3 = document.getElementById("3").style;
    let sum1 = getRandomInt1(10);
    let sum2 = getRandomInt2(10);
    let sum3 = getRandomInt3(10);
    let money = parseInt(document.getElementById("battype").value); //입력칸
    let PointValue = parseInt(localStorage.getItem("point")|| 0) ; //총 코인
    const jackpot = document.getElementById("jacker"); //케릭터 이미지
    const slotPos = [0, -73, -150, -230, -321, -404, -488, -580, -667, -760];
    localStorage.setItem("slotPos", JSON.stringify(slotPos));
    
    gifimg.removeEventListener("click", clickFunction);

    setTimeout(() => {
        setTimeout(function() {document.getElementById("c").style.display = "none"; 
        slot3.transition = "top 800ms cubic-bezier(.47,1.64,.41,.8)";
        slot3.top = slotPos[sum3] + "px";
        }, 700); 
        setTimeout(function() {document.getElementById("b").style.display = "none"; 
        slot2.transition = "top 800ms cubic-bezier(.47,1.64,.41,.8)";
        slot2.top = slotPos[sum2] + "px";
    }, 300); 
        setTimeout(function() {document.getElementById("a").style.display = "none"; 
        slot1.transition = "top 800ms cubic-bezier(.47,1.64,.41,.8)";
        slot1.top = slotPos[sum1] + "px";
    }, 0); 
    }, 2000);
        
    setTimeout(() => {
        if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === 0) { //0이었을 때
            PointValue -= money + (money * 0.5);
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_fail.png";//절망하는 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -580+ "px"){ //777 터졌을 때
            PointValue += money * 777;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_perfect.png";//대성공 그림
            window.localStorage.setItem("point", PointValue);
            //대박 터져서 기뻐하는 그림 추가
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -73 + "px") { //1 터졌을 때
            PointValue += money * 11;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -150+ "px") { //2 터졌을 때
            PointValue += money * 22;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -230+ "px") { //3 터졌을 때
            PointValue += money * 33;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -321+ "px") { //4 터졌을 때
            PointValue += money * 44;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -404+ "px") { //5 터졌을 때
            PointValue += money * 55;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -488+ "px") { //6 터졌을 때
            PointValue += money * 66;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -667+ "px") { //8 터졌을 때
            PointValue += money * 24;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot2.top === slot3.top && slot3.top === -760 + "px") { //9 터졌을 때
            PointValue += money * 50;
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_succeed.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot1.top === slot2.top && slot1.top !== 0 + "px" && slot2.top !== 0 + "px") { //앞쪽 2개 터졌을 때
            PointValue += money * (sum1 / 10);
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_middle.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        } else if (slot2.top === slot3.top && slot2.top !== 0 + "px" && slot3.top !== 0 + "px") { //뒤쪽 2개 터졌을 때
            PointValue += money * (sum3 / 10);
            jackpot.className = "animation_bounce2";
            jackpot.src = "img/gambler_jackpot_middle.png";//성공 축하 그림
            window.localStorage.setItem("point", PointValue);
        }              
        else {
            PointValue -= money;
            jackpot.src = "img/gambler_jackpot_failed.png";  //슬퍼하는 그림          
            jackpot.className = "animation_bounce2";
            window.localStorage.setItem("point", PointValue);
        }
        setTimeout(() => {
            jackpot.className = "animation_bounce3";
            jackpot.src = "img/gambler_jackpot.png";
        }, 1500);
        gamblebasic();
    }, 3300);
}


//점수 : 10340960

    