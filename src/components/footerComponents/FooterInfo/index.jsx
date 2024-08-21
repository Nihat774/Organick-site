import Logo from "../../Logo"
function Info(props) {
  return (
    <>
      <div className="flex justify-evenly h-[60vh]">
                <div className="flex flex-col justify-evenly text-end ">
                    <p className="text-[1.4rem] text-cyan-900 font-bold">Contact Us</p>
                    <div className="">
                        <p className="font-medium">Email</p>
                        <p className="text-stone-400">{props.email}</p>
                    </div>
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-stone-400">{props.phone}</p>
                    </div>
                    <div>
                        <p className="font-medium">Address</p>
                        <p className="text-stone-400">{props.address}</p>
                    </div>
                </div>
                <div className="w-[2px] h-[50vh] bg-stone-400"></div>

                <div className="flex flex-col justify-evenly gap-3 h-[40vh]">
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <div>
                        <p className="w-[32vw] " >Simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum simply dummy text of the printing </p>
                    </div>
                    <div className="flex justify-center gap-2">
                        <div><i class="fa-brands fa-instagram border rounded-full p-2 border-black bg-stone-200 text=cyan-900"></i></div>
                        <div><i class="fa-brands fa-facebook border rounded-full p-2 border-black bg-stone-200 text=cyan-900"></i></div>
                        <div><i class="fa-brands fa-twitter border rounded-full p-2 border-black bg-stone-200 text=cyan-900"></i></div>
                        <div><i class="fa-brands fa-pinterest border rounded-full p-2 border-black bg-stone-200 text=cyan-900"></i></div>
                    </div>

                </div>
                <div className="w-[2px] h-[50vh] bg-stone-400"></div>
                <div className="flex flex-col justify-evenly gap-2 h-[60vh]">
                    <p className=" text-[1.4rem] text-cyan-900 font-bold">Utility Pages</p>
                    <div className="flex flex-col justify-evenly text-stone-400 gap-3">
                        <p>Style Guide</p>
                        <p>404 Not Found</p>
                        <p>Password Protected</p>
                        <p>Licences</p>
                        <p>Changelog</p>
                    </div>
                </div>


            </div>
    </>
  )
}

export default Info
