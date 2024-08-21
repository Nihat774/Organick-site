import Content3 from "../MainContent3"
import Main3Card from "../Main3Card"
function Main3() {
  return (
    <>
      <div className="h-[90vh] flex justify-center">
        <div>
          <Content3 />
        </div>
        <div className="w-[40vw] flex flex-col justify-center">
          <img src="public/About/Image (2).png" className="w-[70vw] h-[70vh] object-contain" alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <Main3Card img="public/About/Main3Cards/Icon.svg" text1="Return Policy" text2="Simply dummy text of the printintypesetting industry." />
        <Main3Card img = "public/About/Main3Cards/Icon (1).svg" text1 = "100% Fresh" text2 = "Simply dummy text of the printintypesetting industry."/>
        <Main3Card  img = "public/About/Main3Cards/Icon (2).svg" text1 = "Support 24/7" text2 = "Simply dummy text of the printintypesetting industry."/>
        <Main3Card  img = "public/About/Main3Cards/Icon (3).svg" text1 = "Secured Payment" text2 = "Simply dummy text of the printintypesetting industry."/>
      </div>
    </>
  )
}

export default Main3
