import React from 'react'

type Props = {
    title: string;
    size: string;
}

export default function Title({title, size}:Props) {
  return (
<h1 className={`text-xl sm:text-2xl md:text-${size} text-center p-2 sm:p-3 font-light w-full md:w-[100%]`}>
  {title}
</h1>
  )
}
