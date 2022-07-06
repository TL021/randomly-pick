import Link from 'next/link'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import headerStyle from './header.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {
  const [ mode, setMode ] = useState('light')
  useEffect(() => {
    console.log(window.matchMedia)
    console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  })

  return (
    <>
      <div className={headerStyle.titleWrap}>
        <Link href='/'>
          <a className={headerStyle.backHome}>Randomly Pick</a>
        </Link>
        <Link href='/advanced'>
          <a className={headerStyle.subTitle1}>Advanced</a>
        </Link>
        <div className={headerStyle.subTitle2}>
          <span className={headerStyle.iconMode}>
            <LightModeIcon fontSize="small" />
          </span>
          <span className={headerStyle.modeSlash}>/</span>
          <span className={headerStyle.iconMode}>
            <DarkModeIcon fontSize="small" />
          </span>
        </div>
      </div>
    </>
  )
}