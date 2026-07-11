import React, { useEffect, useState } from 'react'

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [visible,setVisible]=useState(9);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))

  }, []);
  const Next=(()=>{
   setVisible((prev)=>prev+9)
  })
  return (
    <div className='bg-olive-600 w-full'>
      <div className='text-center text-3xl font-bold py-[20px]'>Explore your intrests</div>
      <div className='grid grid-cols-3 ml-[40px] gap-8'>
        {products.slice(0,visible).map((card) => {
          return (
            <div key={card.id} className='border-[1px] border-gray-300 w-[350px] h-[400px] pl-[25px] pt-[30px] rounded-lg bg-slate-900 text-slate-50'>
              <div className="relative">
                <img src={card.thumbnail} alt="hotel" className="w-[300px] h-[200px] rounded-lg" />
                <span className="absolute top-2 right-2 bg-yellow-100 text-black px-2 py-1 rounded-md font-bold">⭐ {card.rating}</span>
              </div>
              <h3 className='mt-[15px] ml-[10px] text-xl font-bold'>{card.title} </h3>

              <div className='flex justify-between mx-[10px] mt-[25px]'>
                <p className=' ml-[10px] '>Category: {card.category}</p>
                <span className='text-blue-500 s'>Price: {card.price}</span>

              </div>
            </div>
          );
        })}
   
      </div>
    {visible<products.length &&(<button onClick={Next} className='h-[49px] w-[130px] mt-[50px] bg-white text-black ml-[650px]'>LOAD MORE</button>)}  
    </div>
  );
};
export default LoadMore;
