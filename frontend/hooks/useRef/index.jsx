/*
useRef doesn’t cause re-renders (Unlike useState) -> It can be used to store a mutable value that does not cause a re-render when updated.
Great for accessing DOM elements (like focus) (we add a ref attribute to an element to access it directly in the DOM)
Useful for persisting values across renders (like counters & previous states): This is because we are able to persist useRef values between renders.
returns a object which a current 

useRef() only returns one item. It returns an Object called current.
const count = useRef(0);
// same as const count = {current: 0}; 
*/


import { useState } from "react";
import "./styles.css";
import { useRef } from "react";

export default function App() {
  const [tokenCount, setTokenCount] = useState(21);
  const tokenRef = useRef(0);
  const elementRef = useRef();
  const focusDiv = () => {
    elementRef.current.focus();
  };
  const increaseRef = () => {
    tokenRef.current += 1;
    console.log("tokenRef.current: ", tokenRef.current);
  };

  return (
    <div className="App">
      <div className="right">
        <h1>Hello CodeSandbox</h1>
        <input
          className="inputfocus"
          ref={elementRef}
          type="text"
          placeholder="Type here"
        />
        <button onClick={focusDiv}>Focus</button>
        <div>{tokenCount}</div>
        <button onClick={() => setTokenCount((c) => c + 1)}>increase state</button>
        <div>{tokenRef.current}</div>
        <button onClick={increaseRef}>increase Ref</button>
      </div>
    </div>
  );
}
// clicking on "increase Ref" button will increment the Ref ( logged to console), but it won't be visible in the div ( no re-render happened), click on increase state( which updates state causing re-render)
// and then can see the persisted Ref value i.e.
// if the "increase Ref" button was clicked 5 times in a row
// next re-render shows 5 and not 0.

// useRef improves application perfromance by avoiding state updates (that result in re-rendering)

// https://dev.to/samabaasi/mastering-reacts-useref-hook-a-deep-dive-1548
// https://dev.to/femi_akinyemi/how-to-prevent-unnecessary-react-component-re-rendering-3c08
// https://react.dev/learn/manipulating-the-dom-with-refs

// using the useEffect hook with an empty dependency array -> achieve focus within a React component without causing re-renders

// advantage of useRef over traditional state in stroing values in components: changes to useRef do not trigger unnecessary re-renders.
// usecases of useRef: 
// imperative interaction with the dom: provides direct access to the underlying dom nodes. 
// preserving valeus between renders
// managing focus within a component; 
// ( const elementRef = useRef(); <input ref={elementRef} /> )
// note about focusable html element: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus, trying ref={elementRef} on a div and then doing elementRef.current.focus() in an 
// empty DA useEffect, doesn't work. why? becasue div isn't a focusable element by default


import React, { useState, useEffect } from 'react';

export function useWindowDimension() {
  const [dimension, setDimension] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      console.log('***** debounced resize'); // see the difference in console
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100); // 100ms
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []); //  this empty array. this effect should run only on mount and unmount
  return dimension;
}

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function YourComponent() {
  const [width, height] = useWindowDimension();
  return <>Window width: {width}, Window height: {height}</>;
}
