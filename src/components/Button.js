import React from 'react';
import styled from 'styled-components';

const NewQuote = styled.button`
    font-size: 30px;
    border-radius: 5px;
`;

export const Button = ({ getNewQuote = (f) => f }) => {
    return (
        <NewQuote id="new-quote" type="button" onClick={getNewQuote}>
            New Quote
        </NewQuote>
    );
};
