import React from 'react'
import './styles/fertilizer.css'

const FertilizerPred = () => {
  return (
    <>
    <section className="form-container shadow-lg ">

<div className="strip shadow-lg">
    <div> <h2>Fertilizer Prediction</h2></div>  
</div>
<form className="form-structure ">
    <div className="row">
        <div className="col">
           
            <div className="form-outline">
                
                <input type="text" id="Name" className="form-control" placeholder="Enter Your Name"/>
            </div>
        </div>
        <div className="col">
            <div className="form-outline">
                <input type="email" id="Email" className="form-control" placeholder="abc@gmail.com" />
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col">

            <div className="form-outline">
                <label className="form-label" htmlFor="N">Nitrogen</label>
                <input type="number" id="Nitrogen" className="form-control" placeholder="'N'-Value" />
            </div>
        </div>
        <div className="col">

            <div className="form-outline">
                <label className="form-label" htmlFor="K">Potassium</label>
                <input type="number" id="Potassium" className="form-control" placeholder="'K'-Value" />
            </div>
        </div>
        <div className="col">

            <div className="form-outline">
                <label className="form-label" htmlFor="P">Phosporous</label>
                <input type="number" id="Phosporous" className="form-control" placeholder="'P'-Value" />
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">

            <div className="form-outline">
                <label className="form-label" htmlFor="Temp">Temprature</label>
                <input type="number" id="Temprature" className="form-control" placeholder="in Celsius" />
            </div>
        </div>
        <div className="col">

            <div className="form-outline">
                <label className="form-label" htmlFor="Humidity">Humidity</label>
                <input type="number" id="Humidity" className="form-control" placeholder=" % of Humidity " />
            </div>
        </div>
        <div className="col">

            <div className="form-outline">
                <label className="form-label" htmlFor="moist">Moisture</label>
                <input type="number" id="Moisture" className="form-control" placeholder="Moisture content" />
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <label htmlFor="Soil-type " className="form-label">Soil-type</label>
            <select id="inputState" htmlFor="soil-type" className="form-control">
              <option selected>Choose...</option>
              <option>Black</option>
              <option>Clayey</option>
              <option>Loamy</option>
              <option>Red</option>
            </select>
        </div>

        <div className="col">
            <label htmlFor="Crop-type" className="form-label">Crop-type</label>
            <select id="inputState"  htmlFor="crop-type" className="form-control">
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

     
    <button type="submit" htmlFor="submit" className="btn btn-success btn-block Predict">Predict</button>

</form>
</section>

    </>
  )
}

export default FertilizerPred
