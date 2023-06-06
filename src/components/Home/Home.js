import React from 'react'
import '../Home/Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/TFBVD/PC_Hero_3000x1200-2._CB588522059_.jpg"></img>

            {/* Product props = id, title, price, rating, img */}
            <div className="home__row">
                <Product
                    id="1"
                    title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Furious Red)"
                    price={399}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61l+14s5QVL._AC_UL320_.jpg"
                />
                <Product
                    id="2"
                    title="(Renewed) beatXP Vega X 1.43 AMOLED 466 * 466px Display One-Tap BT 5.2 Calling AI Voice Assistant Smartwatch (Iced Silver)"
                    price={2500}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/61fAE9Z5KNL._AC_UL450_SR450,320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="ORJILO Windproof Travel Umbrellas for Rain"
                    price={499}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/61HH-GwWLlL._AC_UL450_SR450,320_.jpg"
                />
                <Product
                    id="4"
                    title="Shining Diva Fashion 22pcs Latest Stylish Stackable Kunckle Rings Set for Women and Girls Butterfly Heart Boho Gold and Silver Plated Rings"
                    price={399}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61dK8fy1dRL._UY395_.jpg"
                />
                <Product
                    id="5"
                    title="Irida Naturals Rice Husk Mugs for Coffee - 300 ml Mint Green, Unbreakable Coffee Mug Prepared With Rice Husk & Bamboo Fiber Reusable"
                    price={299}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81njWrJjQhL._SY355_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="What I Learned About Investing from Darwin"
                    price={600}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41I+VAb1KnL._SX398_BO1,204,203,200_.jpg"
                />
            </div>
        </div>

    )
}

export default Home
