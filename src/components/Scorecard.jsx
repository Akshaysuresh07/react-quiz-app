import React, { useEffect, useState } from 'react'



function Scorecard({score,totalScore,}) {
const[resultStatus,setResultStatus]=useState(false)

const showStatus=(score)=>{
    if(score<=totalScore-2){
        setResultStatus(true)
    }
}
useEffect(()=>{
    showStatus(score)
},[])

console.log(resultStatus);
  return (
    <>
    {resultStatus? 
 (<div className='fail '>
 <h1 className='text-center text-danger fw-bolder pt-5' >Keep Learning </h1>
 </div>

 )   
:
(
<div className='success'>
        <h1 className='text-center text-success fw-bolder pt-5' >Good job!!</h1>
        </div>
)
}
        
        

        <h3 className='text-center text-warning fw-bold mt-5'>Your score:{score}</h3>
        <h3 className='text-center text-info  fw-bold pt-3 '>Total Score:{totalScore} </h3>


    </>
  )
}

export default Scorecard