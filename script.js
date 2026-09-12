const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const flowerScreen = document.getElementById('flower-screen');
const mainScreen = document.getElementById('main-screen');
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

// 1. عند الضغط على الظرف
envelope.addEventListener('click', () => {
  envelopeScreen.classList.remove('active');
  flowerScreen.classList.add('active');

  // الانتقال للواجهة الرئيسية بعد انتهاء انيميشن الورد (1.5 ثانية)
  setTimeout(() => {
    flowerScreen.classList.remove('active');
    mainScreen.classList.add('active');
  }, 1500);
});

// 2. فتح وإغلاق القائمة الجانبية
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// 3. تحديث الأغنية الشغالة
function playTrack(trackName) {
  document.getElementById('status-bar').innerText = 'Starting: ' + trackName;
}
