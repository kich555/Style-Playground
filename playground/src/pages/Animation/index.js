import DropDownList from 'pages/Main/DropDownList';
import React from 'react';

function Animation() {
  console.log('render?');
  const navigateList = ['curveList', 'list-2', 'list-3', 'list-4', 'list-5', 'list-6'];
  return (
    <div className="animation-page centered">
      <ul className="list-wrapper-3d relative">
        {navigateList.map((list, idx) => (
          <DropDownList name={`${list}`} navigateTo={`animation/detail/${list}`} idx={idx} />
        ))}
      </ul>
    </div>
  );
}

export default Animation;
