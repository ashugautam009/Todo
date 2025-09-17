
import { useEffect, useState } from 'react'
import './App.css'
import fakedata from './data/data.js'
function App() {
  //state for hold the data 
  const[title,Settitle]=useState('')
  const [data,setData]=useState([])
  console.log(data)

  //set the data
  useEffect(()=>{
    setData(fakedata)
  },[])


  //Delete 
  function handleDelete(id){
    const filterDeleteItem=data.filter((check)=>{
      return check.id!==id
    })
    setData(filterDeleteItem)
  }

  //Add
  function handleAdd(){
    
    
    const payload={
      completed:Math.random()*100>50?true:false,
      id:crypto.randomUUID(),//This will create a unique id
      title:title
    }

    console.log(payload)

    
    setData([...data, payload]);
    
  }
  return (
    <div>
       {/*<h1>Todo App  </h1>*/}
       <label htmlFor='title'>Title </label>
       <input value={title} type='text' id='title' onChange={(e)=>Settitle(e.target.value)}></input>
       <button onClick={()=>handleAdd()}>Add</button>
        <table>
          <thead>
            <tr>
              <th>SR.</th>
              <th>Title.</th>
              <th>Action.</th>
            </tr>
          </thead>
            <tbody>
              {data.map((check,index)=>{
                return(
                  <tr key={check.id}>
                    <td>{index+1}</td>
                    <td>{check.title}</td>
                    <button onClick={()=>handleDelete(check.id)}>Delete</button>
                  </tr>
                )
              })}
            
            </tbody>
        
        </table>
    </div>
  )
}

export default App
