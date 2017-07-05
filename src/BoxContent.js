import React from 'react'
import { getClasses } from './utils'

const BoxContent = ({ className, children }) => {

  const classes = [
    'v2-box-content',
    className,
  ]

  return (
    <div className={getClasses(classes)}>
      {children}
    </div>
  )
}

export default BoxContent

