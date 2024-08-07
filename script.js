const imgContainer = document.getElementById("img-container");
const reportSpan = document.getElementById("report");
const userTitle = document.getElementById("user-title");
const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');

const userReport = {
  userImage: 'images/image-jeremy.png',
  span: `<span>Report for</span>`,
  userName: 'Jeremy Robson',
  dailyReport: [
    { title: "Work", current: 5, previous: 7 },
    { title: "Play", current: 1, previous: 2 },
    { title: "Study", current: 0, previous: 1 },
    { title: "Exercise", current: 1, previous: 1 },
    { title: "Social", current: 1, previous: 3 },
    { title: "Self Care", current: 0, previous: 1 }
  ],
  weeklyReport: [
    { title: "Work", current: 32, previous: 36 },
    { title: "Play", current: 10, previous: 8 },
    { title: "Study", current: 4,  previous: 7 },
    { title: "Exercise", current: 4, previous: 5 },
    { title: "Social", current: 5, previous: 10 },
    { title: "Self Care", current: 2, previous: 2 }
  ],
  monthlyReport: [
    { title: "Work", current: 103, previous: 128 },
    { title: "Play", current: 23, previous: 29 },
    { title: "Study", current: 13, previous: 19 },
    { title: "Exercise", current: 11, previous: 18 },
    { title: "Social", current: 21, previous: 23 },
    { title: "Self Care", current: 7, previous: 11 }
  ]
}

// Destructure the userReport Obj
const {userImage, span, userName, dailyReport, weeklyReport, monthlyReport} = userReport;
// Add image to the HTML
const imgElement = document.createElement('img');
imgElement.src = userImage;
imgContainer.appendChild(imgElement);

reportSpan.innerHTML += span; 
userTitle.textContent = userName;

function updateStats(stats) {
  for (let i = 0; i < stats.length; i++) {
    const boxTitle = document.getElementById(`title${i}`);
    const currentTime = document.getElementById(`current${i}`);
    const previousTime = document.getElementById(`previous${i}`);

    boxTitle.textContent = stats[i].title;
    currentTime.textContent = `${stats[i].current}hrs`;
    previousTime.textContent = `Last week - ${stats[i].previous}hrs`;
  }
}

function activeBtn(btnId) {
  const btns = document.querySelectorAll('#btns-container .btn');
  btns.forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(btnId).classList.add('active');
}

const showDailyStats = () => {
  updateStats(dailyReport);
  activeBtn('daily-btn');
};

const showWeeklyStats = () => {
  updateStats(weeklyReport);
  activeBtn('weekly-btn');
};

const showMonthlyStats = () => { 
  updateStats(monthlyReport);
  activeBtn('monthly-btn');
};

dailyBtn.addEventListener('click', showDailyStats);
weeklyBtn.addEventListener('click', showWeeklyStats);
monthlyBtn.addEventListener('click', showMonthlyStats);

showWeeklyStats();