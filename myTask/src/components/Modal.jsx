import React, { useState } from "react";

const Modal =() =>
{
    const[showModal, setShowModal]=useState(false);
    const closeModal=()=>
    {
        return setShowModal(false);
    }
    const MyModel = () =>
    {
        return(
            <>
            <p>dikh jaa</p>
            <button onClick={closeModal}>Mat dikh</button>
            </>
        );
    }
    return (
        <>
        <button onClick={()=> setShowModal(true)}>open me</button>
        {showModal && <MyModel closeModal={closeModal}/>}
        
        </>
    );
};
export default Modal;