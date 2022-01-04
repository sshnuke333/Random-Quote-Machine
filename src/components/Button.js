import React from 'react';
import { NewQuote } from './Button.styles';

export const Button = ({ getNewQuote = (f) => f }) => {
    return (
        <NewQuote id="new-quote" type="button" onClick={getNewQuote}>
            New Quote
        </NewQuote>
    );
};
