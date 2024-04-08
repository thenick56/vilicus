const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

document.getElementById('quote').textContent = randomQuote;
