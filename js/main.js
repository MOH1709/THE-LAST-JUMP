const $ = (id) => document.getElementById(id);

window.onload = () => {
  $("jumpVal").innerHTML = $("jump").value;
  $("jump").max = Math.floor($("des").value / 4);
};

//---------------------------------- start ----------------------------------
$("start").onclick = () => {
  let destination = $("des").value;
  let jump = $("jump").value;

  if (destination < jump) {
    alert("AI Choose : " + destination + "\n" + "AI Won🥳");
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
