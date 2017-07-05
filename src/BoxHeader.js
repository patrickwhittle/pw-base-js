import React from 'react'
import { getClasses } from './utils'

const BoxHeader = ({ headerText }) => {

  return (
    <header className="v2-box-header">
      <h3>
        {headerText}
      </h3>
    </header>
  )
}

export default BoxHeader

