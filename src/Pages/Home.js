import React from 'react';


//Components
import { Cards } from '../Components/Cards/Cards';
import { CardsCarousel } from '../Components/CardsCarousel/CardsCarousel';
import { Category } from '../Components/Category/Category';

export default function Pages (){

    return(

        <div>
            <Category />
            <CardsCarousel/>
            <Cards/>
        </div>

    )

}