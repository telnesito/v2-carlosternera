// Tabs.jsx
import React, { Children } from 'react';
import ButtonTabs from './ButtonTabs';
import { EXPERIENCES } from '../const/constantes';

const Tabs = ({ children }) => {

  return (
    <div className='flex flex-col'>
      {children}
    </div>
  );
};

export default Tabs;
