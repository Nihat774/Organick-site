import Button from "../../Button"
function ContentMain2() {
    return (
        <>
            <div className='w-[42vw] flex flex-col justify-evenly gap-2'>
                <div>
                    <p className='font-yellowtail text-[1.3rem] text-green-800'>About Us</p>
                    <p className='text-[2rem] text-cyan-900 font-bold w-[24vw]'>We do Creative
                        Things for Success</p>
                </div>
                <p className='text-stone-500'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <p className='text-stone-500'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <div className="flex justify-between py-4">
                    <div className="flex gap-2 place-items-center"> 
                        <img src="public/About/Tractor.svg" className="w-[50px] h-[50px]" alt="" />
                        <p className="font-semibold w-[15vw] text-cyan-900">Modern Agriculture Equipment</p>
                    </div>

                    <div className="flex gap-2 place-items-center"> 
                        <img src="public/About/Chemical Plant.svg" className="w-[50px] h-[50px]" alt="" />
                        <p className="font-semibold w-[15vw] text-cyan-900">No growth hormones are used</p>
                    </div>
                </div>
              <div className="h-[20vh] flex justify-center place-items-center">
                <Button btn = "Explore More" />
              </div>
            </div>
        </>
    )
}

export default ContentMain2
