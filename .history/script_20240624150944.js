console.log("weclome to spotify clone muthu");

//audioElement.play();
let songIndex=0;
let audioElement =new Audio('Shape of You-(PagalSongs.Com.IN).mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"shape of you",filePath:"Shape of You-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
    {songName:"starboy",filePath:"Starboy (Speed Up Reverb)-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
    {songName:"closer",filePath:"Closer-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
    {songName:"popular",filePath:"Popular(PagalNew.Com.Se).mp3",coverPath:"cover.jpg"},
    {songName:"achacho",filePath:"Achacho (Aranmanai 4)-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
]

songItems.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText=songs[i].songName;
});

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
});

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value *audioElement.duration/100;

});

const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        console.log(e.target);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src='Achacho (Aranmanai 4)-(PagalSongs.Com.IN).mp3';
        audioElement.play();
    })
});