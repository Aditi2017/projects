import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
           <img className="home__image"
           src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg"
           alt="" />
           <div className="centered">
               <h1 className="boho">BOHOstream</h1>
               <h2 className="lineTwo">Now you can stream your favourite TV shows at just $5.99/month!</h2>
            </div>
           
              
              <div className="home__row"> 
              <Product id="12345671"
                    title="Mettle Matte Lipstick"
                    price={10}
                    rating={5}
                    image="http://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-02-flora-coral-pink-13200498819155_1200x1200.jpg?v=1577303422" />

             <Product id="43678921"
                    title="SYSKA HS6810 Hair Straightener (Pink)"
                    price={15}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71TEErLCPzL._SL1500_.jpg" />
                    </div>

<div className="home__row"> <Product id="23875594"
                    title="Versace 7a Girls Watches"
                    price={20}
                    rating={5}
                    image="https://5.imimg.com/data5/JT/AN/MY-38985463/img-20181020-wa0017-500x500.jpg" />

             <Product id="57684883"
                    title="Makeup Revolution London Vivid Shimmer"
                    price={15}
                    rating={4}
                    image="https://media.allure.com/photos/5e442d6d04aeb10008c39874/1:1/w_1100,h_1100,c_limit/elf%20Baked%20Highlighter%20.jpg" />

             <Product id="49585809"
                    title="Phenomenal Round Sunglasses"
                    price={25}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51nhBGsC1QL._UX569_.jpg" />
                    </div>

<div className="home__row"><Product id="78968543"
                    title="Swiss Beauty High Shine Glitter Nail Polish - 2"
                    price={7.66}
                    rating={4}
                    image="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/4/d4b1c938904325006032_1.jpg" />
                    
                        </div>
                    
            
                   

        </div>
    )
}

export default Home
