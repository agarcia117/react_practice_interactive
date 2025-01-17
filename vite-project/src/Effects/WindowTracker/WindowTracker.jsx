import React, { useEffect, useState } from "react"

export default function WindowTracker() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth () {
      console.log('resized');
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);

    return function(){
      window.removeEventListener("resize", watchWindowWidth)
    }
  }, [])

  return (
      <h1>Window width: {windowWidth}</h1>
  )
}
