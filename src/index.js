import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const writeScript = (src, isAsync, successCb, failureCb) => {
  const script = document.createElement("script");
  const data = {
    src,
    script
  };

  script.onload = successCb.bind(null, data);
  script.onerror = failureCb.bind(null, {
    error: new Error(`Failed to load: ${src}`),
    ...data
  });

  script.type = "text/javascript";
  script.charset = "utf-8";
  script.async = isAsync;
  script.src = src;
  if (document.body) document.body.appendChild(script);
};

/**
 * Run our app
 */
const runApp = () => {
  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
  registerServiceWorker();
};

if (
  !(
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype &&
    "isIntersecting" in window.IntersectionObserverEntry.prototype
  )
) {
  // Some browser need an implementation (or a better implementation) of IntersectionObserver
  // those browsers will receive a polyfill with IntersectionObserver
  if (window.IntersectionObserver) delete window.IntersectionObserver;
  const intersectionObserverPolyfill = "/static/polyfill-2019-07-11.js";

  writeScript(
    intersectionObserverPolyfill,
    false,
    () => runApp(),
    // eslint-disable-next-line no-console
    e => console.error(e)
  );
} else {
  runApp();
}
