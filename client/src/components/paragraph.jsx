import React from 'react'

const Paragraph = ({ header, heading, content }) => {
  return (
    <div className='text-justify'>
        <h6 className='text-[#2880B9]  text-xl md:text-2xl font-bold'>
                {header}
            </h6>
            <h1 className='font-darker-grotesque text-left text-2xl md:text-4xl font-bold '>
                {heading}
            </h1>
            <div className='mt-4 font-dm-sans text-lg flex flex-col gap-4'>
                {content}
            </div>
    </div>
  )
}

export default Paragraph