import React, { useState } from "react";


function App(){
const[expenses, setExpenses]= useState([])
const [formData, setFormData] = useState({
  foodName: '',
  amount: '',
  date: ''
});

function  handleChange(event){
  const{name,  value}=event.target;
  setFormData((prevFormData)=>{
    return{...prevFormData, [name]: value}
  })

}
function handleClick(event) {
  event.preventDefault();

  setExpenses((prevExpenses) => {
    return [...prevExpenses, formData];
  });

  setFormData({
    foodName: '',
    amount: '',
    date: ''
  });
}

function handleDelete(id) {
  setExpenses((prevExpenses)=>{
    return prevExpenses.filter((expense, index) =>{
      return index !== id;
    })
  })

}


return(
  <>
<form className="expense-form">
    <input className="input"
    onChange={handleChange} 
    name="foodName" 
    type="text" 
    value={formData.foodName}
    placeholder="enter the food name"
   />
  <input className="input"
   onChange={handleChange} 
   name="amount" 
   type="number" 
   value={formData.amount}
   placeholder="enter the amount"
  />
  <input className="input"
   onChange={handleChange} 
   name="date" 
   type="date" 
   placeholder="enter the date"
   value={formData.date}

  />
  <button className="button" onClick={handleClick} type="submit"> 
    add expense
    </button>
    



  
</form>
{expenses.map((expense, index)=>{
    return(
        
     <div className="expense" key={index}>
      <p> food: {expense.foodName}</p>
      <p> amount: {expense.amount}</p>
      <p> date: {expense.date}</p>
      <button onClick={()=>handleDelete(index)}> delete</button>
    </div>
    )
  })
}
</>
)

}






export default App;