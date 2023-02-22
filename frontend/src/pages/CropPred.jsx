import axios from 'axios'
import React, { useReducer, useState } from 'react'
import './styles/croppred.css'

const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload }
      default:
        return state
    }
  }

const CropPred = () => {

    const [state, dispatch] = useReducer(dataReducer, { data: null })
  const [N,setN] = useState(null);
  const [P,setP] = useState(null);
  const [K,setK] = useState(null);
  const [temperature,setTemperature] = useState(null);
  const [humidity,setHumidity] = useState(null);
  const [ph,setPH] = useState(null);
  const [rainfall,setRainfall] = useState(null);

  function submitHandler(e){
      e.preventDefault();
      const data = {
        "N":N,
        "P":P,
        "K":K,
        "temperature":temperature,
        "humidity":humidity,
        "ph":ph,
        "rainfall":rainfall
      } 
      
        axios
          .post("http://127.0.0.1:5000/api/soilcrop", data)
          .then(response => {
            dispatch({ type: 'SET_DATA', payload: response.data })

          })
          .catch(error => {
          console.log(error);
          });

  }
    

  return (
    
    <>
     <section class="form-container shadow-lg ">

<div class="strip shadow-lg">
    <div> <h2>Crop Prediction</h2></div>  
</div>
<form class="form-structure " onSubmit={submitHandler}>

    <div class="row">
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="N">Nitrogen</label>
                <input type="number" id="Nitrogen" class="form-control" placeholder="'N'-Value" name="N"  onChange={(e)=>setN(e.target.value)} value={N}   step={0.001} required />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="K">Potassium</label>
                <input type="number" id="Potassium" class="form-control" placeholder="'K'-Value" name="K"  onChange={(e)=>setK(e.target.value)} value={K}   step={0.001} required />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="P">Phosporous</label>
                <input type="number" id="Phosporous" class="form-control" placeholder="'P'-Value" name="P"  onChange={(e)=>setP(e.target.value)} value={P}   step={0.001} required />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="Temp">Temprature</label>
                <input type="number" id="Nitrogen" class="form-control" placeholder="in Celsius" name="temperature"  onChange={(e)=>setTemperature(e.target.value)} value={temperature}   step={0.001} required />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="Humidity">Humidity</label>
                <input type="number" id="Potassium" class="form-control" placeholder=" % of Humidity " name="humidity"  onChange={(e)=>setHumidity(e.target.value)} value={humidity} step={0.001} required />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="pH">pH-value</label>
                <input type="number" id="Phosporous" class="form-control" placeholder="ph-Value" name="ph"  onChange={(e)=>setPH(e.target.value)} value={ph}    step={0.001} required />
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="Rain">Rainfall</label>
                <input type="number" id="Nitrogen" class="form-control" placeholder=" in Millimeter" name="rainfall"  onChange={(e)=>setRainfall(e.target.value)} value={rainfall}  step={0.001} required />
            </div>
        </div>
    </div>

     
    <button type="submit"  class="btn btn-success btn-block Predict">Predict</button>

</form>
</section>
{
          state.data && 
          <div className='mx-8'>
            
            <h4 className='my-10 font-Inria'>Main Suitable Crop</h4>
            <div>{state.data.context.main}</div>
            {/* <AlternativeCrops data={state.data.context.main} />
            <h4 className='my-10 font-Inria'>Alternative Suitable Crops</h4>
            <AlternativeCrops data={state.data.context.alternative} /> */}
          </div>
        }
    </>
  )
}

export default CropPred
