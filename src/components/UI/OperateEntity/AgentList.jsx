
const CardsList = ({ agents = [], selectedCards, setSelectedCard }) => {


  const clearSelectedCard = cardId => setSelectedCard(cardId);

  return (
    <div className="row my-3">
      {
        agents.map(el => (
          <div className="col-12 col-md-4 text-center" key={el.num} style={{cursor: 'pointer'}}>
            <div className={`card ${(selectedCards === el.num) ? 'bg-dark-subtle' : ''}`} onClick={clearSelectedCard(el.num)}>
              <div className="card-body">
                <button className='btn-close ms-auto' onClick={() => {}}></button>
                <h4>{el.name}</h4>
                <p>{el.num}</p>
              </div>
            </div>
          </div>
        ))
      }
      {
        agents.length === 0
          ? <p>Немає агентів</p>
          : ''
      }
    </div>
  );
};

export default CardsList;