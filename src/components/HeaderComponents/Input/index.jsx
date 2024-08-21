

function Input() {
  return (
    <>
      <div className="relative">
        <input className="p-2 px-4 border  rounded-[20px] bg-neutral-200" maxLength={13} type="text" />
        <div className="border  rounded-full w-fit h-fit py-2 px-3 absolute top-0 right-0 bg-green-400 text-white"><i className="fa-solid fa-magnifying-glass"></i></div>
      </div>
    </>
  )
}

export default Input
