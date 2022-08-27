const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}


// Show new quote
function newQuote() {
    showLoadingSpinner();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // check if author field is blank and replace it with 'unknown'
    if(!quote.author) {
        quote.author = 'Unknown';
    } else {
        quoteAuthor.textContent = quote.author;
    }
    // check quote length to determine styling
    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('remove');
    }
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

function tweet() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${quoteAuthor.innerText}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweet);

newQuote();

