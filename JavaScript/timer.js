const timerApp = () => {

  // 要素の取得
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const replay = document.querySelector(".replay");
  const video = document.querySelector(".vid-container video");

  // 音楽
  const sounds = document.querySelectorAll(".soundList-btn");

  // 残り時間
  const timeDisplay = document.querySelector(".time-display");

  // 残り再生時間の円
  const outline = document.querySelector(".moving-outline circle");
  const outlineLength = outline.getTotalLength();

  // 時間設定
  const timeSelect = document.querySelectorAll(".time-select button");
  let fakeDuration = 180;
  
  // 時間表示
  outline.style.strokeDashoffset = outlineLength;
  outline.style.strokeDasharray = outlineLength;
  timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}0`;
  
  // 音楽設定
  sounds.forEach(sound => {
    sound.addEventListener("click", function() {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      checkPlaying(song);
    });
  });
  
  // 再生ボタンのクリックイベントの登録
  play.addEventListener("click", function() {
    checkPlaying(song);
  });
  
  // リプレイボタンのクリックイベントの登録
  replay.addEventListener("click", function() {
    restartSong(song);
  });
  
  // リプレイボタンのクリックイベント
  const restartSong = song => {
    let currentTime = song.currentTime;
    song.currentTime = 0;
  }
  
  // 時間設定
  timeSelect.forEach(option => {
    option.addEventListener("click", function() {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}0`;
    });
  });
  
  // 再生ボタンのクリックイベント
  const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };
  
  // 音楽の再生/停止の処理
  song.ontimeupdate = function() {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeDisplay.textContent = `${minutes}:${seconds}`;
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
  
    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  };
}
timerApp();

