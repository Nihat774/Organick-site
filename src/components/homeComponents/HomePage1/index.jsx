import Content from '../../Content'
function HomePage1() {
  return (
    <>
     <div className="bg-[url('./public/Home/page1/Image.png')] h-[85vh] bg-cover bg-no-repeat">
        <img src="./public/Home/page1/Group.png" alt="" />
        <img src="./public/Home/page1/Group (1).png" alt=""  className='absolute right-[5%] top-[15%] '/>
         <img src="./public/Home/page1/Group (2).png" alt="" className='absolute left-[10%] top-[48%] '/>
        <img src="./public/Home/page1/Group (3).png" alt="" className='w-[10vw] absolute top-[74%]'/>
        <img src="./public/Home/page1/Group (4).png" alt="" className='absolute right-[1%] bottom-[5%] w-[10vw]' />  
        <img src="./public/Home/page1/root.png" alt="" className='absolute right-[4%] top-[77%] h-[25vh]' />  
        <img src="./public/Home/page1/strawberry.png" alt="" className='absolute left-[40%] top-[25%] h-[20vh]' />  
        <Content />
        
        </div> 
    </>
  )
}
export default HomePage1
