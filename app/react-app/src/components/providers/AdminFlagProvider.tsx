import { createContext, ReactNode, FC } from "react"

export const AdminFlagContext = createContext({})

type Props = {
  children: ReactNode
}

export const AdminFlagProvider: FC<Props> = (props) => {
  const { children } = props
  const sampleObj = { sampleValue: "テスト" }

  return <AdminFlagContext.Provider value={sampleObj}>{children}</AdminFlagContext.Provider>
}
