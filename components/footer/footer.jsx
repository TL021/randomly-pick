import Link from 'next/link'

import footerStyle from './footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={footerStyle.footerWrap}>
        <div className={footerStyle.copyRight}><span>Copyright @ 2021 MCT. All rights reserved.</span></div>
      </div>
    </>
  )
}