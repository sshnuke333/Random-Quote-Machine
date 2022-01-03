import React from 'react';
import { getQuoteData } from './components/getQuoteData';
import { Button } from './components/Button';

export default function App() {
    return (
        <div id="quote-box">
            <p id="text"></p>
            <p id="author"></p>
            <Button getNewQuote={getQuoteData} />
            <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
        </div>
    );
}
