import Link from 'next/link'
import FirstLevel from './firstLevel/firstLevel'

import { Fragment, useState } from 'react'

import LeftMenuStyle from './leftMenu.module.css'

const data = [
  {
    icon: 'main-icon1',
    title: 'main-title1',
    children: [
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            url: '/',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            url: '/advanced',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            url: '/customized',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
    ]
  },
  {
    icon: 'main-icon2',
    title: 'main-title2',
    children: [
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
    ]
  },
  {
    icon: 'main-icon3',
    title: 'main-title3',
    children: [
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
    ]
  },
  {
    icon: 'main-icon4',
    title: 'main-title4',
    children: [
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
      {
        icon: 'icon1-1',
        title: 'title1-1',
        children: [
          {
            icon: 'icon1-1-1',
            title: 'title1-1-1',
            children: []
          },
          {
            icon: 'icon1-1-2',
            title: 'title1-1-2',
            children: []
          },
          {
            icon: 'icon1-1-3',
            title: 'title1-1-3',
            children: []
          },
        ]
      },
    ]
  },
]

const config = {
  backgroundColor: 'white',
  fontColor: 'black',
  hoveredColor: 'grey',
  highlightSelected: true,
  highlightSelectedColor: 'green'
}

export default function LeftMenu() {

  const [expandsion, setExpandsion] = useState('')

  const expandChild = (e) => {
    console.log(e)
    !expandsion && setExpandsion(LeftMenuStyle.expendLevel)
    expandsion && setExpandsion('')
  }

  return (
    <div className={LeftMenuStyle.leftMenuWrap}>
      {data.map((item, index) => {
        return(
          <FirstLevel key={'level0-'+index}>{item}</FirstLevel>
        )
      })}
    </div>
  )
  
}