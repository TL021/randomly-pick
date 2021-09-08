import Link from 'next/link'

import headerStyle from './header.module.css'

export default function Header() {
  return (
    <>
      <div className={headerStyle.titleWrap}>
        <Link href='/'>
          <a className={headerStyle.leftTitle}>Jackson Liu</a>
        </Link>
        <Link href='/home/documents'>
          <a className={headerStyle.subTitle1}>Documents</a>
        </Link>
        <Link href='/home/instances'>
          <a className={headerStyle.subTitle2}>Instance</a>
        </Link>
        <Link href='/home/blog'>
          <a className={headerStyle.subTitle3}>Blog</a>
        </Link>
      </div>
    </>
  )
}