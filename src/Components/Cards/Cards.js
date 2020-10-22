import React, { useEffect } from 'react';
import style from './Cards.module.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { productdata, AddItems } from '../../Reducer/ProductSlice';
import Grid from '@material-ui/core/Grid';

let LessDetail = (data) => {
    var returndata = '';
    if (data) {
        for (var i = 0; i <= 40; i++) {
            if (data.length == i) {
                returndata = returndata + '...'
                return returndata;
            }
            returndata = returndata + data[i]
        }
        returndata = returndata + '...'
        return returndata;
    }
    else {
        return ''
    }
}

export function Cards() {
    const data = useSelector(productdata);
    console.log(data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AddItems())
    }, [])

    if (!data.loading) {
        return (
            <h3>Loading</h3>
        )
    }

    return (

        <div className={style.CardsCantainer}>
            <p className={style.Recomendation}>Fresh recommendations</p>
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={1}
                className={style.MainGrid}
            >
                {
                    data.productlist.map((obj) => {
                        return (
                            <Grid item xs={10} sm={3}>
                                <div className={style.card}>
                                    <div className={style.Uppercard}>
                                        {
                                            obj.featured ?
                                                <p className={style.Featured}>Featured</p>
                                                :
                                                null
                                        }
                                        <img
                                            src='https://th.bing.com/th/id/OIP.jhsY-ZuGr_v40-V6oXNo1wHaEt?w=246&h=180&c=7&o=5&dpr=1.56&pid=1.7'
                                            alt='ProductImg'
                                            className={obj.featured ? `${style.Productimg}` : `${style.Productimgold}`}
                                        />
                                        <FavoriteBorderIcon />
                                    </div >
                                    <div className={style.BottomCard}>
                                        <div className={style.ProductDetail}>
                                            <div className={style.productPrice}>Rs {obj.productPrice}</div>
                                            <div className={style.productName}>{LessDetail(obj.productName)}</div>
                                        </div>

                                        <div className={style.addressData}>
                                            <div className={style.AddressCity}>{`${obj.area},${obj.city}`}</div>
                                            <div className={style.Date}>{obj.date}</div>
                                        </div>
                                    </div>
                                </div>

                            </Grid>
                        )
                    })
                }
            </Grid>

        </div>
    )
}
