let q1 = document.getElementById('q1'); let q2 = document.getElementById('q2'); let q3 = document.getElementById('q3'); let q4 = document.getElementById('q4'); let q5 = document.getElementById('q5');
let kan = document.querySelector('.kan-wrapper');
let han1 = document.getElementById('1han');

let fu_result = document.getElementById('fu_result');
let han_result = document.getElementById('han-result');
let point = document.getElementById('ten-result');
let pointmove = document.getElementById('ten-idou');

// 選択肢による項目のアクティブ・パッシブ化
let Y_N = document.querySelectorAll('.Y-N');
for (i = 0; i < Y_N.length; i++) {
  Y_N[i].addEventListener('change', function () {
    if (document.getElementById('q3-no').checked === true) {
      q4.classList.remove('disabled');
      q5.classList.remove('disabled');
    }
    if (document.getElementById('q3-yes').checked === true) {
      q4.classList.add('disabled');
      q5.classList.add('disabled');
    }
    if (document.getElementById('q1-no').checked === true) {
      q3.classList.remove('disabled');
      q2.classList.add('disabled');
    }
    if (document.getElementById('q1-yes').checked === true) {
      q2.classList.remove('disabled');
      q3.classList.add('disabled');
      q4.classList.add('disabled');
      q5.classList.add('disabled');
    }
  });
}

// 槓子の有無と値取得
let ankan1Count = 0, ankan2Count = 0, minkan1Count = 0, minkan2Count = 0; // 初期値
let ankan1 = document.getElementById('ankan1'); let ankan2 = document.getElementById('ankan2'); let minkan1 = document.getElementById('minkan1'); let minkan2 = document.getElementById('minkan2');

document.getElementById('ankan1+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { ankan1Count++; ankan1.innerHTML = ankan1Count; }
});
document.getElementById('ankan1-').addEventListener('click', function () {
  ankan1Count = 0; ankan1.innerHTML = ankan1Count;
});
document.getElementById('ankan2+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { ankan2Count++; ankan2.innerHTML = ankan2Count; }
});
document.getElementById('ankan2-').addEventListener('click', function () {
  ankan2Count = 0; ankan2.innerHTML = ankan2Count;
});
document.getElementById('minkan1+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { minkan1Count++; minkan1.innerHTML = minkan1Count; }
});
document.getElementById('minkan1-').addEventListener('click', function () {
  minkan1Count = 0; minkan1.innerHTML = minkan1Count;
});
document.getElementById('minkan2+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { minkan2Count++; minkan2.innerHTML = minkan2Count; }
});
document.getElementById('minkan2-').addEventListener('click', function () {
  minkan2Count = 0; minkan2.innerHTML = minkan2Count;
});

// 翻数表示
let han_su = 1; //初期値
let han = document.getElementsByName('han');
for (i = 0; i < han.length; i++) {
  han[i].addEventListener('change', function () {
    han_su = this.value;
  })
}

