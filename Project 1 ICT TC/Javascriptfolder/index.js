function SwitchMode() {
    const element = document.body;
    let Mode = localStorage.getItem("Dmode");
    element.classList.toggle("darkmode");
    console.log("Switched modes")
    if (Mode == "on") {
    localStorage.setItem("Dmode", "off")
    console.log("Set mode to darkmode")
    }
    else if (Mode == "off") {
    localStorage.setItem("Dmode", "on")
    console.log("Set mode to lightmode")
    }
}
function ModeCheck() {
  const element = document.body;
  let Mode = localStorage.getItem("Dmode");
  if (Mode == "off") {
    element.classList.toggle("darkmode");
    console.log("Darkmode is off")
  }
  else if (Mode == "on") {
    console.log("Darkmode is on")
  }
  else {
    localStorage.setItem("Dmode", "on")
    ModeCheck()
  }
}

function BootingUp() {
    let tmessage = "error";
    const t = new Date().getHours();
    console.log(t);
    if (t >= 0 && t <= 6) {
    tmessage = "Goede nacht";
    console.log("Goede nacht");
    }
    else if (t >= 7 && t <= 12) {
        tmessage = "Goede morgen";
        console.log("Goede morgen");
    }
    else if (t >= 13 && t <= 18) {
        tmessage = "Goede middag";
        console.log("Goede middag");
    }
    else if (t >= 19 && t <= 24) {
        tmessage = "Goede avond";
        console.log("Goede avond");
    }
    let user = localStorage.getItem("name");
    console.log(user)
    if (user != null && user != "") {
        alert(tmessage + " " + user);
    }
    else {
        if (confirm("Accept cookie?") == true) {
                user = prompt("Please enter your name")
                if (user != null && user != "") {
                    localStorage.setItem("name", user);
                    setupCookie(user, 365)
                }
            }
        else {
            user = ""
        }
    }
}

function setupCookie(Cname, exdays) {
    const extime = new Date();
    extime.setTime(extime.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + extime;
    document.cookie = "username=" + Cname + ";" + expires + "; path=/";
}

function NavMenu() {
    const Element = document.getElementById("Navi");
    const SecElement = document.getElementById("Heads");
    Element.classList.toggle("NavVis");
    SecElement.classList.toggle("HeadVis");
    console.log("Hamburger Menu");
}

