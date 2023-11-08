import React, { useEffect } from 'react';
import LocalCard from './LocalCard';
import { useSelector } from 'react-redux';

const CardsList = ({ selectedCards, setSelectedCard }) => {
  const cards = useSelector(state => state.cards.cards);
  const currentUser = useSelector(state => state.permSetting.currentUser);
  const myCards = cards.filter(c => c.userId === currentUser.id);

  useEffect(() => {
    setSelectedCard(myCards.length > 0 ? myCards[0].cardId : '');
  }, []);

  const clearSelectedCard = cardId => setSelectedCard(cardId);

  return (
    <div className="row flex-overflow-container my-4">
      {
        myCards.map(card => (
          <LocalCard
            key={card.cardId}
            card={card}
            isSelected={selectedCards === card.cardId}
            toggleSelection={() => clearSelectedCard(card.cardId)}
          ></LocalCard>
        ))
      }
      {
        myCards.length === 0
        ? <p>Немає карток</p>
        : ''
      }
    </div>
  );
};

export default CardsList;