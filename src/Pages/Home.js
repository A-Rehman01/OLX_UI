import React from 'react';

//Components
import { Cards } from '../Components/Cards/Cards';
import { CardsCarousel } from '../Components/CardsCarousel/CardsCarousel';
import { Category } from '../Components/Category/Category';
import { UpperAdd } from '../Components/UpperAdd'

export default function Pages() {

    return (

        <div>
            <Category />
            <UpperAdd />
            <CardsCarousel />
            <Cards />
        </div>

    )

}