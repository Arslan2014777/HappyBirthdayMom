document.addEventListener("DOMContentLoaded", function() {

console.log("JS работает");

let password = prompt("Введите пароль:");

if (password === "31.07.1991") {
  alert("Доступ разрешен!");
  // Удаляем CSS-класс hidden, и контент плавно появляется
} else {
  alert("Неверный пароль.");
  window.location.href = "https://google.com";
}
  
  // Get text from HTML element
  const autoTyping = document.querySelector(".codewheel-att");
  const text = autoTyping.innerHTML.replace(/\s+/g, " ").trim();
  
  autoTyping.innerHTML = "";
  let index = 0;
  
  // Setup Typing Text Function
  const interval = setInterval(function() {
    
    autoTyping.innerHTML = text.substring(0, index++);
    
    if (index === text.length + 1) {
      clearInterval(interval);
      
      // Call blinking cursor after typed text
      BlinkingCursor();
    }
    
  }, 75);
  
  function BlinkingCursor() {
    
    // Blinking Cursor
    const cssCode = `
            .codewheel-att::after {
                animation: cursorBlink 1s ease-out infinite;
            }
        `;
    
    const body = document.body || document.getElementsByTagName("body")[0];
    const style = document.createElement("style");
    style.innerHTML = cssCode;
    
    body.appendChild(style);
  }
  
});

const wishes = [
"❤️ Мама, я тебя очень люблю!",
"🌹 Спасибо за твою доброту!",
"💖 Ты самая лучшая мама на свете!",
"🎂 С днём рождения, любимая мама!",
"🎁 Пусть каждый день приносит счастье!",
"🌸 Пусть все мечты сбываются!",
"☀️ Желаю солнечного настроения!",
"😊 Улыбайся как можно чаще!",
"💐 Желаю крепкого здоровья!",
"🍀 Пусть удача всегда будет рядом!",
"🌈 Пусть жизнь будет яркой и красивой!",
"⭐ Пусть каждый день дарит радость!",
"💝 Спасибо за твою заботу!",
"🎉 Пусть счастье никогда не заканчивается!",
"🩷 Ты — самый дорогой человек!",
"🌷 Пусть сердце всегда будет спокойным!",
"💕 Желаю море любви!",
"🎵 Пусть каждый день звучит любимая музыка!",
"🎊 Пусть будет много приятных сюрпризов!",
"🍫 Желаю сладкой жизни!",
"🌺 Пусть вокруг будут только добрые люди!",
"🌻 Пусть все желания исполняются!",
"💎 Ты настоящий драгоценный человек!",
"🕊️ Желаю мира и гармонии!",
"🌼 Пусть каждый день начинается с улыбки!",
"🍓 Желаю ярких моментов!",
"🎈Пусть настроение всегда будет отличным!",
"🥰 Спасибо за любовь и поддержку!",
"🌟 Пусть удача сопровождает тебя всегда!",
"💞 Желаю бесконечного счастья!",
"🌹 Пусть в доме всегда будет тепло и уют!",
"❤️ Спасибо, что ты моя мама!",
"🎂 Пусть жизнь будет долгой и счастливой!",
"💖 Ты заслуживаешь всего самого лучшего!",
"🌷 Желаю исполнения самых заветных желаний!",
"☕ Пусть каждый день начинается с радости!",
"🌞 Пусть солнце всегда светит для тебя!",
"🎁 Сегодня твой день — наслаждайся им!",
"💐 Желаю любви, счастья и благополучия!",
"🥳 Пусть этот день запомнится надолго!",
"🎇 Ты самая замечательная мама!",
"🌺 Спасибо за твоё большое сердце!",
"💝 Пусть каждый миг приносит радость!",
"🎀 Пусть рядом будут любимые люди!",
"🌹 Будь счастлива сегодня и всегда!",
"🍰 Пусть жизнь будет сладкой, как торт!",
"💖 Пусть здоровье никогда не подводит!",
"🌸 Спасибо за всё, мама!",
"⭐ Ты — моя гордость!",
"❤️ Я всегда буду тебя любить!"
];

function newWish() {
    const random = Math.floor(Math.random() * wishes.length);
    document.getElementById("wish").textContent = wishes[random];
}