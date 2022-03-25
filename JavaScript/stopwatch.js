// 要素の取得
let startTime; 
let timeoutId;
const timer = document.getElementById('timer');
let elapsedTime = 0;
const start = document.getElementById('start');
const timeout = document.getElementById('timeout');
const reset = document.getElementById('reset');

const countUp = () => {
    const d = new Date(Date.now() - startTime + elapsedTime); //下記メソッド使用のためにDateクラスのインスタンスを作成

    const m = String(d.getMinutes()).padStart(2, '0'); //文字列にして指定の桁数を取得、満たない場合０で埋める

    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`; //時間を表示
    timeoutId = setTimeout(() => {
        countUp();
    }, 10); //10ミリ秒毎に時間を取得
}

//startボタンを押したとき
start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
});

//stopボタンを押したときにsetTimeout()が止まる
timeout.addEventListener('click', () => {
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime; //タイマーが走っていた時間 ＝ タイマーが走っていた時間 ＋ 現在時刻 ー startボタンを押した時刻
});

//resetボタンを押したとき
reset.addEventListener('click', () => {
    timer.textContent = '00:00.000';
    elapsedTime = 0;
});

//ボタンの有効・無効の切り替え
start.addEventListener('click', () => {
    start.disabled = true;
    timeout.disabled = false;
    reset.disabled = true;
});

timeout.addEventListener('click', () => {
    start.disabled = false;
    timeout.disabled = true;
    reset.disabled = false;
});

reset.addEventListener('click', () => {
    start.disabled = false;
    timeout.disabled = true;
    reset.disabled = true;
});




