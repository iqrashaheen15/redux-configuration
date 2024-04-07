'use client'
import { decrement, increment } from "@/redux/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


export default function Home() {
   const counter = useAppSelector((state)=>state.counter.value)
   const dispath = useAppDispatch()

  return (
   <>
   <h1 className="text-5xl text-center text-blue-950 my-10">Counter App</h1>

   <div className="flex justify-center gap-10">
      <button id="increment" className="py-2 px-8 bg-slate-800 text-white text-3xl rounded-md" onClick={()=>dispath(increment())}>+</button>
      <p className="bg-slate-80 text-2xl text-center">{counter}</p>
      <button id="decrement" className="py-2 px-8 bg-slate-800 text-white text-3xl rounded-md" onClick={()=>dispath(decrement())}>-</button>
   </div>

   </>
  );
}
