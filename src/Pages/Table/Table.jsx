import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import './style.css'
import Thead from './Thead'
import Trow from './Trow'
const Table = () => {
  const [serachValue, setSearchValue] = useState('')
  return (
    <>
      <div className='container table-responsive-lg table-responsive-md table-responsive-sm '>
        <table class='table table-striped table-hover border border-1'>
          <thead>
            <Thead title='A1assd' classs='ps-2' />
            <Thead title='A1sdsd' classs='' />
            <Thead title='A1fdssdf' classs='' />
            <Thead title='A1fdssf' classs='' />
            <Thead title='A1fdss' classs='' />
          </thead>
          <tbody>
            <tr>
              <Trow text='B1' classs='text-primary' />
              <Trow text='B1' classs='' />
              <Trow text='B1' classs='' />
              <Trow text='B1' classs='' />
              <Trow text='B1' classs='' />
            </tr>
            <tr>
              <Trow text='B3' classs='text-success' />
              <Trow text='B3' classs='' />
              <Trow text='B4' classs='' />
              <Trow text='B5' classs='' />
              <Trow text='B6' classs='' />
            </tr>
            <tr>
              <Trow text='B3' classs='text-success' />
              <Trow text='B3' classs='' />
              <Trow text='B4' classs='' />
              <Trow text='B5' classs='' />
              <Trow text='B6' classs='' />
            </tr>
            <tr>
              <Trow text='B3' classs='text-success' />
              <Trow text='B3' classs='' />
              <Trow text='B4' classs='' />
              <Trow text='B5' classs='' />
              <Trow text='B6' classs='' />
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container'>
        <Input
          type='text'
          text='Search'
          namee='input'
          classs='form-control'
          id='Lable=name'
          val={serachValue}
          setVal={setSearchValue}
        />
 
      </div>
    </>
  )
}

export default Table
