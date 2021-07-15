const music= document.querySelector('audio');
const image=document.querySelector('img');

const title=document.getElementById('title');
const artist=document.getElementById('artist');

const preBtn=document.getElementById('prev');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');

const progressContainer=document.getElementById('progress-container');
const progress=document.getElementById('progress');
const volume=document.getElementById('volume');

const currentTimeEl=document.getElementById('current-time');
const durationEl=document.getElementById('duration');


let isPlaying=false;

let volumeSet=0.2;



//Music
const songs=[
    {
        id:1,
        name:'1.Ed Sheeran - Bad Habits',
        displayName:'Bad Habbits',
        artist:'Ed Sheeran'
    },
    {
        id:2,
        name:'2.I Like Me Better - Lauv',
        displayName:'I Like Me Better',
        artist:'Lauv'
    },
    {
        id:3,
        name:'3.Conor Maynard - Hate How Much I Love You',
        displayName:'Hate How Much I love you',
        artist:'Conor Maynard'
    },
    {
        id:4,
        name:'4.Dua Lipa - Levitating',
        displayName:'Levitating',
        artist:'Dua Lipa'
    },
    {
        id:5,
        name:'5.Alan Walker x Conor Maynard - Believers',
        displayName:'Believers',
        artist:'Alan Walker X Conor Maynard'
    },
    {
        id:6,
        name:'6.Astronaut In The Ocean - Masked Wolf',
        displayName:'Astronaut in Ocean',
        artist:'Mask Wolf'
    },
    {
        id:7,
        name:'7.Bella Poarch - Build a b (Build a Bitch)',
        displayName:'Build A B****',
        artist:'Bella Poarch'
    },
    {
        id:8,
        name:'8.Dua Lipa - Love Again',
        displayName:'Love Again',
        artist:'Dua Lipa'
    },
    {
        id:9,
        name:'9.Lil Nas X - MONTERO (Call Me By Your Name)',
        displayName:'Call Me By Your Name',
        artist:'Lil Nas X Montero'
    },
    {
        id:10,
        name:'10.The Kid LAROI, Miley Cyrus - WITHOUT YOU',
        displayName:'Without You ft. Miley Cyrus',
        artist:'The Kid LAROI X Miley Cyrus'
    },
    {
        id:11,
        name:'11.Olivia Rodrigo - drivers license',
        displayName:'Drivers License',
        artist:'Olivia Rodrigo'
    },
    {
        id:12,
        name:'12.Olivia Rodrigo - good 4 u',
        displayName:'Good 4 U',
        artist:'Olivia Rodrigo'
    },
    {
        id:13,
        name:'13.Maroon 5 - Beautiful Mistakes ft. Megan Thee Stallion',
        displayName:'Beautiful Mistake',
        artist:'Maroon 5'
    },
    {
        id:14,
        name:'14.MARINA - About Love',
        displayName:'About Love- P.S. I Love You',
        artist:''
    },
    {
        id:15,
        name:'15.Imagine Dragons - Follow You',
        displayName:'Follow You',
        artist:'Imagine Dragons'
    },
    {
        id:16,
        name:'16.Trevor Daniel - Falling',
        displayName:'Falling',
        artist:'Trevour Daniel'
    },
    {
        id:17,
        name:'17.Venom - Eminem',
        displayName:'Venom',
        artist:'EMINEM'
    },
    {
        id:18,
        name:'18.Marshmello, Halsey - Be Kind (Halsey)',
        displayName:'Be Kind',
        artist:'Marshmello X Halsey'
    },
    {
        id:19,
        name:'19.Imagine Dragons - Radioactive',
        displayName:'Radioactive',
        artist:'Imagine Dragons'
    },
    {
        id:20,
        name:'20.Imagine Dragons - Demons',
        displayName:'Demons',
        artist:'Imagine Dragons'
    },
    {
        id:21,
        name:'21.Imagine Dragons - Bad Liar',
        displayName:'Bad Liar',
        artist:'Imagine Dragons'
    },
    {
        id:22,
        name:'22.Dua Lipa - New Rules',
        displayName:'New Rules',
        artist:'Dua Lipa'
    },
    {
        id:23,
        name:'23.Dua Lipa - Break My Heart',
        displayName:'Break My Heart',
        artist:'Dua Lipa'
    },
    {
        id:24,
        name:'24.Lil Nas X - Old Town Road Ft. Billy Ray Cyrus',
        displayName:'Old Town Road',
        artist:'Lil Nan X Ft. Bily Ray Cyrus'
    },
    {
        id:25,
        name:'25.Maroon 5 - Sugar',
        displayName:'sugar',
        artist:'Maroon 5'
    },
    {
        id:26,
        name:'26.PUBLIC - Make You Mine Put your hand in mine',
        displayName:'PUBLIC-Make You Mine',
        artist:'PUBLIC'
    },
    {
        id:27,
        name:'27.Selena Gomez - Back To You',
        displayName:'Back To You',
        artist:'Selena Gomez'
    },
    {
        id:28,
        name:'28.Avicii - The Nights',
        displayName:'The Nights',
        artist:'Avicii'
    },
    {
        id:29,
        name:'29.Eminem - Godzilla ft. Juice WRLD',
        displayName:'Godzila Ft. Juice World',
        artist:'Eminem'
    },
    {
        id:30,
        name:'30.Imagine Dragons - Thunder',
        displayName:'Thunder',
        artist:'Imagine Dragons'
    },
    {
        id:31,
        name:'31.5 Seconds Of Summer - Easier',
        displayName:'Easier',
        artist:'5 Seconds of Summer'
    },
    {
        id:32,
        name:'32.5 Seconds of Summer ‒ Teeth',
        displayName:'Teeth',
        artist:'5 Seconds of Summers'
    },
    {
        id:33,
        name:'33.The Chainsmokers - This Feeling ft. Kelsea Ballerini',
        displayName:'This Feeling',
        artist:'Chainsmokers ft. Kelsea Ballerini'
    },
    {
        id:34,
        name:'34.The Chainsmokers & Coldplay - Something Just Like This',
        displayName:'Something Like This',
        artist:'Coldplay & Chainsmokers'
    },
    {
        id:35,
        name:'35.The Chainsmokers & 5 Seconds of Summer - Who Do You Love 5SOS',
        displayName:'Who Do Yo Love now',
        artist:'5SOS & Chainsmokers'
    },
    {
        id:36,
        name:'36.Alec Benjamin - Let Me Down Slowly',
        displayName:'Let Me Down Slowly',
        artist:'Alec Benjamin'
    },
    {
        id:37,
        name:'37.Benny Blanco, Halsey & Khalid - Eastside',
        displayName:'Eastside',
        artist:'Halsey & Khalid'
    },
    {
        id:38,
        name:'38.Billie Eilish - lovely ft. Khalid',
        displayName:'Lovely',
        artist:'Belle Eillish ft. Khalid'
    },
    {
        id:39,
        name:'39.Hailee Steinfeld, Grey - Starving ft. Zedd',
        displayName:'Starving',
        artist:'Hailee Steinfeld'
    },
    {
        id:40,
        name:'40.James Arthur - Say You Won t Let Go',
        displayName:'Say Wont Let Go',
        artist:'James Arthur'
    },
    {
        id:41,
        name:'41.Powfu - Death Bed ft. beabadoobee don t stay awake for too long',
        displayName:'Death Bed',
        artist:'Powfu'
    },
    {
        id:42,
        name:'42.The Chainsmokers, Illenium - Takeaway ft. Lennon Stella',
        displayName:'TakeAway',
        artist:'Chainsmokers ft. Lennon Stella'
    },
    {
        id:43,
        name:'43.Sia - Cheap Thrills ft. Sean Paul',
        displayName:'Cheap Thrilla ft. Sean Paul',
        artist:'Sia ft. Sean Paul'
    },
    {
        id:44,
        name:'44.Dua Lipa - IDGAF',
        displayName:'IDGAF',
        artist:'Dua Lipa'
    },
    {
        id:45,
        name:'45.Alan Walker & Ava Max - Alone, Pt.II',
        displayName:'Alone-II',
        artist:'Alan Walker & Ava Max'
    },
    {
        id:46,
        name:'46.Anne-Marie - 2002',
        displayName:'2002',
        artist:'Anne Marie'
    },
    {
        id:47,
        name:'47.Anne-Marie, Niall Horan - Our Song',
        displayName:'Our Song',
        artist:'Anne-Marie & Niall Horan'
    },
    {
        id:48,
        name:'48.Katy Perry - Electric',
        displayName:'Electric',
        artist:'Katty Perry'
    },
    {
        id:49,
        name:'49.Marshmello & Anne-Marie - FRIENDS',
        displayName:'FRIENDS',
        artist:'Marshmello & Anne-Marie'
    },
    {
        id:50,
        name:'50.Shawn Mendes, Camila Cabello - Señorita',
        displayName:'Señorita',
        artist:'Shawn Mendes & Camila Cabello'
    },
    {
        id:51,
        name:'51.Harry Styles - Watermelon Sugar',
        displayName:'Watermellon Sugar',
        artist:'Harry Styles'
    }

];

