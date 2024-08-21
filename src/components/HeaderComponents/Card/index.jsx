

function Card() {
    return (
        <>
            <div className="border  flex felx-col justify-center rounded-[22px] h-fit ">
                <div className="rounded-full h-fit py-2 px-2 mt-1 ml-1 border  bg-cyan-800 text-white flex flex-col justify-center">
                    <i className="fa-solid fa-cart-shopping "></i>
                </div>
                <div className="text-green-950 font-medium flex flex-col justify-center p-2">Card(0)</div>
            </div>
        </>
    )
}

export default Card
