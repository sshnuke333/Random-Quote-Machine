import styled from 'styled-components';

export const Figure = styled.figure`
    background-color: #d9cdcd70;
    min-width: 40vw;
    max-width: 80vw;
    min-height: 50vh;
    max-height: 90vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const Quote = styled.blockquote`
    margin: 10px;
    padding: 10px;
    font-size: 40px;
    text-align: center;
`;

export const FigCaption = styled.figcaption`
    font-size: 30px;
    text-align: right;
`;

export const Tweet = styled.a`
    margin: 10px;
`;
