import Link from "next/link";
import React from "react";

export default function Button(props) {
  return (
    <div className="bar my-2">
      <img
        className=" arrow"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
      <div className="text">{props.children}</div>
    </div>
  );
}
