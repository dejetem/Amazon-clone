import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                  className="home_image"
                  src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_SADLPDesktop_1440x675_FINAL_en-CA_FT_PVD4020_MLP_Hunters_RUSH.jpg"
                  alt="amazon_prime"
                />
                <div className="home_row">
                   <Product 
                     id="12"
                     title="Iphone 12 pro max"
                     price={1000}
                     image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021658000"
                     rating={5}
                   />
                   <Product 
                     id="123"
                     title="samsung tv"
                     price={222}
                     image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$"
                     rating={5}
                   />
                </div>
                <div className="home_row">
                   <Product
                      id="124"
                      title="samsung galaxy S20 Ultra"
                      price={1022}
                      image="https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyS20Ultra__1_.JPG"
                      rating={5}
                   />
                   <Product 
                      id="125"
                      title="huawei P20 pro"
                      price={922}
                      image="https://www.eprice.pk/wp-content/uploads/2019/10/Huawei-P20-Pro-Mobile-Price-in-Pakistan-1.jpg"
                      rating={5}
                   />
                   <Product 
                      id="126"
                      title="PS5"
                      price={1222}
                      image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg"
                      rating={5}
                   />
                </div>
                <div className="home_row">
                   <Product 
                      id="127"
                      title="Xbox series X"
                      price={1322}
                      image="https://media.gamestop.com/i/gamestop/11108371/Xbox-Series-X"
                      rating={5}
                   />
                </div>
            </div>
        </div>
    )
}

export default Home
