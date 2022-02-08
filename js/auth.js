var naverLogin = new naver.LoginWithNaverId(
    {   //내 애플리케이션 정보에 cliendId를 입력해줍니다.
        clientId: "3jFZeNxrrMHbkJp7hpRk", 
        // 내 애플리케이션 API설정의 Callback URL 을 입력해줍니다.
        callbackUrl: "http://127.0.0.1:8887/", 
        isPopup: false,
        callbackHandle: true
    }
);	

function timegreeting(){
    const date = new Date();
    const hour = parseInt(date.getHours());
    if (hour >= 4 && hour <12) {
        return 'Good Morning';
    } else if (18 > hour && hour >= 12 ) {
        return 'Good Afternoon';
    } else return 'Good night';}

naverLogin.init();

window.addEventListener('load', function () {
naverLogin.getLoginStatus(function (status) {
    if (status) {
        // 로그인 성공 후 함수
        var firstgreeting = document.querySelector('#firstgreeting');
        firstgreeting.classList.add('hidden');
        var secondgreeting = document.querySelector('#secondgreeting');
        secondgreeting.classList.remove('hidden');
        var loginbtns = document.querySelector('#login');
        loginbtns.classList.add('hidden');
        

        var greetings = timegreeting();
        var name = naverLogin.user.getName().substr(1,5);
        secondgreeting.innerText = `${greetings}, ${name}`;
        
        if( name == undefined || name == null) {
            alert("이름은 필수정보입니다. 정보제공을 동의해주세요.");
            naverLogin.reprompt();
            return;
        }

    } else {
        console.log("callback 처리에 실패하였습니다.");
    }
});
});


// 로그아웃 상태 시
if (naverLogin.loginStatus !== false){
    var secondgreeting = document.querySelector('#secondgreeting');
    secondgreeting.classList.add('hidden');
    var loginbtns = document.querySelector('#login');
    loginbtns.classList.remove('hidden');
}


Kakao.init('296c26f277d4737248ae17d24ad2e52b'); 
//발급받은 키 중 javascript키를 사용해준다.
console.log(Kakao.isInitialized()); 
// sdk초기화여부판단

//카카오로그인
function kakaoLogin() {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            // 로그인 성공시 함수  
            var firstgreeting = document.querySelector('#firstgreeting');
            firstgreeting.classList.add('hidden');
            var secondgreeting = document.querySelector('#secondgreeting');
            secondgreeting.classList.remove('hidden');
            var loginbtns = document.querySelector('#login');
            loginbtns.classList.add('hidden');
    
            var greetings = timegreeting();
            var name = response.kakao_account.profile.nickname;
            secondgreeting.innerText = `${greetings}, ${name}`;
          },
          fail: function (error) {
            console.log(error)
          },
        })
      },
      fail: function (error) {
        console.log(error)
      },
    })
  }
