
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


  //Delete function
  function handleDelete(id){
    const filterDeleteItem=data.filter((check)=>{
      return check.id!==id
    })
    setData(filterDeleteItem)
  }

  //Add function 
  function handleAdd(){
    
    
    const payload={
      completed:Math.random()*100>50?true:false,
      id:crypto.randomUUID(),//This will create a unique id
      title:title
    }

    console.log(payload)

    
    setData([...data, payload]);
    Settitle('')  //Empty the Input Box
  }

  //handle cut if task havinf status completed or we checkd in 
  function handleTaskstatus(id){
    
    //By the help of id we will find which one user Click 
    const FindChecked=data.map((item)=>{
      if(item.id==id){
        return{
          ...item,
          completed:!item.completed
        }
      }
      return item
    })
    console.log('updated FindChecked',FindChecked)
    

    //Update the State so ui will render again
    setData(FindChecked)
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
              <th>Status</th>
              <th>SR.</th>
              <th>Title.</th>
              <th>Action.</th>
            </tr>
          </thead>
            <tbody>
              {data.map((check,index)=>{
                return(
                  <tr key={check.id}>
                    <input type='checkbox' onChange={()=>handleTaskstatus(check.id)}/>
                    <td>{index+1}</td>
                    {check.completed?<s><td>{check.title}</td></s>:<td>{check.title}</td>}
                    
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
