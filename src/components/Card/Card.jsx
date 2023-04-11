import React, { useState, useEffect } from 'react';
import EachCard from '../EachCard/EachCard';

const Card = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('./CardData.json')
            .then((response) => response.json())
            .then((data) => setCardData(data));
    }, []);

    return (
        <div>
            {
                cardData.slice(0, 4).map(card => <EachCard eachCard = {card}></EachCard>)
            }
        </div>
    )
};

export default Card;
