console.log("weclome to spotify clone muthu");

//audioElement.play();
let songIndex=0;
let audioElement =new Audio('Shape of You-(PagalSongs.Com.IN).mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
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
    }
    else{
        audioElement.pause();
        masterPlayclassList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});

//listen to events
myProgressBar.addEventListner('time',()=>{
    console.log('timeupdate');
    //update seekbar
});