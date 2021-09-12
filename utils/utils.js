// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export function getRandomNum(max) {
  return Math.floor(Math.random()*max)
}

let debounce = (fn, delay=3000) => {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay);
  }
}