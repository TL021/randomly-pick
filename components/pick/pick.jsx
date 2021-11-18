import React, { Component } from 'react'
import { getRandomNum } from '../../utils/utils'
import { employeeDailyArr } from '../../src/data'

import pickStyle from './pick.module.scss'

export default class Pick extends Component{

  state = {
    name: '',
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

    this.props.employeeArr && this.setNewEmployeeArr()
    // console.log(this.state.employeeDailyArr)

    this.interval = setInterval(() => {
      const randomNum = getRandomNum(this.state.len)
      this.setState({name: this.state.employeeDailyArr[randomNum]})
    }, 100);

    this.timer = setTimeout(() => {
      clearInterval(this.interval)
    }, 3000)
  }

  setNewEmployeeArr = () => {
    this.setState({
        employeeDailyArr: this.props.employeeArr,
        len: this.props.employeeArr.length
      })
  }

  render() {
    const { name } = this.state
    return (
      <>
        <div className={pickStyle.main}>
          <div className={pickStyle.title}>Who is the luckiest?</div>
          <div className={pickStyle.name}>{name}</div>
          <button className={`${pickStyle.btn} ${pickStyle.btnGhost} ${pickStyle.btnShine}`} onClick={this.handleClickForDaily}>Pick</button>
        </div>
      </>
    )
  }
}