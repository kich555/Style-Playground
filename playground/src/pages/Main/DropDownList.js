import React from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalize } from 'lodash';

function DropDownList({ name, navigateTo, idx }) {
  const navigate = useNavigate();
  const buttonName = capitalize(name);
  const reverseIdx = idx - 6;
  return (
    <li className={`list list${reverseIdx} relative width-200 link uppercase`}>
      <button className="max-width padding-16 text-left" type="button" onClick={() => navigate(`/${navigateTo}`)}>
        {buttonName}
      </button>
    </li>
  );
}

export default DropDownList;
