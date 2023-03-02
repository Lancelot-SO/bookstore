import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import './NavBar.css';
import { Button } from 'primereact/button';

function NavBar() {
  const navigator = useNavigate();
  const items = [

    {
      label: 'BOOKS',
      command: () => {
        navigator('/');
      },
      className: 'label',
    },
    {
      label: 'CATEGORIES',
      command: () => {
        navigator('/catagories');
      },
      className: 'label',
    },

  ];
  const end = (
    <Button
      icon="pi pi-user"
      rounded
      outlined
      severity="info"
      aria-label="User"
    />
  );
  const start = (
    <NavLink
      to="/"
      className="label-title"
      style={{
        textDecoration: 'none',
      }}
    >
      Bookstore CMS
    </NavLink>
  );
  return (
    <div className="card surface-0">
      <Menubar
        className="card surface-0 xl:pt-4 xl:pb-4 xl:pr-8 xl:pl-8"
        model={items}
        start={start}
        end={end}
        breakpoint="768"
      />
    </div>
  );
}

export default NavBar;
