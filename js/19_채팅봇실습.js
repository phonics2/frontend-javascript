    //자바스크립트는 매개변수가 함수에서 설정한 매개변수와 작성해야하는
            // 개수가 달라도 문제없이 실행됨
            보이기("봇입니다.","bot");
            function 보이기(message,sender){
                //채팅내용 가져오기
                const chatbox = document.getElementById("chat");
                //내용 안에 div 추가하기
                const messageElement = document.createElement("div");
                
                //claasList로   div안에 클래스 추가하기
                messageElement.classList.add("m",sender+"-m");
                
                //채팅 내용 보이기
                messageElement.textContent = message;
                
                //보낸 내용 추가하기
                chatbox.appendChild(messageElement);

            }
            function 전송(){
                
                const inputbox = document.getElementById("user-input");
                
                const message = inputbox.value.trim();

                if(message == "") return;
                    
                보이기(message,"user");
                inputbox.value = "";
                //채팅봇 띄우기
                setTimeout(()=>{
                    보이기("챗봇입니다.","bot")
                },1000); //1초후에 메세지 보이기
            }