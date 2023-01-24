import styles from "./InputControl.module.css"


const InputControl = (props) => {
  return (

    <div>

       <div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props}></input>

    </div>
    </div>
   
  )
}

export default InputControl