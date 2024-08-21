import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex place-items-center gap-7 font-bold font-roboto text-[1rem]">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                <NavLink to="/pages" >
                    <select name="Pages" id="" value="" className="bg-inherit">
                        <option value="">Pages</option>
                        <option value="">info</option>
                        <option selected="selected" value="">settings</option>
                    </select>
                </NavLink>
                <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>Shop</NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
                <NavLink to="/news" className={({ isActive }) => (isActive ? "active" : "")}>News</NavLink>
            </div>
        </>
    )
}

export default Navbar
