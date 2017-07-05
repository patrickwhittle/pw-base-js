import React from 'react'
import { getClasses } from './utils'

const Box = ({ borderTop, isMobileCollapsable, isMobileNoBox, children }) => {

  const classes = {
    'v2-box': true,
    'v2-box-top-border': borderTop,
    'v2-box-mobile-collapsable': isMobileCollapsable,
    'v2-box-mobile-no-box': isMobileNoBox,
  }

  return (
    <article className={getClasses(classes)} >
      {children}
    </article>
  )

}

export default Box

