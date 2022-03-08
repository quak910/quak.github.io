var music = document.getElementById("bgmusic");
var time = document.getElementById("current-time");
var durationContainer = document.getElementById("duration");
var np = document.getElementById("song-name");
var playhead = document.getElementById('playhead');
var timeline = document.getElementById('timeline');

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

music.volume = 0.5;
music.loop = false;

var pbutton = document.getElementById("play-icon");
var sbutton = document.getElementById("pause-icon");
var nextb = document.getElementById("next-icon");
var prevb = document.getElementById("prev-icon");
var loopb = document.getElementById("loop-icon");

pbutton.addEventListener("click", () => {
  music.play();
});

sbutton.addEventListener("click", () => {
  music.pause();
});

nextb.addEventListener("click", () => {
  next();
});

prevb.addEventListener("click", () => {
  prev();
});

loopb.addEventListener("click", () => {
  if(music.loop === true) {
    music.loop = false;
    loopb.textContent = "Loop: Off";
  } else {
    music.loop = true;
    loopb.textContent = "Loop: On";
  }
});

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

const displayTime = () => {
  time.textContent = calculateTime(music.currentTime);
}

var duration;
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
	var playPercent = 100 * (music.currentTime / duration);
	playhead.style.marginLeft = playPercent + "%";
  displayTime();
}

const displayDuration = () => {
  durationContainer.textContent = calculateTime(music.duration);
}

if (music.readyState > 0) {
  displayDuration();
} else {
  music.addEventListener('loadedmetadata', () => {
    displayDuration();
  });
}

music.addEventListener("canplaythrough", function () {
	duration = music.duration;
}, false);

//Playlist functions
var tracks = [
  {"track":1,"name":"Về Những Ngày Đã Cũ... / 90's Session","src":"./music/venhungngaydacu.mp3"},
  {"track":2,"name":"PIXEL NEKO - CÔ NÀNG KHÁC NGƯỜI [FEAT. NGER (MCK) & WXRDIE]","src":"./music/conangkhacnguoi.mp3"},
  {"track":3,"name":"MCK x TLinh - Chỉ một đêm nữa thôi","src":"./music/chimotdemnuathoi.mp3"},
  {"track":4,"name":"Tam Giác - Anh Phan ft Low G & Larria","src":"./music/tamgiac.mp3"},
  {"track":5,"name":"Lần Cuối (/ljnk. ✨ cover)","src":"./music/lancuoi.mp3"}
];

var i = 0;

function next() {
  if (i === tracks.length - 1) {
      i = 0;
  } else {
      i++;
  }

  music.src = tracks[i].src;

  np.textContent = tracks[i].name;

  music.play();

}

if (music === null) {
  throw "Playlist Player does not exists ...";
} else {
  music.src = tracks[i].src;

  np.textContent = tracks[i].name;

  music.play();

}

function prev() {
  if (i === 0 - 1) {
      i = tracks.length - 1;
  } else {
      i--;
  }

  music.src = tracks[i].src;

  np.textContent = tracks[i].name;

  music.play();
}

if (music === null) {
  throw "Playlist Player does not exists ...";
} else {
  music.src = tracks[i].src;

  np.textContent = tracks[i].name;

  music.play();

  music.addEventListener('ended', next, false)
}
