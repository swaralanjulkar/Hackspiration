import React from 'react'
import './styles/croppred.css'

const CropPred = () => {
  return (
    <>
     <section class="form-container shadow-lg ">

<div class="strip shadow-lg">
    <div> <h2>Crop Prediction</h2></div>  
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
                <input type="number" id="Nitrogen" class="form-control" placeholder="in Celsius" />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="Humidity">Humidity</label>
                <input type="number" id="Potassium" class="form-control" placeholder=" % of Humidity " />
            </div>
        </div>
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="pH">pH-value</label>
                <input type="number" id="Phosporous" class="form-control" placeholder="ph-Value" />
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">

            <div class="form-outline">
                <label class="form-label" for="Rain">Rainfall</label>
                <input type="number" id="Nitrogen" class="form-control" placeholder=" in Millimeter" />
            </div>
        </div>
    </div>

     
    <button type="submit" for="submit" class="btn btn-success btn-block Predict">Predict</button>

</form>
</section>
    </>
  )
}

export default CropPred
