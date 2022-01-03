import React from 'react';
import { getQuoteData } from './components/getQuoteData';
import { Button } from './components/Button';
import { Twitter } from 'grommet-icons';

export default function App() {
    return (
        <div id="quote-box">
            <p id="text"></p>
            <p id="author"></p>
            <Button getNewQuote={getQuoteData} />
            <a id="tweet-quote" target="_blank">
                <Twitter size="50px" color="black" />
            </a>
        </div>
    );
}
