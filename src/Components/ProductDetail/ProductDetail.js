import React, { useEffect } from 'react';
import style from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Detail, detailpro } from '../../Reducer/ProductSlice';
import Grid from '@material-ui/core/Grid';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

export default function ProductDetail() {
    const { productid } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(detailpro);

    console.log(productid);

    useEffect(() => {
        dispatch(Detail(productid))
    }, [])
    console.log(data)

    if (!data.loading) {
        return (
            <h3>Loading</h3>
        )
    }
    return (

        <div className={style.ProductContainer}>
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={10} sm={8} className={style.imagesanddiscription}>
                    <div className={style.ImageGallery}>
                        <div className={style.TopImage}>
                            <img src='https://apollo-singapore.akamaized.net/v1/files/wb0b13aaai7t2-PK/image;s=1080x1080'></img>
                        </div>
                        <div className={style.arrayofimages}>
                            <img src='https://apollo-singapore.akamaized.net/v1/files/wb0b13aaai7t2-PK/image;s=1080x1080'></img>
                            <img src='https://apollo-singapore.akamaized.net/v1/files/wb0b13aaai7t2-PK/image;s=1080x1080'></img>
                            <img src='https://apollo-singapore.akamaized.net/v1/files/wb0b13aaai7t2-PK/image;s=1080x1080'></img>
                            <img src='https://apollo-singapore.akamaized.net/v1/files/wb0b13aaai7t2-PK/image;s=1080x1080'></img>
                        </div>
                    </div>
                    <div className={style.DiscriptionDetail}>
                        <h3>Detail</h3>
                        <div className={style.Detail}>
                            <div>
                                <div style={{color: 'gray'}}>Contdion</div>
                                <div>used</div>

                                <div style={{color: 'gray'}}>Contdion</div>
                                <div>used</div>
                            </div>
                        </div>
                        <hr />
                        <h3>Description</h3>
                        <div className={style.Discription}>

                            <p>
                                Discription I5 5th Gen 8gb Ram 256ssd Good condition Battery upto 6 hrs Orignal charger
                    </p>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={10} sm={4} className={style.ProductSellerInfo}>
                    <div className={style.productinfo}>
                        <div className={style.productprice}>
                        <div className={style.price}>
                            RS:140000
                        </div>
                        <div>
                            Icons Iconns
                        </div>
                        </div>
                        <div className={style.productname}>
                        Dell 5530/ 5520 Core i 5 3rd / 2nd Gen 15.6 Numpad Cam HDMI Fresh qty
                        </div>
                        <div className={style.citynameanddate}>
                        <div>
                            Karachi
                        </div>
                        <div>
                            Oct 24
                        </div>
                        </div>
                    </div>

                    <div className={style.sellerinfo}>

                    <div className={style.sellereading}>Seller Discription</div>
                    <div className={style.sellernamejoin}>
                        <img src='https://statics.olx.com.pk/external/base/img/avatar_2.png' width='80px' alt='img' />
                        <div >
                            <div className={style.SallerName}> Haroon Trader Laptop/Wholesale </div>
                            <div className={style.joindate}>Member since Nov 2016</div>
                        </div>
                        <NavigateNextIcon/>
                    </div>
                    <div className={style.chatseller}>Chat With Seller</div>
                    <div className={style.userContact}>
                        <CallOutlinedIcon/>
                        <div >
                            ** *** ****
                        </div>
                        <div className={style.sellnumber}>
                             Show Number
                        </div>
                    </div>
                     </div>
                    <div className={style.SellerLocation}></div>
                </Grid>
            </Grid>
        </div>

    )

}