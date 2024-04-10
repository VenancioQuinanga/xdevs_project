import styles from './Input.module.css'
function Input({type,name,id,className,placeholder,value,event}) {
  return (
    <>
      <input 
      type={type} 
      id={id} 
      className={className}
      name={name} 
      placeholder={placeholder}
      onInput={event}
      value={value}/>
    </>
  );
}

export default Input;
