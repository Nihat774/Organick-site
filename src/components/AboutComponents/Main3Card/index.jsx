function Main3Card(props) {
    return (
        <>
            <div className="border  flex flex-col gap-3 text-center p-4 py-6 rounded-[15px]">
                <div className="flex justify-center place-items-center h-[14vh] ">
                    <img src={props.img} className=" border w-fit h-fit p-3 bg-stone-200 rounded-[10px]" alt="" />
                </div>
                <p className="text-[1.3rem] font-bold text-cyan-900">{props.text1}</p>
                <p className="w-[12vw] text-stone-500">{props.text2}</p>
            </div>
        </>
    )
}

export default Main3Card
