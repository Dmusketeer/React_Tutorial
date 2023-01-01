import React,{useEffect, useRef} from 'react'
function FocusInput() {
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[]);
    return (

    <div>
    <form action="">
        <label htmlFor="input">UserName : </label>
        <input ref={inputRef} type="text" />
    </form>
    </div>
  )
}

export default FocusInput