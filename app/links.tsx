import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <>
        <ul className="p-10 text-left">
            <li className='py-5 hover:text-red-700'>
                <Link href="" className='p-1 rounded-full bg-slate-400'>About</Link>
            </li>
            <li className='py-5 hover:text-red-700'>
                <Link href="" className='p-1 rounded-full bg-slate-400'>Projects</Link>
            </li>
            <li className='py-5 hover:text-red-700'>
                <Link href="" className='p-1 rounded-full bg-slate-400'>Contact Me</Link>
            </li>
        </ul>
    </>
  )
}

export default Links