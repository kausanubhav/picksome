import { FC } from "react"
import Header from "../components/Header"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1481966115753-963394378f23?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          className="w-full h-[200px] object-cover" 
        />
      </div>

      <div className="container mx-auto py-10 flex-1">{children}</div>
    </div>
  )
}

export default Layout
