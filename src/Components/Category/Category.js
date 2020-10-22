import React, { useState } from 'react';
import style from './Category.module.css'
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


export function Category() {
    const [display, setDisplay] = useState(false)
    let listofitems = ['Mobiles Phones', 'Cars', 'MotorCycle', 'House', 'TV-Vedio-Audio', 'Tablets', 'Land & Plot']
    let Vehicles = ['Tractor & Trainer', 'Boats', 'Other Vehicles', 'Rikshaw & Chinchi', 'Buses,Vens and Trucks', 'Spare Parts', 'Cars Accessories', 'Cas on Installment', 'cars'];
    let Animals = ['Other Animals', 'Pet Food & Accessories', 'Horses', 'LiveStock', 'Dogs', 'Cats', 'Hens & Assesl', 'Birds', 'Fishes'];
    let Fashion = ['Other Fashion', 'Couture', 'Loans and Pets', 'Wedding', 'Swiching', 'Skin and HAir', 'Makeup', 'Jewellery', 'Footware', 'Cloths', 'Accessories']

    let showlist = () => {
        setDisplay(!display)
    }

    return (
        <div className={style.CategoryContainer}>
            <div>
                <Grid
                    container
                    justify="center"
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item xs={12} sm={2}>
                        <div className={style.CategoryHeading}>
                            <p>All Categories</p>
                            <p onClick={() => {
                                showlist()
                            }}>
                                {display ?
                                    <ExpandLessIcon />
                                    :
                                    <ExpandMoreIcon />
                                }
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={10}>
                        <div className={style.listofitems}>
                            {
                                listofitems.map((obj, ind) => {
                                    return (
                                        <div key={ind} className={style.items}>
                                            {obj}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                </Grid>
                <div className={display ? `${style.show}` : `${style.hide}`}>
                    <div>
                        <div className={style.dropdownheading}>Vehicles</div>
                        {
                            Vehicles.map((obj, ind) => {
                                return (
                                    <div className={style.dropdownitems} key={ind}>{obj}</div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className={style.dropdownheading}>Animals</div>
                        {
                            Animals.map((obj, ind) => {
                                return (
                                    <div className={style.dropdownitems} key={ind}>{obj}</div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className={style.dropdownheading}>Fashion And Beauty</div>
                        {
                            Fashion.map((obj, ind) => {
                                return (
                                    <div className={style.dropdownitems} key={ind}>{obj}</div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className={style.dropdownheading}>Animals</div>
                        {
                            Animals.map((obj, ind) => {
                                return (
                                    <div className={style.dropdownitems} key={ind}>{obj}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
