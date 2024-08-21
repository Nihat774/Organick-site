import Input from "../Input"
import Navbar from "../Navbar"
import Card from "../Card"
import Logo from "../../Logo"
function Header() {
    return (
        <header className="flex justify-evenly p-7 bg-gray-300">
            <div className="w-[60%] flex justify-around">
                <Logo />
                <Navbar />
            </div>

            <div className="flex flex-col justify-center gap-4">
                <div className="flex justify-center gap-4">
                    <Input />
                    <Card />
                </div>
            </div>

        </header>
    )
}

export default Header
