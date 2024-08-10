// src/components/Card.tsx
import { FC } from "react"

type CardProps = {
  src: string
  alt: string
  className?: string // Allow className to be optional
}

const Card: FC<CardProps> = ({ src, alt, className }) => {
  return (
    <div className={` rounded-md ${className}`}>
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  )
}

export default Card
