import classes from "./CssModules.module.scss"

export function CssModules() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Module です</p>
      <button className={classes.button}>ボタン</button>
    </div>
  )
}

export default CssModules
