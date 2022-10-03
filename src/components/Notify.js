import React, { useState, useEffect } from 'react';
import { NofitfyS } from './styles/Admin';


const Notify = (props) => {
  const {children} = props;
  return (
    <NofitfyS>
        {children}
    </NofitfyS>
  )
}

export default Notify