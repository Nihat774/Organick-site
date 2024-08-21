import Button from "../../Button"

function Context() {
    return (
        <>
            <div className=' w-[47vw] p-4 flex flex-col justify-evenly gap-9'>
                <div className='flex flex-col gap-3'>
                    <p className='font-yellowtail text-green-500 text-[1.5rem]'>About us</p>
                    <p className='text-[1.7rem] font-roboto text-cyan-900 font-semibold w-[60%]'>We Believe in Working
                        Accredited Farmers</p>
                    <p className='text-zinc-400 w-[90%]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
                <div className='flex justify-between'>
                    <img src="../public/Home/page3/Vegan Food.svg" className='p-2' alt="" />
                    <div>
                        <p className='font-bold text-[1.2rem] text-cyan-900'>Organic Food Only</p>
                        <p className='text-zinc-400 w-[70%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <img src="../public/Home/page3/Mailbox Quality.svg" className='p-2' alt="" />
                    <div>
                        <p className='font-bold text-[1.2rem] text-cyan-900'>Quality</p>
                        <p className='text-zinc-400 w-[70%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
            <div className="">
            <Button btn = "Shop Now"/> 
            </div>
            </div>
        </>
    )
}

export default Context
