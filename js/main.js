
if (confirm("Добрый день, хотите ли вы отдаться в рабство?")) {
  var MLDC = "Молодец!"
  document.write(MLDC);

} else {
  confirm("Ban")
  document.write("Ты забанен!Я не буду тебя разбанивать!!")
}
// функция - подпрограма, которая вмещает в себе код

var counter = 0;
function OCB(el){
  counter++
  el.innerHTML = "Счетчик до моего прибытия: " + counter + "мин";
  console.log();
  el.style.cssText = "font-size: 50px"
  el.style.background = "#333";
  el.style.color = "white";
}


