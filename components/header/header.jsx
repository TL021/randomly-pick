import Link from 'next/link'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import headerStyle from './header.module.css'

export default function Header() {
  return (
    <>
      <div className={headerStyle.titleWrap}>
        <Link href='/'>
          <a className={headerStyle.backHome}>Randomly Pick</a>
        </Link>
        <Link href='/advanced'>
          <a className={headerStyle.subTitle1}>Advanced</a>
        </Link>
        {/* <Link href='/customized'>
          <a className={headerStyle.subTitle2}>Customized</a>
        </Link> */}
        <div className={headerStyle.subTitle2}>
          <a href="javascript:;"><LightModeIcon fontSize="small" /></a>
          <span className={headerStyle.slash}>/</span>
          <a href="javascript:;"><DarkModeIcon fontSize="small" /></a>
        </div>
      </div>
    </>
  )
}