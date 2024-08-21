import React from 'react'

function Card2( props ) {
  return (
    <>
 
        <div className={props.still}>
          <div className=' flex flex-col justify-center gap-1 w-[14vw] ml-[20px]'>
            <p className={props.txt1Class}>{props.text1}</p>
            <p className={props.txt2Class}>{props.text2}</p>
          </div>
        </div>

        {/* <div className="bg-[url('./public/page2/card2.1Photo.png')] bg-no-repeat w-[35vw] h-[43vh] bg-cover border rounded-[20px] flex flex-col justify-center ">
          <div className='flex flex-col justify-center gap-1 w-[14vw]  ml-[20px]'>
            <p className='text-green-500'>Offer!!</p>
            <p className='text-[1.7rem] font-bold text-cyan-900'>Get 10% off
              on Vegetables</p>
          </div>
        </div> */}
    </>
  )
}

export default Card2
