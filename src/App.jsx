import React, { useState } from 'react';
import Header from './Components/header';
import { FaCloud } from "react-icons/fa6";
import Card from './Components/Card';

function App() {
  const [isSelected, setSelected] = useState(false);

  return (
    <>
    <Header/>
    <Card/>
    </>
  );
}

export default App;
