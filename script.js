const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');

window.addEventListener('keyup', (event) => {
    if (event.code === 'KeyD') {
        console.log(event);
        let urlD = "assets/audio/c.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[0];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);

    }
    else if (event.code === 'KeyF') {
        console.log(event.code);
        let urlD = "assets/audio/d.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[1];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyG') {
        console.log(event.code);
        let urlD = "assets/audio/e.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[2];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyH') {
        console.log(event.code);
        let urlD = "assets/audio/f.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[3];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyJ') {
        console.log(event.code);
        let urlD = "assets/audio/g.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[4];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyK') {
        console.log(event.code);
        let urlD = "assets/audio/a.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[5];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyL') {
        console.log(event.code);
        let urlD = "assets/audio/b.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[6];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyR') {
        console.log(event.code);
        let urlD = "assets/audio/c♯.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[7];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyT') {
        console.log(event.code);
        let urlD = "assets/audio/d♯.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[8];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyU') {
        console.log(event.code);
        let urlD = "assets/audio/f♯.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[10];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyI') {
        console.log(event.code);
        let urlD = "assets/audio/g♯.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[11];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
    else if (event.code === 'KeyO') {
        console.log(event.code);
        let urlD = "assets/audio/a♯.mp3";
        playAudio(urlD);
        let buttonD = pianoКeys[12];
        buttonD.classList.add('playing');
        buttonD.classList.add('piano-key-active');
        setTimeout(() => {
            buttonD.classList.remove('playing');
            buttonD.classList.remove('piano-key-active');
        }, 1000);
    }
});

piano.addEventListener('mouseup', (event) => {
    let buttonD = event.target;
    console.log(buttonD);
    let clickMOuse = event.target.dataset.note;
    let urlD = "assets/audio/" + `${clickMOuse}` + ".mp3";
    console.log(urlD);
    playAudio(urlD);
    buttonD.classList.add('playing');
    buttonD.classList.add('piano-key-active');
    setTimeout(() => {
        buttonD.classList.remove('playing');
        buttonD.classList.remove('piano-key-active');
    }, 1000);

})


function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}


const audio = document.querySelector('audio');
const btnC = document.querySelector('.btn-container');
const btnAll = document.querySelectorAll('.btn');

console.log(btnC);

btnC.addEventListener('click', (event) => {
    let buttonD = event.target;
    console.log(buttonD);
    if (event.target.classList.contains('btn')) {
        btnAll.forEach((el) => {
            if (el.classList.contains('btn-active')) {
                el.classList.remove('btn-active');
            }
            else {
                event.target.classList.add('btn-active');
                buttonD.classList.add('btn-active');
            }
            if (el.classList.contains('btn-letters') && el.classList.contains('btn-active')) {
                changeLetter();
            }
            if (el.classList.contains('btn-notes') && el.classList.contains('btn-active')) {
                deleteLetter();
            }

        });

    }
});

function changeLetter() {
    pianoКeys.forEach((elem) => {
        elem.classList.add('piano-key-letter');
    })
}

function deleteLetter() {
    pianoКeys.forEach((elem) => {
        elem.classList.remove('piano-key-letter');
    })
}


const full = document.querySelector('.fullscreen');
let element = document.getElementById("all");

full.addEventListener('click', (event) => {
    openFullscreen();
});

full.addEventListener('click', (event) => {
    closeFullscreen();
});

function openFullscreen() {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
}

function closeFullscreen() {
    document.exitFullscreen();
}