import { Fragment } from 'react'
import Link from 'next/link'

import SecondLevel from '../secondLevel/secondLevel'
import CommonTitle from '../commonTitle'

import LeftMenuStyle from '../leftMenu.module.css'

export default function FirstLevel(props) {

  console.log('level1', props)
  const { icon, title, children } = props.children

  const hasChild = node => {
    return node && node.length
  }

  return (
    hasChild(children)?  
      <div>
        <CommonTitle>{props.children}</CommonTitle>
        {children.map((item, index) => <SecondLevel key={'level1-'+index}>{item}</SecondLevel>)}
      </div>:
      <CommonTitle>{props.children}</CommonTitle>
  )
}