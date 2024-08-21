import Send from "../FooterSend"
import Info from "../FooterInfo"
import Copy from "../CopyRight"
function Footer() {
    return (
        <>
            <Send />
            <Info email="abcd123@gmail.com" phone="666 888 888" address="88 road, borklyn street, USA" />
            <Copy />
        </>
    )
}
export default Footer