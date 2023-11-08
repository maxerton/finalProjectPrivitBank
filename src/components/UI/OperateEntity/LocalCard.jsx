
const LocalCard = ({ card, isSelected, toggleSelection }) => {

  return (
    <div className="col-12 col-md-6 flex-overflow-item" style={{cursor: 'pointer'}} onClick={toggleSelection}>
      <div className={"card " + (isSelected ? 'bg-dark-subtle' : '')}>
        <div className="card-body pb-1">
          <h4 className='mb-3'>{card.nameCard}</h4>
          <h5>{card.cardId}</h5>
          <h5 className='mt-3'>На рахунку: {card.statement}</h5>
        </div>
      </div>
    </div>
  );
};

export default LocalCard;