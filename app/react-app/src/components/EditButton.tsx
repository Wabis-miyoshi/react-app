import { useContext } from "react"
import { AdminFlagContext } from "./providers/AdminFlagProvider"

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
}

type IsAdmin = { isAdmin: boolean }

export const EditButton = (props: IsAdmin) => {
  const { isAdmin } = props
  const contextValue = useContext(AdminFlagContext)
  console.log(contextValue)

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  )
}