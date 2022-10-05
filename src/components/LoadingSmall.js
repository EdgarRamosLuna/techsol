import React from 'react'
import { LoadingS } from './styles/Admin'

const LoadingSmall = (props) => {
  const {op} = props;
  return (

        <div className="loading-container">
            <img src="/assets/img/loading2.svg" alt="" />
        </div>

  )
}

export default LoadingSmall