
import HomePage1 from "../../homeComponents/HomePage1"
import HomePage2 from "../../homeComponents/HomePage2"
import HomePage3 from "../../homeComponents/HomePage3"
import Products from "../../homeComponents/HomePage4"
import Page5 from "../../homeComponents/HomePage5"
import Button from "../../Button";
function HomePage() {
  return (
    <>
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
      <div className="flex justify-center  h-[165vh] py-5 ">
        <div className="grid grid-cols-4 gap-[15px] w-[60vw]  h-[145vh] ">
          <Products />
          <div className=" w-[60vw] flex justify-center place-items-center">
            <Button btn="Load More" />
          </div>
        </div>
      </div>
      <Page5 />
    </>
  )
}

export default HomePage
