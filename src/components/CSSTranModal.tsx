import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { IoCloseOutline } from "react-icons/io5";

const CSSTranModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="modal-example-container">
      <button
        className="bg-white text-blue-500 font-medium transition-colors rounded px-3 py-2.5 hover:bg-blue-500 hover:text-white"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Open Modal
      </button>
      <CSSTransition
        timeout={300}
        unmountOnExit
        mountOnEnter
        in={isModalOpen}
        classNames="modal-container"
      >
        <section className="modal">
          <div
            className="modal-overlay"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="modal-content relative">
            <button
              className="absolute top-4 right-4 text-2xl transition-opacity hover:opacity-60 "
              aria-label="Close modal"
              onClick={() => setIsModalOpen(false)}
            >
              <IoCloseOutline />
            </button>
            <p className="font-medium tracking-wider">This is the modal.</p>
          </div>
        </section>
      </CSSTransition>
    </div>
  );
};

export default CSSTranModal;
