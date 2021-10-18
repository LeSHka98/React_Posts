import styles from "./select.module.css"

function Select({children,value,onchange, defaultValue}) {
  return (
    <select 
      value={value}
      onChange={onchange}
      className={styles.select}>
        <option disabled>{defaultValue}</option>
        {children}
    </select>
  )
}

export default Select