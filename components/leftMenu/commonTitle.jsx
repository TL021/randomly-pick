import Link from 'next/link'

export default function CommonTitle(props) {
  // console.log('@@@', props.children)
  const {title, icon, imgIcon, isIconRight, url} = props.children || {}

  const Icon = () => {
    if (icon) {
      return <span>{icon}</span>
    }
    if (imgIcon) {
      return <img src={imgIcon} alt="icon" />
    }
    return null
  }

  const iconWithTitle = () => {
    return isIconRight? <div><span>{title}</span>{Icon()}</div>: <div>{Icon()}<span>{title}</span></div>
  }

  return (
    url? <Link href={url}><div>{iconWithTitle()}</div></Link>:
      <div>{iconWithTitle()}</div>
  )
}