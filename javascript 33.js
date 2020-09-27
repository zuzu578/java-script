/*자판기*/

let a = 3000;
let b = 1000;
let c = 1500; 




let vanding = prompt("원하시는 상품을 골라주세요.");
if(vanding === "a"){
  let insert = prompt("돈을 넣어주세요");
  if(insert>=a){
    alert("a나왔습니다.")
  }else{
    alert(a-insert+"원 부족합니다.")
  }
}

