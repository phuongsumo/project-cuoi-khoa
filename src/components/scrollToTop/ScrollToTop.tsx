import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { KeyboardArrowUp } from "@mui/icons-material";
import "./scrollToTop.css";

export default function ScrollToTop(): JSX.Element {
  const { y: pageOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState<boolean>(false);
  useEffect(() => {
    if (pageOffset > 10) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // if (!visible) {
  //   return false;
  // }

  return (
    <div className="scrollToTop">
      <button onClick={scrollToTop}>
        <KeyboardArrowUp color="warning" className="icon" />
      </button>
    </div>
  );
}
