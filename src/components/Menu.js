import React from 'react'
import { connect } from 'react-redux'
import getMenu from '../selectors/menu'
import MenuItem from '../components/MenuItem'
import { Link } from "react-scroll";




const Menu = (props) => {
    
        return (
            <div className="menu">
                <div className="menu__navlinks">
                    <Link to="boxes" 
                    className="menu__navlink" spy={true} smooth={true}
                    offset={-70} duration= {1500}
                    >Boxy</Link>
                    <Link to="others" 
                    className="menu__navlink" spy={true} smooth={true}
                    offset={-70} duration= {1500}
                    >Inne Dania</Link>
                    <Link to="snacks" 
                    className="menu__navlink" spy={true} smooth={true}
                    offset={-70} duration= {1500}
                    >Przekąski</Link>
                    <Link to="drinks" 
                    className="menu__navlink" spy={true} smooth={true}
                    offset={-70} duration= {1500}
                    >Napoje</Link>
                    <Link to="sauces" 
                    className="menu__navlink" spy={true} smooth={true}
                    offset={-70} duration= {1500}
                    >Dodatkowe Sosy</Link>
                </div>

                    <div className="menu--boxes" id="boxes">
                        <h2 className="heading-2--red menu--header">Boxy:</h2>
                        {!!(props.menu.length !== 0) ? (
                                    Object.values(props.menu[0]).map((el) => {
                                        return <MenuItem key={el.id} {...el}/>
                                    })
                                ) : (
                                    <div>Something went wrong, please try again later</div>
                                )}
                    </div>
                    <div className="menu--others" id="others">
                        <h2 className="heading-2--red menu--header">Inne dania:</h2>
                        { !!(props.menu.length !== 0) ?  (
                                    Object.values(props.menu[2]).map((el) => {
                                        return <MenuItem key={el.id} {...el}/>
                                    })
                                ) : (
                                    <div>Something went wrong, please try again later</div>
                                )}
                    </div>
                    <div className="menu--snacks" id="snacks">
                        <h2 className="heading-2--red menu--header">Przekąski:</h2>
                        { !!(props.menu.length !== 0) ?  (
                                    Object.values(props.menu[4]).map((el) => {
                                        return <MenuItem key={el.id} {...el}/>
                                    })
                                ) : 
                                (
                                    <div>Something went wrong, please try again later</div>
                                )}
                    </div>
                    <div className="menu--drinks" id="drinks">
                        <h2 className="heading-2--red menu--header">Napoje</h2>
                        { !!(props.menu.length !== 0) ? (
                                    Object.values(props.menu[1]).map((el) => {
                                        return <MenuItem key={el.id} {...el}/>
                                    })
                                ) : (
                                    <div>Something went wrong, please try again later</div>
                                )}
                    </div>
                    <div className="menu--sauces" id="sauces">
                        <h2 className="heading-2--red menu--header">Dodatkowe Sosy</h2>
                        { !!(props.menu.length !== 0) ? (
                                    Object.values(props.menu[3]).map((el) => {
                                        return <MenuItem key={el.id} {...el}/>
                                    })
                                ) : (
                                    <div>Something went wrong, please try again later</div>
                                )}
                    </div>
                
            </div>
        )         
 }


const mapStateToProps = (state) => {
    return {
      menu: getMenu(state.menu)
    };
};

  
export default connect(mapStateToProps)(Menu);
  
/*

                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 1</h4>
                        <p className="menu__description">2 skrzydełka, 2 stripsy, 2 polędwiczki, frytki belgijskie, sałatka</p>
                    </div>
                    <button className="btn menu__btn">
                        <CartIcon/>
                        11,95zł
                    </button>  
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 2</h4>
                        <p className="menu__description">3 stripsy, 3 polędwiczki, frytki belgijskie, sałatka</p>
                    </div>
                    <button className="btn menu__btn">
                        <CartIcon/>
                        13,95zł
                    </button>  
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 3</h4>
                        <p className="menu__description">5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        21,95zł
                    </button>   
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 4</h4>
                        <p className="menu__description">10 skrzydełek, 5 stripsów, 2x frytki belgijskie, 2x sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        29,95zł
                    </button>   
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 5</h4>
                        <p className="menu__description">10 skrzydełek, 5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        37,95zł
                    </button>   
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 6</h4>
                        <p className="menu__description">30 skrzydełek, 2xfrytki belgijskie, 2x sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        45,95zł
                    </button>   
                </div>
*/