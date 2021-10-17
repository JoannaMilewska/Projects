window.addEventListener('load', ()=> {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(223, 157, 182)",
        "rgb(175, 130, 189)",
        "rgb(145, 152, 216)",
        "rgb(157, 233, 163)",
        "rgb(243, 221, 151)",
        "rgb(209, 130, 106)"

    ];
    console.log(sounds);
    pads.forEach((pad, index)=> {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);

        });
    };
});