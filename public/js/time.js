const currentDate = new Date();
const currentHour = currentDate.getHours();
let greeting;

if (currentHour >= 5 && currentHour < 12) {
  greeting = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

const placeholderDiv = document.querySelector(".placeholder");
const greetingSpan = document.createElement("span");
greetingSpan.classList.add("Pilih-product");
greetingSpan.style.textAlign = "center";
greetingSpan.textContent = greeting;

placeholderDiv.innerHTML = ""; // Clear the placeholder div
placeholderDiv.appendChild(greetingSpan);
