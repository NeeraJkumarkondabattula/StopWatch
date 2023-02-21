var sec = 00;
var min = 00;
document.querySelector("#start").onclick = () => {
    var time = setInterval(function minite() {
        sec += 1;
        if (sec > 60) {
            min += 1;
            sec = 00;
        }

        if (sec < 10 && min < 10) {
            document.querySelector(".top-box").innerHTML = "0" + min + ":0" + sec;
        } else {
            if (min < 10) {
                document.querySelector(".top-box").innerHTML = "0" + min + ":" + sec;
            } else {
                document.querySelector(".top-box").innerHTML = min + ":" + sec;
            }
        }
    }, 1000)

    document.querySelector("#stop").onclick = () => {
        clearInterval(time);
    }
    
    document.querySelector("#reset").onclick = () => {
        sec=00;
        min=00;
        document.querySelector(".top-box").innerHTML = "00:00";
    }
}


    