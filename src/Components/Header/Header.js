import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import style from './Header.module.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import logo from '../../Assests/logo.svg'

export  function Header() {

    return (
        <div className={style.HeaderContainer}>
            <Grid 
            container
            justify="center"
            spacing={1}
            alignItems="center"
            >
                <Grid
                container
                justify="center"
                // spacing={1}
                item xs={6} sm={4}
                alignItems="center"
                >
                <Grid item xs={12} sm={3}>
                    <div className={style.Heading}>
                        <img src={logo} alt='logo' height='50px' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div className={style.Search1}>
                        <SearchIcon className={style.searchicon}/>
                        <input type='text' placeholder='Search city, area or local'/>
                        <ExpandMoreIcon  className={style.arrowicon}/>
                    </div>
                </Grid>
                </Grid>
                
                <Grid
                container
                item xs={6} sm={8}
                justify="center"
                spacing={1}
                alignItems="center"
                className={style.secongrid}
                >
                <Grid item xs={12} sm={9}>
                    <div className={style.Search2}>
                    <input type='text' placeholder='Find Cars, Mobile Phones and more...'/>
                    <SearchIcon className={style.searchicon2}/>
                    </div>
                </Grid>
                <Grid item xs={6} sm={1}>
                    <div className={style.LoginHeading}>
                       <p className={style.LoginHeadingwrite}> Login </p>
                       <p className={style.LoginHeadingunderline}></p>

                    </div>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <div className={style.LoginSell}>
                        <div>
                        <AddIcon className={style.LoginSellicon}/>
                        <p>Sell</p>
                        </div>
                    </div>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )

}