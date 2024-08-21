function Send() {
  return (
    <>
      <div className="flex justify-center h-[60vh] place-items-center">
                <div className="bg-[url('../public/Home/Photo.jpg')] h-[35vh] w-[70vw] border rounded-[15px] flex justify-around place-items-center">
                    <p className="text-[2.3rem] text-white font-bold w-[20vw]">Subscribe to
                        our Newsletter
                    </p>
                    <form className="flex justify-evenly gap-3">
                        <input type="text" className="border p-4 rounded-[10px]" placeholder="Your Email Address" />
                        <input type="button" value="Subscribe" className="border bg-cyan-900 text-white w-[12vw] font-semibold p-4 rounded-[10px]" />
                    </form>
                </div>
            </div>
    </>
  )
}

export default Send
