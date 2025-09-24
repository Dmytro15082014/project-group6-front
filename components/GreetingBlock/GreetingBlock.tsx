"use client";
import css from "./GreetingBlock.module.css";

import React from "react";

const GreetingBlock = () => {
  return (
    <div>
      <h1 className={css.greetingTitle}>Доброго ранку, Ганна!</h1>
    </div>
  );
};

export default GreetingBlock;
