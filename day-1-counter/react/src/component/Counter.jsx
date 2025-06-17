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
        <h2 className="font-bold text-2xl my-3">0</h2>
        <button
          type="button"
          onClick={() => dispatch(inCount())}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  rounded-full text-xl p-4 me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => dispatch(deCount())}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  rounded-full text-xl p-4 me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => dispatch(reCount())}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  rounded-full text-xl p-4 me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
