

function Content() {
    return (
        <>
            <div className=' flex flex-col gap-2 w-[20vw] absolute left-[20%] top-[40%]'>
                <p className='text-green-600 font-yellowtail text-[1.5rem]'>100% Natural Food</p>
                <p className='text-[2rem] font-bold  text-cyan-900 font-roboto'>Choose the best
                    healthier way
                    of life</p>
                <button className='border rounded-[10px] p-3 font-medium text-cyan-900 bg-orange-500 w-[13vw]'>
                    <span className='px-2 font-roboto'>Explore now</span>
                    <i className="fa-solid fa-circle-right"></i>
                </button>
            </div>
        </>
    )
}

export default Content
