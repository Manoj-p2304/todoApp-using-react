import React, {useState} from "react";

function Mayan(){
  const [inputValues, setInputValues] = useState('');
  const [storedValue, setStoredValue] = useState([]);

  const disValue = (e) => {
    setInputValues(e.target.value)
  }

  const addValue = () =>{
    setStoredValue([...storedValue, inputValues])
    setInputValues('')
  }

  return(
    <div className='App'>
      <p>{inputValues}</p>
      <input value={inputValues}onChange={disValue} ></input>
      <button onClick={addValue} className='btn' >CLICK ME</button>
      <div>
      <ul>
        {storedValue.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      </div>
    </div>

  )
}

export default Mayan;






























//  // const [inputValue, setInputValue] = useState('');
//   // const [storedValue, setStoredValue] = useState([]);


//   // const countCal = (e) => {
//   //   setInputValue(e.target.value)
//   // }

//   // const addEnt = () => {
//   //   setStoredValue([...storedValue, inputValue]);
//   //   setInputValue('')
    
//   // }

//   // return (
//   //   <div className='App'>
//   //     <p>{inputValue}</p>
//   //     <button className='btn' onClick={addEnt} >CLICK ME</button>
//   //     <input value={inputValue} onChange={countCal} />
//   //     <div>
//   //     <ul>
//   //      {storedValue.map((value, index) => (
//   //       <li key={index}>{value}</li>
//   //      ))}
//   //     </ul>
//   //     </div>
      
//   //   </div>
//   // );
