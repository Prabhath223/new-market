import React, { useEffect, useRef } from 'react';


const YourComponent = () => {
  const navbarRef = useRef(null);
  const navTogglerRef = useRef(null);

  const toggleNavbar = function () {
    navbarRef.current.classList.toggle("active");
    navTogglerRef.current.classList.toggle("active");
  }

  useEffect(() => {
    navTogglerRef.current.addEventListener("click", toggleNavbar);

    return () => {
      navTogglerRef.current.removeEventListener("click", toggleNavbar);
    }
  }, []);

  return (
    <div>
      <div ref={navbarRef} data-navbar>
        Navbar
      </div>
      <button ref={navTogglerRef}>Toggle Navbar</button>
    </div>
  );
}

export default YourComponent;
