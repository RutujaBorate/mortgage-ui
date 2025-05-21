import React from 'react'
import './SummaryPage.css';

const SummaryPage = ({data}) => {
  return (
    <div className='summary-container'>
       <h2>Data Summary</h2>

       <div className="summary-card">
         <h4>Property Details</h4>
         <p>Adderess: {data.propertyAddress}</p>
         <p>APN: {data.apn}</p>
       </div>

       <div className="summary-card">
         <h4>Personal Info</h4>
         <p>Owner: {data.ownerName}</p>
         <p>Entered By: {data.enteredBy}</p>
       </div>

       <div className="summary-card">
         <h4>Loan Details</h4>
         <p>Amount: {data.propertyAddress}</p>
         <p>APN: {data.apn}</p>
       </div>

       <div className="summary-card">
         <h4>Property Details</h4>
         <p>Adderess: ${data.loanAmount}</p>
         <p>Term: {data.loanTerm}</p>
         <p>Down Payment: ${data.downPayment}</p>
       </div>

       <div className="summary-card">
         <h4>Loan Officer</h4>
         <p>Name: ${data.loanOfficer}</p>
         <p>NMLS ID: {data.nmlsId}</p>
       </div>
    </div>
  )
}

export default SummaryPage
