import React, { useEffect } from 'react';

const SumInput = ({sumInput, commentInput, setCommentInput, setSumInput}) => {
  useEffect(() => sumInput ? setSumInput(sumInput) : setSumInput(0), [sumInput])
  return (
    <div className="d-flex w-50 align-items-center flex-column mx-auto">
      <div className="justify-content-between my-3">
        <h4 className='me-4'>Сума:</h4>
        <input type="number" className="form-control" min={0} value={sumInput.toString()} onChange={ev => setSumInput(parseInt(ev.target.value))} style={{ minWidth: '10em', flex: '.5 .5' }} />
      </div>
      <div className="justify-content-between my-3">
        <h4 className='me-4'>Коментар:</h4>
        <textarea type="text" className="form-control" value={commentInput} onChange={ev => setCommentInput(ev.target.value)} />
      </div>
    </div>
  );
};

export default SumInput;