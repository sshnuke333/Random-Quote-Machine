import React from 'react';
import Button from './components/Button';

export default function App() {
    return (
        <div id="quote-box">
            <p id="text"></p>
            <p id="author"></p>
            <Button />
            <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
        </div>
    );
}
