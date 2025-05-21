import { useState } from 'react';
import './App.css';
import MortgageForm from './components/MortgageForm';
import SummaryPage from './components/SummaryPage';


function App() {
  const [formData , setFormData] = useState(null);

  return (
    <div className="App-container">
      {!formData ? (
        <MortgageForm onSubmit = {setFormData}/>
      ) : (
        <SummaryPage data = {formData}/>
      )}
    </div>
  );
}

export default App;
