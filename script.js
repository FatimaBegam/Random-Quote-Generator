// Array of quotes
const quotes = [
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius"
    }
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Function to display a new random quote
  function displayNewQuote() {
    const { text, author } = getRandomQuote();
    document.getElementById("quote-text").textContent = text;
    document.getElementById("author").textContent = `— ${author}`;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById("new-quote").addEventListener("click", displayNewQuote);
  
  // Initial quote display
  displayNewQuote();
  