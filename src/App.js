import React, { useEffect } from 'react';
import { getQuoteData } from './components/getData';
import { Button } from './components/Button';
import { Twitter } from 'grommet-icons';
import { Figure, FigCaption, Quote, Tweet } from './App.styles';

export default function App() {
    useEffect(() => getQuoteData(), []);
    return (
        <Figure id="quote-box">
            <Quote id="text"></Quote>
            <FigCaption id="author"></FigCaption>
            <Tweet
                id="tweet-quote"
                href="https://twitter.com/intent/tweet"
                target="_blank"
            >
                <Twitter size="30px" color="black" />
            </Tweet>
            <Button getNewQuote={getQuoteData} />
        </Figure>
    );
}
