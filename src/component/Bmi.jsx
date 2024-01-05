import React , { useState}from 'react'

function Bmi() {
    const [age,setAge]=useState()
    const [weight,setWeight]=useState()
    const [height,setHeight] = useState();
    const [bmi,setBmi]= useState()
    const [msg,setMsg] = useState()

    const reload  = ()=>{
        window.location.reload()
    }
   
const handleCalculations =(e)=>{
    e.preventDefault()
    if(weight === 0 || height === 0 ){
        alert('please enter a valid number')
    }
    else{
        let bmiFormular = (weight / (height * height) * 703)
        setBmi(bmiFormular.toFixed(2))

    }
    if(bmi < 25){
        setMsg("You are Under Weight")
    
    }
    else if(bmi >=25 || bmi<=30){
        setMsg("you are over Weight")

    }
    else{
        setMsg("you are unhealthy ")
    }
}


  return (
    <><div className='text-align-center justify-content-center align-items-center'>
        <div className='container'>
        <form onSubmit={handleCalculations}>

<h1 className='h'>BMI Calculator</h1>
        <div>
            <label className='label '>  Age :</label> 
            <input className='input' type="number" placeholder='enter the age' value={age} onChange={(e)=>setAge(e.target.value)}  />

        </div>
        <div>
            <label > Weight:</label> 
            <input className='input' type="number" placeholder='enter the weight'value={weight} onChange={(e)=>setWeight(e.target.value)}/>

        </div>
        <div>
            <label >Height :</label>
            <input className='input' type="number" placeholder='enter the height'value={height} onChange={(e)=>setHeight(e.target.value)}/>

        </div>
<div>
    <button type='submit' className='btn' onChange={(e)=>setMsg(e.target.value)}>Calculate</button>
    <button type='submit' className='btn btn-reload' onClick={reload}>Reload</button>
</div>
<div className='result'>
    <h3 className='t'>Age :{age}</h3>
    <h3 className='t'>Your BMI is : {bmi}</h3>
    <p className='t'>{msg}</p>
</div>
      </form>
</div>
    </div>

     
    </>
  )
}

export default Bmi