import React from "react";
import "./style.scss";
import Link from "next/link";

interface NavProps {
  pagePath: string;
}

export default function NavMenu(props: NavProps) {
  return (
    <div className={"nav-wrapper"}>
      <div className="nav-left-section nav-section">
        <h1>
          Quiz<span className={"zsGreen"}>ZS</span>
        </h1>
        <ul className={"nav-left-links"}>
          <Link
            href={"/"}
            className={props.pagePath === "home" ? "active" : ""}
          >
            <li>Strona główna</li>
          </Link>
          <Link href={"/quizes"}>
            <li>Quizy</li>
          </Link>
          <Link href={"/contact"}>
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
      <div className="nav-right-section nav-section">
        <h1>Right Section</h1>
      </div>
    </div>
  );
}
