import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import { generalModalControl } from "../../../store/Slices/settingSlice";

export const Modal = () => {
  const modal = useSelector(state => state.settings.generalModal);
  const dispatch = useDispatch();

  const closeModal = ev => {
    console.log('close modal');
    if (ev) {
      ev.target === ev.currentTarget && dispatch(generalModalControl({type: 'close'}));
    } else {
      dispatch(generalModalControl({type: 'close'}));
    }
  }
  
  const buttonHandler = (cb, close) => {
    cb && cb();
    close && closeModal();
  }

  return (
    <Transition
      in={modal.open}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      {
        state => (
          <div className={`login-wrapper align-items-start ${state}`} onClick={closeModal}>
            <div className="login-container p-4 mt-5">
              <div className="container">
                <div className="d-flex justify-content-end">
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <h3 className='text-center'>{modal.title}</h3>
                <div className="modal-form-container mt-4">
                  {
                    modal.body && modal.body !== ''
                    ?
                    <div className="">
                      <p>{modal.body}</p>
                    </div>
                    : ''
                  }
                </div>
                <div className="d-flex justify-content-between mt-5 border-top pt-3">
                  {modal.buttons.map(b => <button className={`btn ${b.class}`} onClick={() => buttonHandler(b.click, b.close)}>{b.text}</button>)}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Transition>
  );
};
