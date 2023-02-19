import React from 'react'
import './styles/fertilizer.css'

const FertilizerPred = () => {
  return (
    <>
    <section class="form-container shadow-lg ">

<div class="strip shadow-lg">
    <div> <h2>Fertilizer Prediction</h2></div>  
</div>
<form class="form-structure ">
    <div class="row">
        <div class="col">
           
            <div class="form-outline">
                
                <input type="text" id="Name" class="form-control" placeholder="Enter Your Name"/>
            </div>
        </div>
        <div class="col">
            <div class="form-outline">
                <input type="email" id="Email" class="form-control" placeholder="abc@gmail.com" />
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="N">Nitrogen</label>
                <input type="number" id="Nitrogen" class="form-control" placeholder="'N'-Value" />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="K">Potassium</label>
                <input type="number" id="Potassium" class="form-control" placeholder="'K'-Value" />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="P">Phosporous</label>
                <input type="number" id="Phosporous" class="form-control" placeholder="'P'-Value" />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="Temp">Temprature</label>
                <input type="number" id="Temprature" class="form-control" placeholder="in Celsius" />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="Humidity">Humidity</label>
                <input type="number" id="Humidity" class="form-control" placeholder=" % of Humidity " />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="moist">Moisture</label>
                <input type="number" id="Moisture" class="form-control" placeholder="Moisture content" />
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <label for="Soil-type " class="form-label">Soil-type</label>
            <select id="inputState" for="soil-type" class="form-control">
              <option selected>Choose...</option>
              <option>Black</option>
              <option>Clayey</option>
              <option>Loamy</option>
              <option>Red</option>
            </select>
        </div>

        <div class="col">
            <label for="Crop-type" class="form-label">Crop-type</label>
            <select id="inputState"  for="crop-type" class="form-control">
              <option selected>Choose...</option>
              <option>Cotton</option>
              <option>Ground-Nut</option>
              <option>Maize</option>
              <option>Millet</option>
              <option>Oil-seeds</option>
              <option>Paddy</option>
              <option>Pulses</option>
              <option>Sugarcane</option>
              <option>Tabacco</option>
              <option>Wheat</option>
            </select>
        </div>
    </div>

     
    <button type="submit" for="submit" class="btn btn-success btn-block Predict">Predict</button>

</form>
</section>

    </>
  )
}

export default FertilizerPred
