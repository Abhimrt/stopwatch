// for second 
let secbox = document.querySelector("#sec");
let sectxt = document.querySelector(".sec");
let sec = 6;
let temp = 0;
function secfun() {
    let sectime = setInterval(() => {
        temp++;
        secbox.style.transform = `rotateX(-${360 * temp}deg)`
        setTimeout(() => {
            if(sec>=10){
                sectxt.innerHTML = sec;
            }else{
                sectxt.innerHTML = `0${sec}`;
            }
        }, 150)
        sec--;
        if (sec <= 0) {
            clrsec()
        }
        if (temp >= 2) {
            temp = 0;
        }
    }, 1000)
    function clrsec() {
        if (min > 0) {
            min--;
            mintime();
        } else if (hr > 0) {
            hr--;
            hrtime();
        }
        clearInterval(sectime)
    }
}


// for minute
let minbox = document.querySelector("#min");
let mintxt = document.querySelector(".min");
let min = 0;
let temp1 = 1;
// mintime()
const mintime = () => {
    temp1++;
    minbox.style.transform = `rotateX(-${360 * temp1}deg)`
    setTimeout(() => {
        if(min>=10){
            mintxt.innerHTML = `${min}<span>:<span>`;
        }else{
            mintxt.innerHTML = `0${min}<span>:<span>`;
        }
    }, 150)
    if (temp1 >= 2) {
        temp1 = 0;
    }
    if (sec <= 0) { sec = 60; secfun(); }

    if (min == 0) {
        if (hr > 0) {
            hr--;
            hrtime();
        }
    }
}

// for hr
let hrbox = document.querySelector("#hr");
let hrtxt = document.querySelector(".hr");
let hr = 5;
let temp3 = 0;
function hrtime() {
    temp3++;
    hrbox.style.transform = `rotateX(-${360 * temp3}deg)`
    setTimeout(() => {
        if(hr>=10){
            hrtxt.innerHTML = `${hr}<span>:<span>`;
        }else{
            hrtxt.innerHTML = `0${hr}<span>:<span>`;
        }
        
    }, 150)
    if (temp3 >= 2) {
        temp3 = 0;
    }
    if (min <= 0) { min = 59; mintime(); }

}

// function call
if(sec>=10){
    sectxt.innerHTML = sec;
}else{
    sectxt.innerHTML = `0${sec}`;
}
if(min>=10){
    mintxt.innerHTML = `${min}<span>:<span>`;
}else{
    mintxt.innerHTML = `0${min}<span>:<span>`;
}
if(hr>=10){
    hrtxt.innerHTML = `${hr}<span>:<span>`;
}else{
    hrtxt.innerHTML = `0${hr}<span>:<span>`;
}

if (sec != 0) {
    secfun();
} else if (min != 0) {
    mintime();
} else {
    hrtime()
}


// time()
// const till = new Date().getHours();
// console.log(till);
// let time5 = "may 14, 2023 13:00:00"
// function time() {
//     let interval2 = setInterval(() => {
//         const till = new Date(time5).getTime();
//         const now = till - new Date().getTime();
//         const days = Math.floor(now / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
//         const second = Math.floor(now % (1000 * 60) / 1000);
//         if (now < 0) {
//             clr()
//             console.log(0);
//             // document.getElementById("hrs").innerText = `  00`
//             // document.getElementById("min").innerText = `:  00`
//             // document.getElementById("sec").innerText = `:  00`
//         }
//         else {
//             // document.getElementById("hrs").innerText = `  ${hours}`
//             // document.getElementById("min").innerText = `:  ${minute}`
//             // document.getElementById("sec").innerText = `:  ${second}`
//             console.log(hours,minute,second);
//         }
//     }, 1000);
//     function clr() {
//         clearInterval(interval2);
//     }
// }