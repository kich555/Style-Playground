import React from 'react';

function CurveListItem({ isActive, iconName, handleClick, idx }) {
  return (
    <li className="relative">
      <button onClick={() => handleClick(idx)} className="" type="button">
        <span className={`icon ${isActive ? 'active' : ''} relative display-block width-56 height-56 text-center border-50 font-24`}>
          <ion-icon name={`${iconName}-outline`} />
        </span>
      </button>
    </li>
  );
}

export default CurveListItem;
