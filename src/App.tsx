import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";
import { IoCaretDown, IoCloseOutline } from "react-icons/io5";
import "./App.css";

function App() {
  // CSS Transition
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState("auto");

  // CSS Transition height
  function calcHeight(el: any) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  // Framer motion
  const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState("main");
  const [menuHeight2, setMenuHeight2] = useState<string | number>("auto");
  const nodeMenuRef = useRef<HTMLDivElement | null>(null);

  // Framer motion height
  useEffect(() => {
    if (nodeMenuRef.current) {
      console.log(nodeMenuRef?.current?.offsetHeight);
      setMenuHeight2(nodeMenuRef.current.offsetHeight);
    }
  }, [activeMenu2, isDropdownMenuOpen2]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <div className="App min-h-screen overflow-x-hidden">
      <main className="p-4 flex flex-1 flex-wrap justify-evenly gap-4">
        {/* CSS Transition */}
        <section className="w-[45%] max-w-md min-w-[16rem] flex flex-col gap-6 items-center justify-center">
          {/* CSS Transition nav dropdown */}
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
                  if (!isDropdownMenuOpen) {
                    setActiveMenu("main");
                    setIsDropdownMenuOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  setIsDropdownMenuOpen(false);
                  setMenuHeight("auto");
                }}
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
                            Friends
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
          {/* CSS Transition modal */}
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
                  <p className="font-medium tracking-wider">
                    This is the modal.
                  </p>
                </div>
              </section>
            </CSSTransition>
          </div>
        </section>
        {/* Framer Motion */}
        <section className="w-[45%] max-w-md min-w-[16rem] flex flex-col gap-6 items-center justify-center">
          {/* Framer Motion nav dropdown */}
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
                  if (!isDropdownMenuOpen2) {
                    setActiveMenu2("main");
                    setIsDropdownMenuOpen2(true);
                  }
                }}
                onMouseLeave={() => {
                  setIsDropdownMenuOpen2(false);
                  setMenuHeight2("auto");
                }}
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
          {/* Framer Motion modal */}
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
                    className="modal-content2 relative flex items-center justify-center bg-white rounded z-10 min-w-[300px] min-h-[150px]"
                  >
                    <button
                      className="absolute top-4 right-4 text-2xl transition-opacity hover:opacity-60 "
                      aria-label="Close modal"
                      onClick={() => setIsModalOpen2(false)}
                    >
                      <IoCloseOutline />
                    </button>
                    <p className="font-medium tracking-wider">
                      This is the modal.
                    </p>
                  </motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
