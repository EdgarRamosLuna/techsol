import React from 'react'
import { LoadingS } from './styles/Admin'

const Loading = (props) => {
  const {op} = props;
  return (
    <LoadingS op={op}>
        <div className="loading-container">
            <img src="/assets/img/loading.svg" alt="" />
        </div>
    </LoadingS>
  )
}

export default Loading