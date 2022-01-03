import axios from 'axios';

export const getQuoteData = async function () {
    try {
        const response = await axios.get(
            'https://api.quotable.io/random?maxLength=200'
        );
        const author = response.data.author;
        const text = response.data.content;
        const textDisplay = document.getElementById('text');
        const authorDisplay = document.getElementById('author');
        const tweetIntent = document.getElementById('tweet-quote');
        textDisplay.innerText = text;
        authorDisplay.innerText = author;
        tweetIntent.href = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    } catch (error) {
        console.error(error);
        return error;
    }
};
