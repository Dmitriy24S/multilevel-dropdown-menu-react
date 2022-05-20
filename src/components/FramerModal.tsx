import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

const FramerModal = () => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <div className="modal-example-container">
      <button
        className="bg-white text-blue-500 font-medium transition-colors rounded px-3 py-2.5 hover:bg-blue-500 hover:text-white"
        onClick={() => setIsModalOpen2(!isModalOpen2)}
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isModalOpen2 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="modal2 fixed flex items-center justify-center top-0 left-0 w-full h-full"
          >
            <div
              className="modal-overlay2 absolute bg-black opacity-30 h-full left-0 top-0 w-full"
              onClick={() => setIsModalOpen2(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "50px" }}
              transition={{
                opacity: {
                  duration: 0.2, // custom duration for opacity property only
                },
                velocity: 2,
                bounce: 1,
                duration: 0.3,
              }}
              className="modal-content2 relative flex items-center justify-center bg-white text-black rounded z-10 min-w-[300px] min-h-[150px]"
            >
              <button
                className="absolute top-4 right-4 text-2xl transition-opacity hover:opacity-60 "
                aria-label="Close modal"
                onClick={() => setIsModalOpen2(false)}
              >
                <IoCloseOutline />
              </button>
              <p className="font-medium tracking-wider">This is the modal.</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FramerModal;
