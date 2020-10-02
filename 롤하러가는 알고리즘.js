function lolFunction(){
  location.href = "https://na.leagueoflegends.com/ko-kr/";
}


const date1 = new Date();


var text = prompt("잘 지냈니? 오늘의 날짜는"+date1+"이야.이름이 무엇이지?")
if(text = "dlwnghks"){
  var text2 = prompt("dlwnghks"+"이구나"+"너의 나이는 몇살이니")
}if(text2>=20){
  var text3 = prompt(text2+"구나..yes,no로대답가능")
}if(text3=="yes"){
  var text4 = prompt("오늘 무엇을 했니?잠자기,놀기 중 대답가능")
  if(text4 =="잠자기"){
    
    
    var text6=prompt("잠만자지말고 다른것좀 해봐 게임할래?yes,no로대답가능");
  if(text6=="yes"){
    var text7=prompt("무슨게임하러갈래?"+"lol로 대답가능")
    if(text7=="lol"){
      lolFunction()
    }
    
  }else{
    alert("그럼 계속잠만자..")
  }
  }

}else{
 var text5 = prompt("나이는 중요하지않아 사실 그래서 오늘은 무엇을 했니?")
}

