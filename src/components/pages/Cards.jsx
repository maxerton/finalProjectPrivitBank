import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generalModalControl } from '../../store/Slices/settingSlice';
import { addCard, changeCardName, insertNewMoney } from '../../store/Slices/cardsSlice';

const Cards = () => {
  const cards = useSelector(state => state.cards.cards);
  const currentUser = useSelector(state => state.permSetting.currentUser);
  const userCards = cards.filter(card => card.userId === currentUser.id);

  const [redactName, setRedactName] = useState({ currentCard: null, currentValue: '' });

  const dispatch = useDispatch();

  const addCardF = () => {
    dispatch(addCard({
      userId: currentUser.id,
      nameCard: 'Універсальна'
    }))
  }

  const editValueRN = val => {
    setRedactName({ ...redactName, currentValue: val })
  }

  const editName = (card) => {
    if (card.cardId === redactName.currentCard) {
      dispatch(changeCardName({ cardId: card.cardId, name: redactName.currentValue }));
      setRedactName({ ...redactName, currentCard: null })
    } else {
      setRedactName({ currentCard: card.cardId, currentValue: '' })
    }
  }

  const addNewCardHandler = () => {
    dispatch(generalModalControl({
      type: 'open', title: 'Додати нову картку?', body: null, buttons: [
        { text: 'Так', click: addCardF, close: true, class: 'btn-success' },
        { text: 'Ні', close: true, class: 'btn-danger' }
      ]
    }))
  }

  const addMoney = cardId => {
    dispatch(insertNewMoney({cardId, value: 100}));
  }

  return (
    <div className='container-fluid'>
      <button className='btn w-100 btn-dark mb-3' onClick={addNewCardHandler}>Додати картку</button>
      <div className="row">
        {
          userCards.map(card => (
            <div className="col-12 col-md-6">
              <div className="card w-100 my-3">
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between mb-3">
                    {
                      !redactName.currentCard || redactName.currentCard !== card.cardId
                        ? card.nameCard
                        : <input className='form-control' defaultValue={card.nameCard} onChange={ev => editValueRN(ev.target.value)} />
                    } <button className='btn' onClick={() => editName(card)}><i className="fa-solid fa-pen"></i>
                    </button></h5>
                  <h6 className="card-subtitle mb-2 text-muted" onClick={() => navigator.clipboard.writeText(card.cardId)}>{card.cardId}</h6>
                  <p className="card-text">Залишок: <b>{card.statement}</b> UAH</p>
                  <button className='btn btn-secondary' onClick={() => addMoney(card.cardId)}>Поповнити на 100 грн</button>
                  
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Cards;
