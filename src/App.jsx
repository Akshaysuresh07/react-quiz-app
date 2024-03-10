import { useState } from 'react'
import './App.css'
import { qns } from './assets/qn'
import Scorecard from './components/Scorecard'

function App() {
  const [question, setQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [result, setResult] = useState(false)

  const handleQuestion = () => {
 
    if (question < qns.length - 1) {
      setQuestion(question + 1);
    setSelectedOption(null)
    } else {
      setResult(true);
    }
  }
  

  const handleReset = () => {
    setQuestion(0)
    setResult(false)
    setScore(0)
  }
 
  
  const handleOption = (index) =>{
    if(selectedOption === null){
         // console.log("checking");
         setSelectedOption(index)
         if(qns[question].answer === index.toString()){
             // console.log("correct");
             setScore(score+1)
         }
    }
       
}

  
  return (
    <>
      <div className='container-fluid pt-5 ' style={{ background: "radial-gradient(#ff8a00, #e52e71) ", height: '100vh' }}>

        <div className='rounded-2 shadow ' style={{ background: 'white', width: '650px', height: '550px ', marginLeft: '320px' }} >

          {result ?
            <Scorecard score={score} totalScore={qns.length} /> :
            <div>
              <h1 className='text-center pt-3 '>Quiz app</h1>
              <div className=' mt-2 '>
                <div className="m-3 p-3 shadow bg-dark text-center text-light rounded" style={{ height: '70px' }}>
                  <span>{question + 1}.</span>
                  <span >{qns[question].question}</span>
                </div>
                <div className="d-flex flex-column align-items-center p-4">
                  {qns[question].options.map((option, index) => (
                    <button onClick={() => handleOption(index)} key={index} style={{ width: '400px' }} className={`btn mb-1 ${selectedOption === index ? 'btn-success' : 'btn-info'}`}>{option}</button>
                      
                  ))}
                </div>
                <div className='d-flex justify-content-center ' >
                  {result ? <button onClick={handleReset} style={{ width: "170px" }} className='btn btn-outline-danger rounded  ' >Try Again
                  </button> :
                    <button onClick={handleQuestion} style={{ width: "170px" }} className='btn btn-outline-success rounded  ' >Next
                    </button>}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default App
