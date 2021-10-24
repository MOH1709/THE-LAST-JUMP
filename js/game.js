const $ = (id) => document.getElementById(id);
let jump = 0;
let des = 0;
let turn = 0;
let isLoaded = false;

//---------------------- self defined functions ----------------------
function winPos() {
  return ((des - 1) % (jump + 1)) + (jump + 1) * turn;
}

function AIMove(curNum) {
  return Math.min(Math.abs(winPos() - curNum), jump);
}

function reset() {
  window.history.go(-1);
}

//------------------------------- on Load -------------------------------
window.onload = () => {
  jump = +localStorage.getItem("jump");
  des = +localStorage.getItem("des");

  $("desNum").innerHTML = des;
  $("input").max = localStorage.getItem("jump");

  $("choice").innerHTML = $("input").value;

  isLoaded = true;
};

//---------------------------------- first turn ----------------------------------
$("AI").onclick = () => {
  $("container").style.display = "block";
  $("turn").style.display = "none";

  $("aiChoice").innerHTML = "+" + AIMove(-1);
  $("curNum").innerHTML = AIMove(-1);
  turn = 1;
};

$("user").onclick = () => {
  $("container").style.display = "block";
  $("turn").style.display = "none";
  turn = 1;
};

//---------------------------------- user input ----------------------------------
$("input").onchange = (e) => {
  if (isLoaded) {
    $("choice").innerHTML = e.target.value;
  }
};
//---------------------------------- next ----------------------------------

$("next").onclick = () => {
  if (isLoaded) {
    let curVal = $("curNum").innerText;
    let pos = +curVal;

    pos += parseInt($("input").value);
    $("curNum").value = pos;
    $("curNum").innerHTML = pos;
    if (pos >= des) {
      alert("You Won🎉🤝");
      reset();
    }

    //---------------------------------- AI Turn ----------------------------------

    setTimeout(() => {
      curVal = AIMove(pos - 1);
      $("aiChoice").innerHTML = "+" + curVal;
      $("curNum").innerHTML = pos + curVal;
      if (pos + curVal >= des) {
        alert("AI choose : " + curVal + "\nAI Wins🎉🥳");
        reset();
      } else {
        alert("AI's Choose : " + "+" + curVal);
        turn++;
      }
    }, 50);
  }
};
//---------------------------------- Reset ----------------------------------
$("reset").onclick = () => {
  reset();
};
