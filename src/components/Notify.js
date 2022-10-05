import React, { useState, useEffect } from 'react';
import { NofitfyS } from './styles/Admin';


const Notify = (props) => {
  const {children, type} = props;
  return (
    <NofitfyS type={type}>
        {children}
    </NofitfyS>
  )
}

export default Notify