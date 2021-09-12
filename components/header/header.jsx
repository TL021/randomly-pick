import Link from 'next/link'

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
        <Link href='/customized'>
          <a className={headerStyle.subTitle2}>Customized</a>
        </Link>
      </div>
    </>
  )
}