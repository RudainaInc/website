import React from 'react'


const Basket = ({currdeg, onChange}) => {

    return ( 
        <div>
            <div class="section-header">
                <span class="text" >The Various Baskets We Offer</span>
            </div>
            <div class="basket-section">
                <div class="container">
                    <div class="basketContainer">
                        <div id="carousel" style={{transform: "rotateY("+currdeg+"deg)" }}>
                            <div class="item a"><img src="img/basket.jpeg" alt=""/></div>
                            <div class="item b"><img src="img/basket2.jpeg" alt=""/></div>
                            <div class="item c"><img src="img/basket3.jpeg" alt=""/></div>
                        </div>
                    </div>
                    <input type="submit" style={{marginRight: 100+'px'}} name='n' onclick={onChange} class="nextButton fas fa-angle-double-right"/>
                    <input type="submit" style={{marginLeft: 100+'px'}} name='p' onclick={onChange} class="prevButton fas fa-angle-double-left"/>
                </div>
            </div>
        </div>

    )
}


export default Basket;