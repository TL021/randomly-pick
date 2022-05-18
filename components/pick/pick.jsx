import React, { Component } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import { getRandomNum } from '../../utils/utils'
import { employeeDailyArr } from '../../src/data'

import pickStyle from './pick.module.scss'

// import black from '@mui/material/colors/black';

export default class Pick extends Component{

  state = {
    name: '',
    loading: false,
    len: employeeDailyArr.length,
    employeeDailyArr
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    clearTimeout(this.timer)
  }

  handleClickForDaily = () => {
    this.interval && clearInterval(this.interval)
    this.timer && clearTimeout(this.timer)
    this.setState({loading: !this.state.loading})

    this.props.employeeArr && this.setNewEmployeeArr()

    this.interval = setInterval(() => {
      const randomNum = getRandomNum(this.state.len)
      this.setState({name: this.state.employeeDailyArr[randomNum]})
    }, 100);

    this.timer = setTimeout(() => {
      clearInterval(this.interval)
      this.setState({loading: false})
    }, 3000)
  }

  setNewEmployeeArr = () => {
    this.setState({
        employeeDailyArr: this.props.employeeArr,
        len: this.props.employeeArr.length
      })
  }

  render() {
    const { name, loading } = this.state
    return (
      <>
        <div className={pickStyle.main}>
          <div className={pickStyle.title}>Who is the luckiest?</div>
          <div className={pickStyle.name}>{name}</div>
          <LoadingButton
            size="middle"
            color='primary'
            onClick={this.handleClickForDaily}
            loading={loading}
            endIcon={<PersonSearchIcon />}
            loadingPosition="end"
            variant="contained"
          >
            Pick
          </LoadingButton>
        </div>
      </>
    )
  }
}