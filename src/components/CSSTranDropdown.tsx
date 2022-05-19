import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { IoCaretDown } from "react-icons/io5";
import { isMobile } from "react-device-detect";

const CSSTranDropdown = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState("auto");

  // CSS Transition dropdown height
  function calcHeight(el: any) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  // Handle click outside - close dropdown
  const dropdownMenuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If click element outside dropdown menu - close dropdown menu
      if (!dropdownMenuRef.current?.contains(event.target as Element)) {
        setIsDropdownMenuOpen(false);
      }
    };
    // Cleanup?
    if (isDropdownMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownMenuOpen]);

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
            if (!isDropdownMenuOpen && !isMobile) {
              setActiveMenu("main");
              setIsDropdownMenuOpen(true);
            }
          }}
          onMouseLeave={() => {
            setIsDropdownMenuOpen(false);
            setMenuHeight("auto");
          }}
          ref={dropdownMenuRef}
        >
          <button
            aria-label="dropdown menu"
            className={`bg-slate-600 px-3.5 py-3.5 rounded-full cursor-pointer hover:bg-slate-500 flex after:w-full after:absolute after:-bottom-4 after:left-0 after:h-4 ${
              isDropdownMenuOpen && "bg-slate-500"
            }`}
            onClick={() => {
              setActiveMenu("main");
              setIsDropdownMenuOpen((prev) => !prev);
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
  );
};

export default CSSTranDropdown;
