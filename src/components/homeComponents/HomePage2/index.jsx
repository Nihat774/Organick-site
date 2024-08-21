import Card2 from "../CardToPage2"

function HomePage2() {
  return (
    <>
<div className="flex justify-center gap-5 h-[70vh] place-items-center">
<Card2 text1 = "Natural!!" text2 = "Get Garden Fresh Fruits" txt1Class = "font-yellowtail text-[1.3rem]" txt2Class = 'text-[1.7rem] font-bold' still = "bg-[url('../public/Home/page2/card2Photo.jpg')] bg-no-repeat w-[35vw] h-[43vh] bg-cover border rounded-[20px] flex flex-col justify-center text-white"/>
<Card2 text1 = "Offer!!" text2 = "Get 10% off on Vegetables " txt1Class = "text-green-500 font-yellowtail text-[1.3rem]" txt2Class = 'text-[1.7rem] font-bold text-cyan-800' still = "bg-[url('./public/Home/page2/card2.1Photo.png')] bg-no-repeat w-[35vw] h-[43vh] bg-cover border rounded-[20px] flex flex-col justify-center"/>
</div>
    </>
  )
}
export default HomePage2
