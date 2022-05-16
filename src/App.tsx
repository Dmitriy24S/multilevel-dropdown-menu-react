import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";
import { IoCaretDown } from "react-icons/io5";
import "./App.css";

function App() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState("auto");

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className="App bg-slate-900 min-h-screen">
      <header className="bg-slate-700 border-b border-b-slate-500 p-4 shadow-xl">
        {/* CSS Transition nav dropdown */}
        <div className="header-content-container text-white flex gap-4 items-center justify-between max-w-5xl mx-auto">
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
                if (!isDropdownMenuOpen) {
                  setActiveMenu("main");
                  setIsDropdownMenuOpen(true);
                }
              }}
              onMouseLeave={() => setIsDropdownMenuOpen(false)}
            >
              <button
                aria-label="dropdown menu"
                className={`bg-slate-600 px-3.5 py-3.5 rounded-full cursor-pointer hover:bg-slate-500 flex after:w-full after:absolute after:-bottom-4 after:left-0 after:h-4 ${
                  isDropdownMenuOpen && "bg-slate-500"
                }`}
                onClick={() => {
                  setIsDropdownMenuOpen((prev) => !prev);
                  setActiveMenu("main");
                }}
              >
                <IoCaretDown />
              </button>
              <CSSTransition
                classNames="dropdown-container"
                in={isDropdownMenuOpen}
                timeout={250}
                mountOnEnter
                unmountOnExit
                onEnter={calcHeight}
              >
                <ul
                  className="dropdown absolute z-10 top-14 bg-slate-600 border border-slate-500 left-0 right-0 mx-auto flex flex-col min-w-[10rem]"
                  style={{ height: menuHeight }}
                >
                  <CSSTransition
                    in={activeMenu === "main"}
                    timeout={500}
                    classNames="menu-primary"
                    unmountOnExit
                    onEnter={calcHeight}
                  >
                    <ul className="menu w-full ">
                      <li>
                        <a
                          href="#/"
                          className="hover:bg-slate-500 block w-full p-4 "
                        >
                          My profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#/"
                          className="hover:bg-slate-500 block w-full p-4"
                          onClick={() => setActiveMenu("settings")}
                        >
                          Settings &gt;
                        </a>
                      </li>
                      <li>
                        <a
                          href="#/"
                          className="hover:bg-slate-500 block w-full p-4"
                        >
                          Languages &gt;
                        </a>
                      </li>
                      <li>
                        <a
                          href="#/"
                          className="hover:bg-slate-500 block w-full p-4"
                        >
                          Other
                        </a>
                      </li>
                    </ul>
                  </CSSTransition>
                  <CSSTransition
                    in={activeMenu === "settings"}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                  >
                    <ul className="menu">
                      <li>
                        <a
                          href="#/"
                          className="hover:bg-slate-500 w-full p-4 block"
                          onClick={() => setActiveMenu("main")}
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
                  </CSSTransition>
                </ul>
              </CSSTransition>
            </li>
          </ul>
          <h2>CSS Transition Dropdown</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
