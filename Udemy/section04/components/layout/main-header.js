import Link from "next/link";
import classes from "./main-header.moudule.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <li>
          <Link href="/events">Browse All Events</Link>
        </li>
      </nav>
    </header>
  );
}

export default MainHeader;
