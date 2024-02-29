import {FC} from 'react';
import * as ST from './styles.ts';

type CardProps = {
    cardName: string;
    cardSurname: string;
    forwardedRef: (node?: Element | null) => void
}

const Card: FC<CardProps> = ({cardName, cardSurname, forwardedRef}) => {
    return (
        <ST.CardWrapper ref={forwardedRef}>
            <ST.CardName>Имя: {cardName}</ST.CardName>
            <ST.CardName>Фамилия: {cardSurname}</ST.CardName>
        </ST.CardWrapper>
    );
}

export {Card};