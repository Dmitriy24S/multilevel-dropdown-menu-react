import { useState } from "react";
// import { motion } from "framer-motion";
import { dataText } from "../dataText";
import { motion, AnimatePresence } from "framer-motion";

const FramerListHeight = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    if (index === activeItemIndex) {
      // If item already selected - deselect
      setActiveItemIndex(-1);
    } else {
      setActiveItemIndex(index);
    }
  };

  return (
    <div className="list-auto-height-container">
      <ul className="list flex flex-col gap-4">
        {dataText.map((item, index) => {
          return (
            <li key={index}>
              <button
                aria-label="expand text"
                className="text-black text-left bg-yellow-400 hover:bg-yellow-300 p-4 rounded transition-colors min-w-full"
                onClick={() => handleItemClick(index)}
              >
                <h5 className="font-bold">{item.title}</h5>
                <AnimatePresence exitBeforeEnter initial={false}>
                  {/* prevent/hide height animation on initial load */}
                  <motion.div
                    className="body-text-container overflow-hidden"
                    animate={{ height: activeItemIndex === index ? "auto" : 0 }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.25,
                    }}
                  >
                    <p className="pt-2.5">{item.bodyText}</p>
                  </motion.div>
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FramerListHeight;
