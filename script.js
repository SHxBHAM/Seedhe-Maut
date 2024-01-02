let videocontainer = document.querySelector('.media')
    let playbtn = document.querySelector('#play-btn')
    let audioArray = ['./Seedhe Maut - _101_.mp3', "./Seedhe Maut - 'Nanchaku' ft MC STΔN LYRICS.mp3", "./Seedhe Maut - Khatta Flow  (Lyrics) ft. Kr$na  Lunch break (mixtape).mp3",]
    let audioIndex = 0;
    let audioPlaying = false;
    
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
            top: dets.y - 20
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