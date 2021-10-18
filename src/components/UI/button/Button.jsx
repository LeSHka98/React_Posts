import styles from './Button.module.css'

function Button({children,type, ...props}) {
  return (
  <button {...props} className={styles[type]||styles.btn}>
    {children}
  </button>
  )
}

export default Button