import React from 'react';
import ImageGallery from 'react-image-gallery';
import style from './ProductDetail.module.css';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://apollo-singapore.akamaized.net/v1/files/5bxvdynfv3ez1-PK/image;s=1080x1080',
        thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/5bxvdynfv3ez1-PK/image;s=1080x1080',
    },
];

export  function ImgGallery() {
    return (

        <div className={style.ImageGallery}>
            <ImageGallery
            showIndex={true}  
            showPlayButton={false} 
            showFullscreenButton={true}
            items={images} />
        </div>

    )

}