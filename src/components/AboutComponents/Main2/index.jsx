import ContentMain2 from "../Main2Content"
function Main2() {
    return (
        <>
            <div className="h-[100vh] flex justify-center " >
                <div className="flex flex-col justify-center h-[100vh]">
                    <img src="./public/About/Image (1).png" alt="" className="w-[45vw] h-[80vh] object-contain " />
                </div>
                <div className="flex flex-col justify-center">
                    <ContentMain2 />
                </div>
            </div>
        </>
    )
}

export default Main2