// ●得点計算と表示●
document.getElementById('calculation').addEventListener('click', function () {
  //  ①符数取得
  if (document.getElementById('q1-yes').checked === true) {
    if (document.getElementById('q2-yes').checked === true) { fu_su = 40; }
    if (document.getElementById('q2-no').checked === true) { fu_su = 30; }
  }
  if (document.getElementById('q1-no').checked === true) {
    if (document.getElementById('q3-yes').checked === true) { fu_su = 25; }
    if (document.getElementById('q3-no').checked === true) {
      if (document.getElementById('q4-yes').checked === true) {
        if (document.getElementById('q5-yes').checked === true) { fu_su = 20; }
        if (document.getElementById('q5-no').checked === true) { fu_su = 30; }
      }
      if (document.getElementById('q4-no').checked === true) {
        if (document.getElementById('q5-yes').checked === true) { fu_su = 30; }
        else if (document.getElementById('q5-no').checked === true) { fu_su = 40; }
      }
    }
  }

  //  ②カンによる符をカウント
  let kan_fu = ankan1Count * 30 + ankan2Count * 20 + minkan1Count * 20 + minkan2Count * 10;

  if (document.getElementById('q3-yes').checked === true || document.getElementById('q4-yes').checked === true) {
    kan_fu = 0;
    fu_su += kan_fu;
  }
  else {
    fu_su += kan_fu;
  }
  fu_result.innerHTML = fu_su;
  han_result.innerHTML = han_su;

  //  ③符数と翻数に応じた結果表示
  if (document.getElementById('oya').checked === true) {
    if (han_su == 1) {
      if (fu_su == 20) { alert('20符1翻のアガりはありません'); return false; }
      if (fu_su == 25) { alert('25符1翻のアガりはありません'); return false; }
      if (fu_su == 30) { point.innerHTML = '1500'; pointmove.innerHTML = '(ツモアガりなら500オール)'; }
      if (fu_su == 40) { point.innerHTML = '2000'; pointmove.innerHTML = '(ツモアガりなら700オール)'; }
      if (fu_su == 50) { point.innerHTML = '2400'; pointmove.innerHTML = '(ツモアガりなら800オール)'; }
      if (fu_su == 60) { point.innerHTML = '2900'; pointmove.innerHTML = '(ツモアガりなら1000オール)'; }
      if (fu_su == 70) { point.innerHTML = '3400'; pointmove.innerHTML = '(ツモアガりなら1200オール)'; }
      if (fu_su == 80) { point.innerHTML = '3900'; pointmove.innerHTML = '(ツモアガりなら1300オール)'; }
      if (fu_su == 90) { point.innerHTML = '4400'; pointmove.innerHTML = '(ツモアガりなら1500オール)'; }
      if (fu_su == 100) { point.innerHTML = '4800'; pointmove.innerHTML = '(ツモアガりなら1600オール)'; }
      if (fu_su == 110) { point.innerHTML = '5300'; pointmove.innerHTML = '(ツモアガりなら1800オール)'; }
    }
    if (han_su == 2) {
      if (fu_su == 20) { point.innerHTML = '2000'; pointmove.innerHTML = '(700オール)'; }
      if (fu_su == 25) { point.innerHTML = '2400'; pointmove.innerHTML = '' }
      if (fu_su == 30) { point.innerHTML = '2900'; pointmove.innerHTML = '(ツモアガりなら1000オール)'; }
      if (fu_su == 40) { point.innerHTML = '3900'; pointmove.innerHTML = '(ツモアガりなら1300オール)'; }
      if (fu_su == 50) { point.innerHTML = '4800'; pointmove.innerHTML = '(ツモアガりなら1600オール)'; }
      if (fu_su == 60) { point.innerHTML = '5800'; pointmove.innerHTML = '(ツモアガりなら2000オール)'; }
      if (fu_su == 70) { point.innerHTML = '6800'; pointmove.innerHTML = '(ツモアガりなら2300オール)'; }
      if (fu_su == 80) { point.innerHTML = '7700'; pointmove.innerHTML = '(ツモアガりなら2600オール)'; }
      if (fu_su == 90) { point.innerHTML = '8700'; pointmove.innerHTML = '(ツモアガりなら2900オール)'; }
      if (fu_su == 100) { point.innerHTML = '9600'; pointmove.innerHTML = '(ツモアガりなら3200オール)'; }
      if (fu_su == 110) { point.innerHTML = '10600'; pointmove.innerHTML = '(ツモアガりなら3600オール)'; }
    }
    if (han_su == 3) {
      if (fu_su == 20) { point.innerHTML = '3900'; pointmove.innerHTML = '(1300オール)'; }
      if (fu_su == 25) { point.innerHTML = '4800'; pointmove.innerHTML = '(ツモアガりなら1600オール)'; }
      if (fu_su == 30) { point.innerHTML = '5800'; pointmove.innerHTML = '(ツモアガりなら2000オール)'; }
      if (fu_su == 40) { point.innerHTML = '7700'; pointmove.innerHTML = '(ツモアガりなら2600オール)'; }
      if (fu_su == 50) { point.innerHTML = '9600'; pointmove.innerHTML = '(ツモアガりなら3200オール)'; }
      if (fu_su >= 60) { point.innerHTML = '12000'; pointmove.innerHTML = '(ツモアガりなら4000オール)'; }
    }
    if (han_su == 4) {
      if (fu_su == 20) { point.innerHTML = '7700'; pointmove.innerHTML = '(2600オール)'; }
      if (fu_su == 25) { point.innerHTML = '9600'; pointmove.innerHTML = '(ツモアガりなら3200オール)'; }
      if (fu_su >= 30) { point.innerHTML = '11600'; pointmove.innerHTML = '(ツモアガりなら3900オール)'; }
    }

    if (han_su == 5) { point.innerHTML = '12000'; pointmove.innerHTML = '(ツモアガりなら4000オール)'; }
    if (han_su >= 6) { point.innerHTML = '18000'; pointmove.innerHTML = '(ツモアガりなら6000オール)'; }
    if (han_su >= 8) { point.innerHTML = '24000'; pointmove.innerHTML = '(ツモアガりなら8000オール)'; }
    if (han_su >= 11) { point.innerHTML = '36000'; pointmove.innerHTML = '(ツモアガりなら12000オール)'; }
    if (han_su >= 13) { point.innerHTML = '48000'; pointmove.innerHTML = '(ツモアガりなら16000オール)'; }
  }
  if (document.getElementById('ko').checked === true) {
    if (han_su == 1) {
      if (fu_su == 20) { alert('20符1翻のアガりはありません'); return false; }
      if (fu_su == 25) { alert('25符1翻のアガりはありません'); return false; }
      if (fu_su == 30) { point.innerHTML = '1000'; pointmove.innerHTML = '(ツモアガりなら300,500)'; }
      if (fu_su == 40) { point.innerHTML = '1300'; pointmove.innerHTML = '(ツモアガりなら400,700)'; }
      if (fu_su == 50) { point.innerHTML = '1600'; pointmove.innerHTML = '(ツモアガりなら400,800)'; }
      if (fu_su == 60) { point.innerHTML = '2000'; pointmove.innerHTML = '(ツモアガりなら500,1000)'; }
      if (fu_su == 70) { point.innerHTML = '2300'; pointmove.innerHTML = '(ツモアガりなら600,1200)'; }
      if (fu_su == 80) { point.innerHTML = '2600'; pointmove.innerHTML = '(ツモアガりなら700,1300)'; }
      if (fu_su == 90) { point.innerHTML = '2900'; pointmove.innerHTML = '(ツモアガりなら800,1500)'; }
      if (fu_su == 100) { point.innerHTML = '3200'; pointmove.innerHTML = '(ツモアガりなら800,1600)'; }
      if (fu_su == 110) { point.innerHTML = '3600'; pointmove.innerHTML = '(ツモアガりなら900,1800)'; }
    }
    if (han_su == 2) {
      if (fu_su == 20) { point.innerHTML = '1300'; pointmove.innerHTML = '(400,700)'; }
      if (fu_su == 25) { point.innerHTML = '1600'; pointmove.innerHTML = ''; }
      if (fu_su == 30) { point.innerHTML = '2000'; pointmove.innerHTML = '(ツモアガりなら500,1000)'; }
      if (fu_su == 40) { point.innerHTML = '2600'; pointmove.innerHTML = '(ツモアガりなら700,1300)'; }
      if (fu_su == 50) { point.innerHTML = '3200'; pointmove.innerHTML = '(ツモアガりなら800,1600)'; }
      if (fu_su == 60) { point.innerHTML = '3900'; pointmove.innerHTML = '(ツモアガりなら1000,2000)'; }
      if (fu_su == 70) { point.innerHTML = '4500'; pointmove.innerHTML = '(ツモアガりなら1200,2300)'; }
      if (fu_su == 80) { point.innerHTML = '5200'; pointmove.innerHTML = '(ツモアガりなら1300,2600)'; }
      if (fu_su == 90) { point.innerHTML = '5800'; pointmove.innerHTML = '(ツモアガりなら1500,2900)'; }
      if (fu_su == 100) { point.innerHTML = '6400'; pointmove.innerHTML = '(ツモアガりなら1600,3200)'; }
      if (fu_su == 110) { point.innerHTML = '7100'; pointmove.innerHTML = '(ツモアガりなら1800,3600)'; }
    }
    if (han_su == 3) {
      if (fu_su == 20) { point.innerHTML = '2600'; pointmove.innerHTML = '(700,1300)'; }
      if (fu_su == 25) { point.innerHTML = '3200'; pointmove.innerHTML = '(ツモアガりなら800,1600)'; }
      if (fu_su == 30) { point.innerHTML = '3900'; pointmove.innerHTML = '(ツモアガりなら1000,2000)'; }
      if (fu_su == 40) { point.innerHTML = '5200'; pointmove.innerHTML = '(ツモアガりなら1300,2600)'; }
      if (fu_su == 50) { point.innerHTML = '6400'; pointmove.innerHTML = '(ツモアガりなら1600,3200)'; }
      if (fu_su == 60) { point.innerHTML = '7700'; pointmove.innerHTML = '(ツモアガりなら2000,3900)'; }
      if (fu_su >= 70) { point.innerHTML = '8000'; pointmove.innerHTML = '(ツモアガりなら2000,4000)'; }
    }
    if (han_su == 4) {
      if (fu_su == 20) { point.innerHTML = '5200'; pointmove.innerHTML = '1300,2600'; }
      if (fu_su == 25) { point.innerHTML = '6400'; pointmove.innerHTML = '(ツモアガりなら1600,3200)'; }
      if (fu_su == 30) { point.innerHTML = '7700'; pointmove.innerHTML = '(ツモアガりなら2000,3900)'; }
      if (fu_su >= 40) { point.innerHTML = '8000'; pointmove.innerHTML = '(ツモアガりなら2000,4000)'; }
    }

    if (han_su == 5) { point.innerHTML = '8000'; pointmove.innerHTML = '(ツモアガりなら2000,4000)'; }
    if (han_su >= 6) { point.innerHTML = '12000'; pointmove.innerHTML = '(ツモアガりなら3000,6000)'; }
    if (han_su >= 8) { point.innerHTML = '16000'; pointmove.innerHTML = '(ツモアガりなら4000,8000)'; }
    if (han_su >= 11) { point.innerHTML = '24000'; pointmove.innerHTML = '(ツモアガりなら6000,12000)'; }
    if (han_su >= 13) { point.innerHTML = '32000'; pointmove.innerHTML = '(ツモアガりなら8000,16000)'; }
  }
  // ロンアガりのとき（）を表示させないようにしたいけど選びなおしたときに融通がきかない
  // if (document.getElementById('q5-no').checked === true ) {
  //   pointmove.innerHTML = '';
  // }
  document.getElementById('result_display').style.display = 'initial';
  document.getElementById('reset').style.display = 'initial';

})

// リセット
document.getElementById('reset').addEventListener('click', function () {
  let radioCheck = document.querySelectorAll('input:checked');
  for (let i = 0; i < radioCheck.length; i++) {
    radioCheck[i].checked = false; //ラジオボタン解除
  }
  // 結果削除
  fu_result.innerHTML = '？';
  han_result.innerHTML = '？';
  point.innerHTML = '？';
  pointmove.innerHTML = '';
  document.getElementById('result_display').style.display = 'none';
  document.getElementById('reset').style.display = 'none';
  // 初期値に戻す
  fu_su = 20;
  ankan1Count = 0; ankan2Count = 0; minkan1Count = 0; minkan2Count = 0;
  han1.checked = true; han_su = 1;
  document.getElementById('ko').checked = true;
  // 槓子の値を戻す
  let kansCount = document.querySelectorAll('.count-value')
  for (i = 0; i < kansCount.length; i++) {
    kansCount[i].innerHTML = '0';
  };
  // Q1を初期化
  q2.classList.add('disabled'); q3.classList.add('disabled'); q4.classList.add('disabled'); q5.classList.add('disabled');
});

//トップへ戻る
document.getElementById('to-top').addEventListener('click', function () {
  scrollTo(0, 0);
})
