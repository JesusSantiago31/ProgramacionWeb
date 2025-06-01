

const InputForm = ({type, placeHolder, isRequired, evt}) => {
  return (
    <input  
    className="focus:outline-none placeholder:text-slate-100 p-1 border-b border-b-2"
    onChange={evt} 
    type={type} 
    placeholder={placeHolder} 
    required={isRequired}/>
  )
}

export default InputForm