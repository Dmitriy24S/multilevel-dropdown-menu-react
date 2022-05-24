import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const CSSTranInOutList = () => {
  const items = Array.from(Array(10).keys()).map((i) => i + 1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitionEnter, setIsTransitionEnter] = useState(false);

  return (
    <section className="in-out-list-container">
      <div className="button-wrapper">
        <button className="button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Hide list" : "Show list"}
        </button>
      </div>

      <CSSTransition
        timeout={500}
        unmountOnExit
        mountOnEnter
        in={isExpanded}
        classNames={{
          enter: "listEnter",
          enterActive: "listEnterActive",
          exit: "listExit",
          exitActive: "listExitActive",
        }}
        onEntered={() => setIsTransitionEnter(true)}
        onExited={() => setIsTransitionEnter(false)}
      >
        <ul>
          {items.map((value, idx) => {
            const delay = isTransitionEnter
              ? (items.length - idx) * 20 // out animation
              : idx * 40; // in animation
            return (
              <li
                key={idx}
                className="item"
                style={{
                  transition: `all 200ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                }}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </section>
  );
};

export default CSSTranInOutList;
