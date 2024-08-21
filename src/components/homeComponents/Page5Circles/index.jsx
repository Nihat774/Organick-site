
function Circle(props) {
  return (
    <>
      <div className="border-2 border-green-500 rounded-full w-[9vw] h-[20vh] flex flex-col justify-center">
        <p className="text-[1.6rem] font-bold text-cyan-900">{props.number}</p>
        <p className="text-[.7rem] text-cyan-900 font-medium">{props.txt}</p>
      </div>
    </>
  )
}

export default Circle
