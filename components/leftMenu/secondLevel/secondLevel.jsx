import { Fragment } from 'react'

import Link from 'next/link'

export default function SecondLevel(props) {

  // console.log('level2', props)
  // const { icon, title, children } = props.children

  return (
    <div>
      {/* {props.children.map(({icon, title, url, children}, index) => {
        return (
          <Fragment key={'second-level'+index}>
            {url?
              <Link href={url}><div><span>{icon}</span><span>{title}</span></div></Link>
              :<div><span>{icon}</span><span>{title}</span></div>
            }
          </Fragment>
        )
      })} */}
    </div>
  )
}