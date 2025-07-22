import React from 'react'

export default function JSX() {
  return (
    <div>JSX</div>
  )
}

// JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
// JSX will be converted by babel into JavaScript function (React.createElement)


const reactElement = React.createElement("div", null, "Hello world");

const jsx = <div>Hello world</div>;
