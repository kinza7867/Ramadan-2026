const ayatData = [
  { ayat: "Surah Al-Baqarah 2:2",
    translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
    lesson: "Trust the Quran as complete guidance." },

  { ayat: "Surah Al-Baqarah 2:45",
    translation: "Seek help through patience and prayer.",
    lesson: "In every difficulty, turn to prayer." },

  { ayat: "Surah Al-Imran 3:159",
    translation: "Indeed, Allah loves those who rely upon Him.",
    lesson: "Always trust Allah’s plan." },

  { ayat: "Surah Ash-Sharh 94:6",
    translation: "Indeed, with hardship comes ease.",
    lesson: "Every difficulty has relief." },

  { ayat: "Surah Al-Ankabut 29:69",
    translation: "And those who strive for Us – We will surely guide them.",
    lesson: "Make effort, Allah guides you." }
];

// Duplicate to make 30 days
while (ayatData.length < 30) {
  ayatData.push(ayatData[ayatData.length % 5]);
}

const calendar = document.getElementById("calendar");
const today = new Date().getDate();

for (let i = 1; i <= 30; i++) {
  const day = document.createElement("div");
  day.classList.add("day");
  day.innerText = "Day " + i;

  if (i === today) {
    day.classList.add("today");
  }

  day.onclick = function() {
    showAyat(i);
  };

  calendar.appendChild(day);
}

function showAyat(day) {
  document.getElementById("ayatDisplay").style.display = "block";
  document.getElementById("dayTitle").innerText = "Ramadan Day " + day;

  document.getElementById("ayat").innerText = "📖 " + ayatData[day-1].ayat;
  document.getElementById("translation").innerText = "📝 " + ayatData[day-1].translation;
  document.getElementById("lesson").innerText = "✨ Lesson: " + ayatData[day-1].lesson;

  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function scrollToCalendar() {
  document.getElementById("calendarSection").scrollIntoView({ behavior: "smooth" });
}