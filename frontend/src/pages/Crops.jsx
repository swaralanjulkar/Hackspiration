import React from // useReducer, //  useState,useContext, // useEffect,
"react";
import content from "../utils/content";
import "./styles/cropana.css";
// import axios from "axios";
// import Top5 from '../components/Top5';
// import Bottom5 from '../components/Bottom5';
// import Sixmonths from '../components/Sixmonths';
import { Link } from "react-router-dom";
// import LoadingBox from '../components/LoadingBox';

// const DataContext = React.createContext()

// const dataReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_DATA":
//       return { ...state, data: action.payload };
//     default:
//       return state;
//   }
// };

const Crops = () => {
  const { Crops } = content;
  // eslint-disable-next-line
  // const [state, dispatch] = useReducer(dataReducer, { data: null });
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   // const getData = async () => {
  //   //   try {
  //   //     const { data } =
  //   //       // await axios.get("https://127.0.0.1:5000/api/cropprice");
  //   //       // console.log(data)
  //   //       dispatch({ type: "SET_DATA", payload: data });
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // };
  //   // getData();
  // }, []);

  return (
    <div className=" container" style={{ marginTop: "100px" }}>
      {/* {
                state.data? (
                    <>
                    <div className="flex flex-wrap gap-[1%]  justify-center align-middle">
                        <div className='w-full md:w-[48%]'>
                            <p className='text-sm md:text-2xl my-10 align-middle justify-center'>Top5 crops of this month </p>
                            <Top5 data={state.data.context.top5} />
                        </div>
                    <div className='bg-white'>{" "}</div>
                    <div className='w-full md:w-[48%]'>
                        <p className='text-sm md:text-2xl my-10 align-middle justify-center'>Bottom5 crops of this month</p>
                        <Bottom5 data={state.data.context.bottom5}/>
                    </div>
                    </div>
                    <div>
                        <p className='text-sm md:text-2xl my-10 align-middle justify-center'>Sixmonths Forecast crops </p>
                        <div className="overflow-auto"><Sixmonths data={state.data.context.sixmonths}/></div>
                    </div>
                    </>
                ):<LoadingBox />
            } */}
      <div
        className="all-cropblocks"
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",

        //   alignItems: "center",
        //   padding: "30px",
        // }}
      >
        
        {Crops.map((content, i) => (
          <div
            key={content.name}
            className=" crop1 shadow h-80 
                    "
            // style={{
            //   margin: "3vw",
            //   padding: "10px",
            // }}
          >
            <Link
              style={{ display: "flex", flexDirection: "column" }}
              to={`/priceforecast/${content.name.toLowerCase()}`}
            >
              <img 
                src={content.icon}
                alt="..."
                className="crop-pic "
                // style={{
                //   height: "95%",
                //   width: "95%",
                //   margin: "10px auto",
                // }}
              />
              <h6 className="text-center ">{content.name}</h6>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crops;
