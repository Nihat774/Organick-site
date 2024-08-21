import SubHeading from "../../SubHeading"
import Products from "../../homeComponents/HomePage4"
import NewProducts from "../../ShopComponenets/newProducts"
const ShopPage = () => {
  return (
    <>
      <SubHeading still="bg-[url('public/Shop/Image.png')]  h-[40vh]  bg-cover bg-no-repeat h-[40vh] flex  justify-center place-items-center" text="Shop" />
      <div className=" h-[180vh] py-5 flex flex-col justify-center place-items-center">
        <div className="grid grid-cols-4 gap-[15px] w-[60vw]  ">
          <Products />
          <NewProducts />
        </div>
      </div>
    </>
  )
}

export default ShopPage
