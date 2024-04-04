var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
];
var Poster = document.querySelector('#left');
var allSongs = document.querySelector("#all-songs");
var backward = document.querySelector('#backward');
var play =  document.querySelector('#play');
var farward = document.querySelector('#forward')
var Audio = new Audio();
var selectedSong = 0;
function mainfunction(){
    var songVar = '';
    arr.forEach(function(elem, index){
        songVar+=`<div class="song-card" id="${index}"}>
        <div class="part1">
            <img src="${elem.img}" alt="">
            <h2>${elem.songName}</h2>
        </div>
        <h6>3:56</h6>
    </div>`;
    })
    allSongs.innerHTML=songVar;
    Audio.src=arr[selectedSong].url;
    Poster.style.backgroundImage=`url(${arr[selectedSong].img})`
};
mainfunction();
allSongs.addEventListener('click',function(details){
    selectedSong=details.target.id;
    mainfunction();
    Audio.play();
    play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
    flag=1;
});
var flag =0;
play.addEventListener('click',function(){
    if (flag==0) {
        play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
        mainfunction();
        Audio.play();
        flag=1;
    }else{
        play.innerHTML=`<i class="ri-play-mini-fill"></i>`
        mainfunction();
        Audio.pause();
        flag = 0;
    }
})
farward.addEventListener('click', function(){
    if (selectedSong< arr.length - 1) {
        selectedSong++
        mainfunction()
        Audio.play();
    }else{
        farward.style.opacity=0.4;
    }
})

backward.addEventListener('click', function(){
    if(selectedSong>0){
        selectedSong--
        mainfunction()
        Audio.play();
    }else{
        backward.style.opacity=0.4;
    }
})
