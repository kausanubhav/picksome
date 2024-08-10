import { FC } from "react"
import { FaArtstation } from "react-icons/fa6"

type HeaderProps = {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="  container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <FaArtstation width={30} height={30} />
        </span>

        <div className="flex-1 flex justify-center items-center ">
          <span className="text-3xl font-bold text-white">PickSome</span>
        </div>
      </div>
    </div>
  )
}

export default Header
