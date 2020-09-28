var site =prompt("네이버,다음,네이트,구글중 하나의 사이트를입력해주세요.")
var url;

switch(site){
 case"구글":url="www.google.com";
 break;
 case"다음":url="www.daum.net";
 break;
 case"네이버":url="www.naver.com";
 break;
 case"네이트":url="www.nate.com"
 break;
 default:alert("보기중에 없는 사이트")
}
if(url){
  location.href="http://"+url;
}