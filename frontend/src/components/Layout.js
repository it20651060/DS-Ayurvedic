import classes from './Layout.module.css';

import NavPanel from "./Navigation/NavPanel";
import TopNav from "./Navigation/TopNav";

const Layout = ({ children }) => {
  return (
    <div className={classes.root}>
      <NavPanel />
      <div className={classes.content}>
        <TopNav />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
