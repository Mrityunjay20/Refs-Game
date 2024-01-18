import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom";
import {} from 'react-dom'

const ResultModal =  forwardRef (function Modal({targetTime, remainingTime, onReset}, ref){
    const dialog = useRef();
    const usrLost = remainingTime <=0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);
    const score = Math.round((1-formattedRemainingTime/targetTime)*100)
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    });
    return createPortal(
    <dialog ref={dialog} className="result-modal">
        {usrLost && <h2>You Lost</h2>}
        {!usrLost && <>
            <h2>Your score is: <strong>{score}</strong></h2>
            <p>Your target time was {targetTime}</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        </>}
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>, 
    document.getElementById('modal')
    )
})

export default ResultModal;










