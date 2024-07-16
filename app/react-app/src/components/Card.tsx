import { EditButton } from "./EditButton"

const style: React.CSSProperties = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9bdb0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

type IsAdmin = { isAdmin: boolean }

export const Card = (props: IsAdmin) => {
  const { isAdmin } = props
  return (
    <div style={style}>
      <p>山田太郎</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  )
}
