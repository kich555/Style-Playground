import React from 'react';
import DropDownList from './DropDownList';

function Main() {
  const navigateList = ['home', 'about', 'animation', 'portfolio', 'contract', 'github'];

  return (
    <div className="main-page centered">
      <ul className="list-wrapper relative">
        {navigateList.map((list, idx) => (
          <DropDownList navigateTo={`${list}`} idx={idx} />
        ))}
      </ul>
    </div>
  );
}

export default Main;
