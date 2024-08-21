import Circle from "../Page5Circles"
function Context1() {
    return (
        <>
            <div className="w-[50vw]  flex flex-col gap-3">
                <div>
                    <p className="font-yellowtail text-green-600 text-[1.5rem]">Testimonial</p>
                    <p className="text-[1.5rem] text-cyan-900 font-bold">What Our Customer Saying?</p>
                </div>

                <div className="flex flex-col gap-5 place-items-center">
                    <div className="flex flex-col gap-2">
                        <img className="rounded-full  w-[100px] h-[100px] object-cover" src="./public/Home/page5/prImg.jpeg" alt="" />
                        <div className="flex">
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <p className="w-[46vw] text-stone-500">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <div>
                        <p className="font-medium text-cyan-900 text-[1.3rem]">Sara Taylor</p>
                        <p className="text-stone-500">Consumer</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly gap-9">
                <Circle number="100%" txt="Organic" />
                <Circle number="285" txt="Active Product" />
                <Circle number="350+" txt="Organic Orchads" />
                <Circle number="25+" txt=" Years of Farming" />
            </div>      
            </>
    )
}

export default Context1

