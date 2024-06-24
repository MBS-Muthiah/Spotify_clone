console.log("weclome to spotify clone muthu");

//audioElement.play();
let songIndex=0;
let audioElement =new Audio('Shape of You-(PagalSongs.Com.IN).mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"shape of you",filePath:"Shape of You-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
    {songName:"shape of you",filePath:"Shape of You-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
    {songName:"shape of you",filePath:"Shape of You-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
    {songName:"shape of you",filePath:"Shape of You-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
    {songName:"shape of you",filePath:"Shape of You-(PagalSongs.Com.IN).mp3",coverPath:"cover.jpg"},
]

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
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
});