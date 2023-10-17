import { useState } from 'react'
import './App.css'

function App() {
  
  let [filter, setFilter] = useState(
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

  let filteredData= [];
  function callme(){
    const { name, age, city, occupation } = filter;
    let filteredData = sampleData;
    if (name) {
      filteredData.push(filteredData.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())));
    }
    if (age) {
      filteredData.push(filteredData.filter((item) => item.age === age));
    }
    if (city) {
      filteredData.push(filteredData.filter((item) => item.city.toLowerCase().includes(city.toLowerCase())));
    }
    if (occupation) {
      filteredData.push(filteredData.filter((item) => item.occupation.toLowerCase().includes(occupation.toLowerCase())));
    }
    console.log(filteredData);
  }  
  return (
    <>
      <h1>Filters: </h1>
      <label>Name: </label>
      <input type="text" name='Name' onChange={filter.name=this.target.value} placeholder='Enter Name'/>
      <label>Age: </label>
      <input type="text" name='Age' onChange={filter.age=this.target.value} placeholder='Enter Age'/>
      <label>City: </label>
      <select name="City" onChange={filter.city=this.target.value}>
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
      <label>Occupation: </label>
      <select name="Occupation" onChange={filter.occupation=this.target.value}>
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
      
      <br />
      <br />

      <button>Reset</button>
      <button onClick={callme}>Apply Filter</button>

      <table border={1} cellPadding={10}>
          {filteredData?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </table>
    </>
  )
}

export default App
