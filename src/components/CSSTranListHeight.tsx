import { useRef, useState } from "react";
import { dataText } from "../dataText";

const CSSTranListHeight = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const itemRefs = useRef<(HTMLParagraphElement | null)[]>([]);

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
          const isActive = activeItemIndex === index;
          const height = isActive ? itemRefs.current[index]?.offsetHeight : 0;

          return (
            <li key={index}>
              <button
                aria-label="expand text"
                onClick={() => handleItemClick(index)}
                className="text-left bg-yellow-400 text-black p-4 hover:bg-[hsl(48,98%,64%)] rounded transition-all min-w-full"
              >
                <h5 className="font-bold">{item.title}</h5>
                <div
                  className="body-text-container overflow-hidden transition-all"
                  style={{ height }}
                >
                  <p
                    className="pt-2.5"
                    ref={(ref) => {
                      itemRefs.current[index] = ref;
                    }}
                  >
                    {item.bodyText}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CSSTranListHeight;
