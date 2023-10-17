import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [state, setState] = useState(
    {
      name: '',
      age: '',
      city: '',
      occupation: ''
    }
  );
  
  const sampleData = [

    { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
  
    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
  
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
  
    { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
  
    { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
  
    { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
  
    { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
  
    { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
  
    { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
  
    { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
  
  ];

  const reSet = ()=>{
    setState({
      name: '',
      age: '',
      city: '',
      occupation: ''
    })
  }
  
  return (
    <>
      <h1>Filters: </h1>
      <label htmlFor="">Name: </label>
      <input type="text" name='Name' placeholder='Enter Name'/>
      <label htmlFor="">Age: </label>
      <input type="text" name='Age' placeholder='Enter Age'/>
      <label htmlFor="">City: </label>
      <select name="City" id="">
        <option value="">Select City</option>
        <option value="">New York</option>
        <option value="">San Francisco</option>
        <option value="">Chicago</option>
        <option value="">Los Angeles</option>
        <option value="">Houston</option>
        <option value="">Miami</option>
        <option value="">Seattle</option>
        <option value="">Boston</option>
        <option value="">Denver</option>
        <option value="">Atlanta</option>
      </select>
      <label htmlFor="">Occupation: </label>
      <select name="Occupation" id="">
        <option value="">Select Occupation</option>
        <option value="">Engineer</option>
        <option value="">Designer</option>
        <option value="">Accountant</option>
        <option value="">Teacher</option>
        <option value="">Doctor</option>
        <option value="">Artist</option>
        <option value="">Software Engineer</option>
        <option value="">Lawyer</option>
        <option value="">Marketing Manager</option>
        <option value="">Entrepreneur</option>
      </select>

      <button onClick={reSet}>Reset</button>

      

      <table border={1} cellPadding={10}>
        <th>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>City</td>
          <td>Occupation</td>
        </th>
      </table>
    </>
  )
}

export default App
