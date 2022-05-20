import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCaretDown } from "react-icons/io5";
import { isMobile } from "react-device-detect";

const FramerDropdown = () => {
  const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState("main");
  const [menuHeight2, setMenuHeight2] = useState<string | number>("auto");

  // Framer motion dropdown height
  const nodeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (nodeMenuRef.current) {
      console.log(nodeMenuRef?.current?.offsetHeight);
      setMenuHeight2(nodeMenuRef.current.offsetHeight);
    }
    // }, [activeMenu2]);
  }, [activeMenu2, isDropdownMenuOpen2]); // ? isDropdownMenuOpen2 required for auto height to work on 1st try. E.g. animation from main -> to settings menu

  // Handle click outside - close dropdown
  const dropdownMenuRef2 = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If click element outside dropdown menu - close dropdown menu
      if (!dropdownMenuRef2.current?.contains(event.target as Element)) {
        setIsDropdownMenuOpen2(false);
      }
    };
    // Cleanup?
    if (isDropdownMenuOpen2) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownMenuOpen2]);

  return (
    <div className="header-content-container text-white flex flex-col gap-4 items-center bg-slate-700 border-b border-b-slate-500 shadow-xl p-4 w-full">
      <ul className="flex gap-4">
        <li>
          <button className="bg-slate-600 px-4 py-2.5 rounded-full cursor-pointer hover:bg-slate-500">
            +
          </button>
        </li>
        <li>
          <button className="bg-slate-600 px-4 py-2.5 rounded-full cursor-pointer hover:bg-slate-500">
            +
          </button>
        </li>
        <li>
          <button className="bg-slate-600 px-4 py-2.5 rounded-full cursor-pointer hover:bg-slate-500">
            +
          </button>
        </li>
        <li
          className="relative"
          onMouseEnter={() => {
            if (!isDropdownMenuOpen2 && !isMobile) {
              setActiveMenu2("main");
              setIsDropdownMenuOpen2(true);
            }
          }}
          onMouseLeave={() => {
            setIsDropdownMenuOpen2(false);
            setMenuHeight2("auto");
          }}
          ref={dropdownMenuRef2}
        >
          <button
            aria-label="dropdown menu"
            className={`bg-slate-600 px-3.5 py-3.5 rounded-full cursor-pointer hover:bg-slate-500 flex after:w-full after:absolute after:-bottom-4 after:left-0 after:h-4 ${
              isDropdownMenuOpen2 && "bg-slate-500"
            }`}
            onClick={() => {
              setActiveMenu2("main");
              setIsDropdownMenuOpen2((prev) => !prev);
            }}
          >
            <IoCaretDown />
          </button>
          <AnimatePresence>
            {isDropdownMenuOpen2 && (
              <motion.div
                className="dropdown absolute z-10 top-14 bg-slate-600 border border-slate-500 left-0 right-0 mx-auto flex flex-col min-w-[10rem]"
                initial={{ opacity: 0, height: "auto" }}
                animate={{ opacity: 1, height: menuHeight2 }}
                exit={{ opacity: 0, height: "auto" }}
                transition={{ duration: 0.25 }}
              >
                <AnimatePresence exitBeforeEnter initial={false}>
                  {activeMenu2 === "main" && (
                    <motion.div
                      className="menu1"
                      initial={{
                        transform: "translateX(-100%)",
                        position: "absolute",
                      }}
                      animate={{
                        position: "relative",
                        transform: "translateX(0%)",
                      }}
                      exit={{
                        transform: "translateX(-100%)",
                        position: "absolute",
                        transitionEnd: {
                          transform: "translateX(-100%)",
                        },
                      }}
                      transition={{ duration: 0.3 }}
                      ref={nodeMenuRef}
                    >
                      <ul>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 w-full p-4 block"
                          >
                            My profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/"
                            className=" block hover:bg-slate-500 w-min-full p-4"
                            onClick={() => setActiveMenu2("settings")}
                          >
                            Settings &gt;
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 block max-w-full p-4"
                          >
                            Languages &gt;
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 block max-w-full p-4"
                          >
                            Friends
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 block max-w-full p-4"
                          >
                            Other
                          </a>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeMenu2 === "settings" && (
                    <motion.div
                      className="menu2"
                      initial={{
                        transform: "translateX(100%)",
                        position: "absolute",
                      }}
                      animate={{
                        position: "relative",
                        transform: "translateX(0%)",
                      }}
                      exit={{
                        position: "absolute",
                        transform: "translateX(200%)",
                        transitionEnd: {
                          position: "absolute",
                        },
                      }}
                      transition={{ duration: 0.3 }}
                      ref={nodeMenuRef}
                    >
                      <ul>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 w-full p-4 block"
                            onClick={() => setActiveMenu2("main")}
                          >
                            &lt; Back
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 w-full p-4 block"
                          >
                            HTML
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 w-full p-4 block"
                          >
                            CSS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/"
                            className="hover:bg-slate-500 w-full p-4 block"
                          >
                            JavaScript
                          </a>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      </ul>
      <h2>Framer Motion Dropdown</h2>
    </div>
  );
};

export default FramerDropdown;
