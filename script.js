const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Unavailable",
    artist: "Davido ft. Musa Keys",
    duration: "2:51",
    src: "https://cdn.trendybeatz.com/audio/Davido-Ft-Musa-Keys-Unavailable-(TrendyBeatz.com).mp3",
  },
  {
    id: 1,
    title: "Rush",
    artist: "Ayra Starr",
    duration: "3:05",
    src: "https://www.six9ja.com/wp-content/uploads/2022/09/Ayra_Starr_-_Rush.mp3",
  },
  {
    id: 2,
    title: "Kilometer",
    artist: "Burna Boy",
    duration: "2:33",
    src: "http://six9ja.com/wp-content/uploads/2021/05/Burna_Boy_-_Kilometer.mp3",
    
  },
  {
    id: 3,
    title: "Sability",
    artist: "Ayra Starr",
    duration: "2:46",
    src: "https://www.six9ja.com/wp-content/uploads/2023/02/Ayra_Starr_-_Sability_Six9ja.mp3",
  },
  {
    id: 4,
    title: "Ozeba",
    artist: "Rema", 
    duration: "2:17",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/07/Rema_-_Ozeba.mp3",
  },
  {
    id: 5,
    title: "Villain",
    artist: "Rema", 
    duration: "2:17",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/07/Rema_-_Villain.mp3",
  },
  {
    id: 6,
    title: "Last Last",
    artist: "Burna Boy",
    duration: "2:52",
    src: "https://www.six9ja.com/wp-content/uploads/2022/10/Burna_Boy_-_Last_Last_2022_.mp3",
  },
  {
    id: 7,
    title: "MMS",
    artist: "Asake  Ft. Wizkid,",
    duration: "3:14",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/08/Asake_Ft_Wizkid_-_MMS.mp3",
  },
  {
    id: 8,
    title: "Live-Style",
    artist: "Timaya",
    duration: "2:40",
    src: "https://www.loadedsongs.com.ng/wp-content/uploads/2024/08/Timaya_-_Live-Style_Loadedsongs.com.ng.mp3",
  },
  {
    id: 9,
    title: "Zombie",
    artist: " Joeboy ",
    duration: "2:13",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/08/Joeboy_-_Zombie.mp3",
  },
  {
    id: 10,
    title: "Forget",
    artist: " Tekno",
    duration: "2:37",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/08/Tekno_-_Forget.mp3",
  },
  {
    id: 11,
    title: "Composure",
    artist: "Timaya",
    duration: "2:26",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/08/Timaya_-_Compozure.mp3",
  },
  {
    id: 12,
    title: "Bandana",
    artist: "Fireboy DML ft. Asake",
    duration: "2:59",
    src: "https://www.six9ja.com/wp-content/uploads/2022/07/Fireboy_DML_ft_Asake_-_Bandana_New_Song_.mp3",
  },
  {
    id: 13,
    title: "Tekno",
    artist: "GUN",
    duration: "2:49",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/08/Tekno_-_Gon.mp3",
  },
  {
    id: 14,
    title: "–Lomo Lomo ",
    artist: "KiDi Ft. Black Sherif",
    duration: "2:44",
    src: "https://cdn.six9ja.com/wp-content/uploads/2024/07/KiDi_Ft_Black_Sherif_-_Lomo_Lomo.mp3",
  },
  {
    id: 15,
    title: " Mood",
    artist: "JZyNO Ft. Khaid",
    duration: "2:57",
    src: "https://cdn.val9ja.com/wp-content/uploads/2024/07/JZyNO_Ft_Khaid_-_Mood.mp3",
  },
  {
    id: 16,
    title: "Butta My Bread",
    artist: "JZyNo Ft. Lasmid",
    duration: "2:28",
    src: "https://www.val9ja.com/wp-content/uploads/2023/05/JZyNo_Ft_Lasmid_-_Butta_My_Bread.mp3",
  },
  {
    id: 17,
    title: "Eyes On You",
    artist: " JZyNo Ft. Camidoh",
    duration: "3:02",
    src: "https://www.val9ja.com/wp-content/uploads/2023/10/JZyNo_Ft_Camidoh_-_Eyes_On_You.mp3",
  },
  {
    id: 18,
    title: "Kilos Milos",
    artist:"Black Sherif",
    duration: "2:37",
    src: "https://cdn.val9ja.com/wp-content/uploads/2024/06/Black_Sherif_-_Kilos_Milos.mp3",
  },
  {
    id: 19,
    title: "Oh Paradise",
    artist: "Black Sherif",
    duration: "3:08",
    src: "https://www.val9ja.com/wp-content/uploads/2022/10/Black_Sherif_-_Oh_Paradise.mp3",
  },
  {
    id: 20,
    title: "Kwaku The Traveller",
    artist: "Black Sherif",
    duration: "3:05",
    src: "https://cdn.val9ja.com/wp-content/uploads/2024/06/Black_Sherif_-_Kwaku_The_Traveller.mp3",
  },
  {
    id: 21,
    title: "Toxic Love City",
    artist: "Black Sherif",
    duration: "3:12",
    src: "https://www.val9ja.com/wp-content/uploads/2022/10/Black_Sherif_-_Toxic_Love_City.mp3",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  
  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
};

const playPreviousSong = () => {
   if (userData?.currentSong === null) return;
   else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];

    playSong(previousSong.id);
   }
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs); 
  highlightCurrentSong(); 
  setPlayButtonAccessibleText(); 

  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      userData.songs = [...allSongs];

      renderSongs(sortSongs()); 
      setPlayButtonAccessibleText();
      resetButton.remove();
    });

  }

};

const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click",  pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
      playNextSong();
    } else {
      userData.currentSong = null;
      userData.songCurrentTime = 0;  
 pauseSong()
 setPlayerDisplay()
 highlightCurrentSong()
 setPlayButtonAccessibleText()

    }
});

const sortSongs = () => {
  userData?.songs.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return userData?.songs;
};

renderSongs(sortSongs());
setPlayButtonAccessibleText();