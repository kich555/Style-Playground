import React, { useState } from 'react';
import CurveListItem from './CurveListItem';

function CurveList() {
  const menuList = ['arrow-back-circle', 'arrow-forward-circle', 'home', 'person', 'settings'];
  const [isActive, setIsActive] = useState(false);
  const handleClick = idx => {
    const newArr = Array(menuList.length).fill(false);
    newArr[idx] = true;
    setIsActive(newArr);
  };

  return (
    <div className="navigation centered relative width-460 height-60 border-radius-12 background-white">
      <ul className="row justify-between full padding-row-36">
        {menuList.map((item, idx) => (
          <CurveListItem key={item} isActive={isActive[idx]} iconName={item} handleClick={handleClick} idx={idx} />
        ))}
        <div className="indicator width-72 height-72 border-50 background-white" />
      </ul>
    </div>
  );
}

export default CurveList;
