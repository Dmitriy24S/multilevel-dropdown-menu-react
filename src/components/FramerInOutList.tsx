import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = Array.from(Array(10).keys()).map((i) => i + 1);

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    transition: { type: "spring", bounce: 0.4 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.4 },
  },
};

const FramerInOutList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="in-out-list-container mb-[40rem]">
      <div className="button-wrapper">
        <button
          className="bg-white text-blue-500 font-bold px-3 py-2 rounded border-2 border-blue-500 hover:text-white hover:bg-blue-500 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide list" : "Show list"}
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.ul
            className="item-list"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {items.map((value, index) => (
              <motion.li className="item" variants={itemVariants}>
                {value}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FramerInOutList;
