function Logo() {
    return (
        <>
            <div className="w-[60%] flex justify-around">
                <div className="flex gap-2">
                    <img className="h-[8vh] mt-[5px] " src="../public/Logo.svg" alt="" />
                    <p className="font-semibold text-2xl  flex flex-col justify-center font-roboto text-cyan-900">Organick</p>
                </div>
            </div>
        </>
    )
}

export default Logo