//Play& Pause
const playSong = ()=>{
    isPlaying=true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause');
    music.play();
    music.volume=volumeSet;
}

const pauseSong = ()=>{
    isPlaying=false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','Play');
    music.pause();
    music.volume=volumeSet;

}

playBtn.addEventListener('click',()=>(isPlaying ?pauseSong():playSong()));

//Update Song

const loadSong = (song)=>{
    title.textContent=song.displayName;
    artist.textContent=song.artist;
    music.src= `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
    music.volume=volumeSet;
}

let songIndex=0;

//onLoad 
loadSong(songs[songIndex]);

preBtn.addEventListener('click',()=>{
    songIndex--;
    if(songIndex < 0 ){
        songIndex=songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});

nextBtn.addEventListener('click',()=>{
    songIndex++;
    if(songIndex > songs.length-1 ){
        songIndex=0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

music.addEventListener('ended',()=>{songIndex++;
    if(songIndex > songs.length-1 ){
        songIndex=0;
    }
    loadSong(songs[songIndex]);
    playSong()
});

//update Progress Bar & Time
const updateProgress=(e)=>{
    if (isPlaying) {
      const { duration, currentTime } = e.srcElement;
      // Update progress bar width
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;

      // Calculate display for duration
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);

      if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
      }

      // Delay switching duration Element to avoid NaN
      if (durationSeconds) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
      }

      // Calculate display for currentTime
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);

      if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }

      currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
  }
  
// Set Progress Bar
function setProgressBar(e) {
    if(isPlaying){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
    }
}

const volumeChange = (e)=>{
    if(isPlaying){
        music.volume=e.currentTarget.value/100;
        volumeSet=music.volume;
    }
         
}


music.addEventListener('timeupdate',updateProgress);
volume.addEventListener('change',volumeChange)
progressContainer.addEventListener('click',setProgressBar);
