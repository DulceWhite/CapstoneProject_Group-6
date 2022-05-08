// Stories 

const fullStory = document.querySelector(".full-story")
const btn = document.getElementById(`toggle`);

btn.onclick = function () {
    if(fullStory.style.display !== "none"){
        fullStory.style.display = "none";
        btn.innerText = "Read the complete story"
    }
    else{
        fullStory.style.display = "block";
        btn.innerText ="Complete Story"
    }
}

