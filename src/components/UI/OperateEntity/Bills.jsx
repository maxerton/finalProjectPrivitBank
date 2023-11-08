import React, { useState } from 'react';
import CardsList from './CardsList';
import { useDispatch, useSelector } from 'react-redux';
import AgentList from './AgentList';
import SumInput from './SumInput';
import { addOperation } from '../../../store/Slices/historySlice';
import { deduction } from '../../../store/Slices/cardsSlice';

const Bills = () => {
  const [selectedCards, setSelectedCard] = useState();
  const ibans = useSelector(state => state.permSetting.ibans);
  const curUser = useSelector(state => state.permSetting.currentUser);
  const commIbans = ibans.filter(el => el.type === 'communal');
  const [selIB, setSelIB] = useState(commIbans.length > 0 ? commIbans[0].num : '');
  const [sumInput, setSumInput] = useState(0);
  const [commentInput, setCommentInput] = useState('');
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch();

  const transf = () => {
    if (!selectedCards) {
      setWarning('Виберіть картку');
      return
    }

    if (sumInput <= 0.01) {
      setWarning('Переказ має бути додатнім та не дорівнювати 0');
      return
    }

    setWarning('');
    dispatch(deduction({
      value: sumInput,
      cardId: selectedCards
    }));
    const curIban = commIbans.filter(el => el.num === selIB)[0]
    dispatch(addOperation({
      fromType: 'user',
      fromUserName: curUser.name,
      fromUserId: curUser.id,
      fromCardId: selectedCards,

      value: sumInput,
      currency: 'UAH',
      comment: commentInput,

      toType: 'agent',
      toUserName: curIban.name,
      toCardNum: curIban.num,
      toUserId: curIban.id
    }));
    setSumInput(0);
    setCommentInput('');
  }
  
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title my-3 mx-2 text-center">Оплата комунальних послуг</h3>
        </div>
        <div className="card-body">
          <h3>З картки:</h3>
          <CardsList selectedCards={selectedCards} setSelectedCard={setSelectedCard}></CardsList>
          <h3>Виберіть рахунок комунальних послуг:</h3>
          <AgentList agents={commIbans} selectedCards={selIB} setSelectedCard={setSelIB}></AgentList>
          <SumInput sumInput={sumInput} commentInput={commentInput} setCommentInput={setCommentInput} setSumInput={setSumInput} />
          <div className="d-flex align-items-center flex-column mt-3">
            {
              warning !== ''
              ? <p className='text-warning my-2'>{warning}</p>
              : ''
            }
            <button className='btn btn-success' onClick={transf}>Поповнити</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;