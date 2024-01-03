
let videocontainer = document.querySelector('.media')
let playbtn = document.querySelector('#play-btn')
let audioArray = ['./Seedhe Maut - _101_.mp3', "./Seedhe Maut - 'Nanchaku' ft MC STΔN LYRICS.mp3", "./Seedhe Maut - Khatta Flow  (Lyrics) ft. Kr$na  Lunch break (mixtape).mp3","./Seedhe Maut x Foreign Beggars x Sez On The Beat - 'No Enema'  Azadi Records.mp3","./Seedhe Maut - Namastute.mp3"]
let audioIndex = 0;
let audioPlaying = false;
let lunchbreak = document.querySelector('#lunchbreak-page')
let nayaab = document.querySelector('#nayaab-page')
let n = document.querySelector('#n-page')
let bayaan = document.querySelector('#bayaan-page')
let lunchbreakbtn = document.querySelectorAll('.lb-btn')
let nayaabbtn = document.querySelector('#nayaab-btn')
let nbtn = document.querySelector('#n-btn')
let bayaanbtn = document.querySelector('#bayaan-btn')
    
    let playing;

    function sequentialplaying() {
        if (audioIndex < audioArray.length) {
            if(audioPlaying===false){
                playing = new Audio(audioArray[audioIndex]);
                playing.play();
                audioPlaying=true;
            }
            else{
                playing.pause()
                audioPlaying=false;
            }
            
        }
    }

    videocontainer.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 5,
            opacity: 1
        });
    });

    videocontainer.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        });
    });

    videocontainer.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 23,
            top: dets.y -20
        });
    });

    videocontainer.addEventListener("click", function () {
        if(audioPlaying === false){
            playbtn.innerHTML = `PAUSE`
        }
        else{
            playbtn.innerHTML = `PLAY`
        }
        sequentialplaying();
        playing.addEventListener("ended", function () {
            audioPlaying = false;
            audioIndex++;
            sequentialplaying();
        });
    });

    
    document.getElementById('lb-btn').addEventListener("click", function() {
        lunchbreak.scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById('nayaab-btn').addEventListener("click", function() {
        nayaab.scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById('n-btn').addEventListener("click", function() {
        n.scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById('bayaan-btn').addEventListener("click", function() {

        bayaan.scrollIntoView({ behavior: "smooth" });
    });
    