let target = document.querySelector("#dynamic");

function dynamic(randomArr){
  console
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    },80)
  }
  else{
    setTimeout(resetTyping, 3000);
  }
}
function randomString(){
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to Python", "Learn to Ruby"]
  let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

//없애는 함수
function resetTyping(){
  target.textContent = "";
  dynamic(randomString());
}

dynamic(randomString());
function blink(){
  target.classList.toggle("active");
}
//커서 깜빡이기
setInterval(blink, 500);
