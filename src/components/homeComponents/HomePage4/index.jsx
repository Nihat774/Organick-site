import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            {
                products.map(({ img, name, oldPrice, price,situation }) => {
                    return (
                        <>
                            <div className="border rounded-[10px] h-fit">
                                <p className="py-2 rounded-[15px] mt-3 ml-3 bg-cyan-900 w-[7vw] text-white text-semibold text-center">{situation}</p>
                                <div><img src={img} alt="" className="h-[33vh] w-[25vw] pt-[3px]" /></div>
                                <div className="text-cyan-900 font-medium p-2">{name}</div>
                                <hr className="w-[13vw] flex justify-center" />
                                <div className="flex justify-between py-2">
                                    <div>
                                        <strike className=" text-neutral-500 p-1 text-[.9rem]">{oldPrice}</strike>
                                        <span className=" font-bold text-cyan-900 text-[1.2rem] p-1">{price}</span>
                                    </div>
                                    <div className="text-[.8rem] flex place-items-center px-2">
                                        <i className="fa-regular fa-star "></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                )}


        </>
    )
}

export default Products
