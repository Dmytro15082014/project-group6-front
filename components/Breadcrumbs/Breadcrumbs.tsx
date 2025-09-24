"use client";

import { useSetTitleForBread } from "@/lib/store/breadCrumbStore";
import css from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const { titleForBread } = useSetTitleForBread();
  return (
    <div className={css.breadContainer}>
      Лелека {">"} {titleForBread}
    </div>
  );
};

export default Breadcrumbs;
