import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Electron App
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1" tabIndex={0}>
          <li>
            <a href="/todo">ToDo</a>
          </li>
          <li>
            <details>
              <summary>Section</summary>
              <ul className="p-2">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://avatar.iran.liara.run/public/46" />
              </div>
            </label>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default NavBar;
