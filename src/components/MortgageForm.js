import React, { useState } from 'react'
import ExpandableImage from './ExpandableImage'
import './MortgageForm.css';

const MortgageForm = ({onSubmit}) => {
    const [form , setForm] = useState({
    propertyAddress: '',
    transactionDate: '',
    ownerName: '',
    loanOfficer: '',
    nmlsId: '',
    loanAmount: '',
    loanTerm: '',
    downPayment: '',
    apn: '',
    enteredBy: '',
    })

    const handleSubmit =(e)=>{
        e.preventDefault();
        onSubmit(form)
    }

    const handleChange =(e)=>{
        setForm({...form , [e.target.name]: e.target.value})
    }

  return (
    <div className='form-container'>
      <h2>Mortgage Data Entry</h2>
      <form onSubmit={handleSubmit} className='form-grid'>
        {Object.entries(form).map(([key , value])=>(
            <input type="text" 
            key={key}
            value={value}
            name={key}
            onChange={handleChange}
            placeholder={key.replace(/([A-Z])/g, ' $1')}
            required/>

        ))}
        <button type='submit'>Submit</button>
      </form>

      <ExpandableImage/>
    </div>
  )
}

export default MortgageForm
