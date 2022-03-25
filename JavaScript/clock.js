const clock = () => {
    const d = new Date(); //現在の日付・時刻の取得
    let year = d.getFullYear(); //年を取得
    let month = d.getMonth() + 1; //月を取得
    let date = d.getDate();
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    //1桁の場合、0を足して2桁にする
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    //日付・時刻の文字列を作成
    let today = `${year}-${month}-${date} ${day}`;
    let time = `${hour}:${min}`;
    let seconds = `${sec}`; 

    //文字列を表示する
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
    document.querySelector(".clock-sec").innerText = seconds;
}

//1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);
