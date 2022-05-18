import Header from '../components/header/header'
import Pick from '../components/pick/pick'
import Footer from '../components/footer/footer'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { employeeSet} from '../src/data'
import { useRef, useState } from 'react'

import homeStyle from '../styles/Home.module.css'

export default function Advanced() {

  const [ employeeArr, setEmployeeArr ] = useState([...employeeSet])
  const [ addValue, setAddValue ] = useState('')
  const [ deleteValue, setDeleteValue ] = useState('')
  
  const deleteRef = useRef('')

  const handleAddClick = (e) => {
    employeeSet.add(addValue)
    setEmployeeArr([...employeeSet])
  }

  const handleHideClick = () => {
    employeeSet.delete(deleteRef.current.value)
    setEmployeeArr([...employeeSet])
    // console.log('employeeArr@@@', employeeArr)
  }

  return (
    <>
      <Header/>
      <div className={homeStyle.main}>
        <div className={homeStyle.filterWrap}>
          <span className={homeStyle.addTag}>Add:</span>
          <TextField 
            className={homeStyle.addPerson} 
            id="outlined-basic" 
            sx={{ width: 150 }} 
            size="small" 
            onChange={e => {setAddValue(e.target.value)}}
          />
          <Button
            size="middle"
            color='primary'
            sx={{ width: 50 }}
            onClick={handleAddClick} 
            variant="outlined"
          >
            Click
          </Button>
          <span className={homeStyle.hideTag}>Hide:</span>
          <Autocomplete 
            disablePortal
            className={homeStyle.hidePerson}
            id='combo-box-demo'
            options={employeeArr}
            sx={{ width: 150 }}
            size="small"
            renderInput={(params) => <TextField {...params} />}
            onChange={value => {
              // console.log('@@@', value)
            }}
          />
          <Button
            // className={homeStyle.btn}
            color='primary'
            sx={{ width: 50 }}
            size="middle"
            onClick={handleHideClick} 
            variant="outlined"
            disabled
          >
            Click
          </Button>
        </div>
        <Pick employeeArr={employeeArr}/>
      </div>
      {/* <Footer/> */}
    </>
  )
}