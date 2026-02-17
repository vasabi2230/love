const yes = document.getElementById("btn_yes");
const form_btn = document.getElementById("btn_form");
const no = document.getElementById("btn_no");
const image = document.querySelector("#image img");
const yay = document.getElementById("txt_yay");
let i = 1;
let snowStarted = false;

function say_no() {
    if (i === 1) {
        image.src = "cry.gif";
        no.style.width="130px"
        no.textContent="ot sl nh heh men";
        i = 2;
    }
    else if (i === 2) {
        image.src = "no_no.gif";
        no.style.width="100px"
        no.textContent="kom jg mer";
        i = 3;
    }
    else if (i === 3) {
        image.src = "cry_sit.gif";
        no.style.width="120px"
        no.textContent="nh akrk nas men!";
        i = 4;
    }
    else if (i === 4) {
        image.src = "sad_back.gif";
        no.style.width="130px"
        no.textContent="kom sday kroy ha!";
        i = 5;
    }
    else if (i === 5) {
        image.src = "sit_cry.gif";
         no.style.width="110px"
        no.textContent="men ten men?";
        i = 6;
    }
    else if (i === 6) {
        image.src = "huhuhu.gif";
        no.textContent="no";
        yes.textContent=`Yes yes, please say YES`;
        yes.style.width="200px";
        yes.style.height="50px";
        i = 7;
    }
    else if (i === 7) {
        image.src = "huhuhu.gif";
        no.textContent="no";
        yes.textContent=`Yes yes, please say YES`;
        yes.style.width="300px";
        yes.style.height="60px";
        yes.style.marginTop="-30px";
        i = 8;
    }
    else if (i === 8) {
        image.src = "huhuhu.gif";
        no.textContent="no";
        yes.textContent=`Yes yes, please say YES`;
        yes.style.width="400px";
        yes.style.height="70px";
        yes.style.marginTop="-80px";
        i = 9;
    }
    else if (i === 9) {
        image.src = "huhuhu.gif";
        no.textContent="no";
        yes.textContent=`Yes yes, please say YES`;
        yes.style.width="400px";
        yes.style.height="100px";
        yes.style.marginTop="-80px";
        i = 10;
    }
    else if (i === 10) {
        image.src = "happy.gif";
        no.textContent="Yes";
        yes.textContent=`Yes yes, please say YES`;
        yes.style.width="400px";
        yes.style.height="100px";
        yes.style.marginTop="-80px";

        i = 11;
    }
        else if (i === 11) {
            image.src = "love.gif";
            document.getElementById("btn_form").style.display = "none";
             yay.textContent="Yay yay 🥳";

            function createSnow() {
                const snow = document.createElement("div");
                snow.classList.add("snow");

                const symbols = ["❄", "❤️"];
                snow.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

                snow.style.left = Math.random() * window.innerWidth + "px";
                snow.style.fontSize = Math.random() * 10 + 12 + "px";
                snow.style.animationDuration = Math.random() * 3 + 2 + "s";

                document.body.appendChild(snow);
                setTimeout(() => {
                    snow.remove();
                }, 2000);
            }

            if (!snowStarted) {
                snowStarted = true;
                setInterval(createSnow, 100);
            }
        }

}
function say_yes(){
     image.src = "love.gif";
        document.getElementById("btn_form").style.display="none";
    yay.textContent="Yay yay 🥳";

   function createSnow() {
         const snow = document.createElement("div");
    snow.classList.add("snow");

    // choose random symbol
    const symbols = ["❄", "❤️"];
    snow.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.fontSize = Math.random() * 10 + 12 + "px";
    snow.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(snow);
            setTimeout(() => {
                snow.remove();
            }, 2000);
        }
        // create snow continuously
        setInterval(createSnow, 100);

    
}


