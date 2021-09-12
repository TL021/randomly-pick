import Header from '../components/header/header'
import Pick from '../components/pick/pick'
import Footer from '../components/footer/footer'

import { employeeSet} from '../src/data'
import { useRef, useState } from 'react'

import homeStyle from '../styles/Home.module.css'

export default function Blog() {

  const [employeeArr, useEmployeeArr] = useState([...employeeSet])
  const deleteRef = useRef('')
  const addRef = useRef('')

  const handleAddClick = () => {
    employeeSet.add(addRef.current.value)
    useEmployeeArr([...employeeSet])
    // console.log('employeeArr@@@', employeeArr)
  }

  const handleHideClick = () => {
    employeeSet.delete(deleteRef.current.value)
    useEmployeeArr([...employeeSet])
    // console.log('employeeArr@@@', employeeArr)
  }

  return (
    <>
      <Header/>
      <div className={homeStyle.main}>
        <div className={homeStyle.filterWrap}>
          <span className={homeStyle.addTag}>Add:</span>
          <input className={homeStyle.addPerson} ref={addRef}/>
          <button className={homeStyle.btn} id={homeStyle.filterBtn} onClick={handleAddClick}>Click</button>
          <span className={homeStyle.hideTag}>Hide:</span>
          <select className={homeStyle.hidePerson} ref={deleteRef}>
            {employeeArr.map(employee => <option key={employee} value={employee}>{employee}</option>)}
          </select>
          <button className={homeStyle.btn} id={homeStyle.filterBtn} onClick={handleHideClick}>Click</button>
        </div>
        <Pick employeeArr={employeeArr}/>
      </div>
      <Footer/>
    </>
  )
}