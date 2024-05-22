function toggleChat(){
    const chatContainer = document.getElementById("chat-container");
    const toggleButton = document.getElementById("toggle-button");
    
    if(chatContainer.style.display == "none" || chatContainer.style.display == ""){
        chatContainer.style.display = "flex"
        toggleButton.textContent="채팅숨기기";

    } else{
        chatContainer.style.display = "none"
        toggleButton.textContent="채팅보이기";
    }
}
메세지보이기("안녕하세요. KH상담봇입니다. 원하는 메뉴를 입력하세요","bot");
function 메세지보이기(message,sender){
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    //                       div 클래스 명
    //                            message    user | bot   -message 
    messageElement.classList.add("message",   sender   + "-message");
    messageElement.textContent = message; // 메세지 보이기
    chatbox.appendChild(messageElement); // 보낸 내용 추가하기
}
function sendMessage(){
    const inputbox = document.getElementById("user-input");
    const message = inputbox.value.trim(); //trim() 공백 제거
    //만약에 빈칸으로 보낼 경우 아무런 메세지 없이 보내기를 방지하길 원한다면 설정
    if(message == "") 
    return; // return을 추가해서 더이상 밑으로 못가게 끝내기

    메세지보이기(message,"user");
    inputbox.value = ""; //input 값에 "" 새로운 값으로 ""(공백) 을 넣어 메세지 내용을 초기화

    //채팅봇 띄우기
    setTimeout(() => {
        메세지보이기("저는 채팅 봇입니다","bot");
    },1000); //1초후에 메세지 보이기
}