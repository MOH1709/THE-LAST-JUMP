const $ = (id) => document.getElementById(id);

window.onload = () => {
  $("jumpVal").innerHTML = $("jump").value;
  $("jump").max = Math.floor($("des").value / 4);
};

//---------------------------------- start ----------------------------------
$("start").onclick = () => {
  let destination = +$("des").value;
  let jump = +$("jump").value;

  if (destination <= jump) {
<<<<<<< HEAD
    alert("AI Choose : " + destination + "\n" + "AI Won🥳");
=======
    alert("AI Choose : " + destination + "\n" + "AI Won🥳");
>>>>>>> 2f4ca482a81c7996198ded2be8345b262d2b1f2f
    return;
  }

  localStorage.setItem("des", destination);
  localStorage.setItem("jump", jump);
  window.open("../pages/gameScreen.html", "_self");
};

//---------------------------------- jump ----------------------------------
$("jump").onchange = (e) => {
  $("jumpVal").innerHTML = e.target.value;
};

//---------------------------------- destination ----------------------------------
$("des").onchange = (e) => {
  $("jump").max = Math.floor(e.target.value / 4);
  $("jumpVal").innerHTML = $("jump").value;
};
