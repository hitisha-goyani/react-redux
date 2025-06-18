import React from "react";
import { deCount, inCount, reCount } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  let storeCount = useSelector((store) => store.count);
  const dispatch = useDispatch();

  // console.log(store.getState())

  //     function handleInc(){
  //         // store.dispatch({type:"INC"})

  //  dispatch({type:"INC"})
  //     }

  // function handleDec(){
  //     // store.dispatch({type:"DEC"})
  //     //  dispatch({type:"DEC"})
  //     //  dispatch(incCount())
  // }

  return (
    <div>
      <div className="max-x-7xl mx-auto text-center">
        <h2 className="font-bold text-2xl my-3 border border-slate-600 max-w-16 m-auto rounded">{storeCount}</h2>
        <button
          type="button"
          onClick={() => dispatch(inCount())}
          class="focus:outline-none text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:ring-slate-500  rounded-full text-xl p-3 me-2  dark:focus:ring-slate-700"
        >
          ➕
        </button>
        <button
          type="button"
          onClick={() => dispatch(deCount())}
          class="focus:outline-none text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:ring-slate-500  rounded-full text-xl p-3 me-2  dark:focus:ring-slate-700"
        >
          ➖
        </button>
        <button
          type="button"
          onClick={() => dispatch(reCount())}
          class="focus:outline-none text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:ring-slate-500  rounded-full text-xl p-3 me-2 dark:focus:ring-slate-700"
        >
          🔄️
        </button>
      </div>
    </div>
  );
};

export default Counter;
