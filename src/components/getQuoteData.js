import axios from 'axios';

export const getQuoteData = async function () {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const author = response.data.author;
        const text = response.data.content;
        const textDisplay = document.getElementById('text');
        const authorDisplay = document.getElementById('author');
        textDisplay.innerText = text;
        authorDisplay.innerText = author;
    } catch (error) {
        console.error(error);
        return error;
    }
};
