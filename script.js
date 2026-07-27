document.addEventListener("DOMContentLoaded", function() {

console.log("JS работает");

let password = prompt("Введите пароль:");

if (password === "31.07.1991") {
  alert("Доступ разрешен!");
  // Удаляем CSS-класс hidden, и контент плавно появляется
  document.getElementById("secret-block").classList.remove("hidden");
} else {
  alert("Неверный пароль.");
  window.location.href = "https://google.com";
}

document.addEventListener("DOMContentLoaded", function() {
  
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