import React, { useState } from 'react';
import './header.css';
import { FaCloudSun } from 'react-icons/fa6';

function Header() {
  const [isSelected, setSelected] = useState(false);

  return (
    <>
      <div className="header-div flex justify-center p-10">
        <h1 className="header-h1 text-4xl sm:text-5xl m-3 font-bold">
          WeatherCloud{' '}
        </h1>
        <span className="sm:text-5xl">
          <FaCloudSun color="yellow" size="3rem" />
        </span>
      </div>
    </>
  );
}

export default Header;
