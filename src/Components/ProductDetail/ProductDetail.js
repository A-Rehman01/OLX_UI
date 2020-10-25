import React, { useEffect } from 'react';
import style from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Detail, detailpro } from '../../Reducer/ProductSlice';
import Grid from '@material-ui/core/Grid';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

export default function ProductDetail() {
    const { productid } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(detailpro);
    const { detail } = data

    useEffect(() => {
        dispatch(Detail(productid))
    },[])
    console.log(data)
    console.log(detail)

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
                spacing={1}
            >
                <Grid item xs={11} sm={8} className={style.imagesanddiscription}>
                    <div className={style.ImageGallery}>
                        <div className={style.TopImage}>
                            <img src={detail?.images?.imgfrontside} alt='Img' />
                        </div>
                        <div className={style.arrayofimages}>
                            {
                                Object.keys(detail?.images).map((obj, ind) => {
                                    const temp = detail?.images[obj]
                                    return (
                                        <img src={temp} key={ind} alt='images' />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.DiscriptionDetail}>
                        <h3>Detail</h3>
                        <div className={style.Detail}>
                            {
                                Object.keys(detail?.Detail).map((obj, ind) => {
                                    const temp = detail?.Detail[obj]
                                    console.log(temp)
                                    console.log(obj)
                                    return (
                                        <div key={ind}>
                                            <div className={style.detailtag}>{obj}</div>
                                            <div>{temp}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <hr />
                        <h3>Description</h3>
                        <div className={style.Discription}>
                            <p>{detail?.discription}</p>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={11} sm={4} className={style.ProductSellerInfo}>
                    <div className={style.productinfo}>
                        <div className={style.productprice}>
                            <div className={style.price}>
                                RS:{detail?.productPrice}
                            </div>
                            <div>
                                <ShareOutlinedIcon style={{ fontSize: '25px', marginRight: '7px', marginTop: '6px' }} />
                                <FavoriteBorderOutlinedIcon style={{ fontSize: '26px', marginTop: '6px' }} />
                            </div>
                        </div>
                        <div className={style.productname}>
                            {detail?.productName}
                        </div>
                        <div className={style.citynameanddate}>
                            <div>{detail.City}</div>
                            <div>{detail.date}</div>
                        </div>
                    </div>

                    <div className={style.sellerinfo}>

                        <div className={style.sellereading}>Seller Discription</div>
                        <div className={style.sellernamejoin}>
                            <img src='https://statics.olx.com.pk/external/base/img/avatar_2.png' width='80px' alt='img' />
                            <div >
                                <div className={style.SallerName}>
                                    {detail?.sellername}
                                </div>
                                <div className={style.joindate}>
                                    Member Since {detail?.sellerjoindate}
                                </div>
                            </div>
                            <NavigateNextIcon />
                        </div>
                        <div className={style.chatseller}>Chat With Seller</div>
                        <div className={style.userContact}>
                            <div> <CallOutlinedIcon /> </div>
                            <div style={{ fontSize: '13px' }} >
                                ** *** ****
                            </div>
                            <div className={style.sellnumber}>
                                Show Number
                        </div>
                        </div>
                    </div>
                    <div className={style.SellerLocation}>
                        <div className={style.postedHEdaing}>Posted in</div>
                        <div className={style.completeAddress}>
                            {`${detail?.area}, ${detail?.City}, ${detail?.Province}`}
                        </div>
                        <div className={style.map}>
                            <img alt='map' src='https://maps.googleapis.com/maps/api/staticmap?center=31.463%2C74.291&language=en&size=640x256&zoom=15&scale=1&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=16Z14nsTljoXZRimmSwM8eteU3M=' />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>

    )

}