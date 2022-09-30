import { FC, ReactNode } from "react"
import Footer from "./footer/Footer"


const Layout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div>

      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
