import React from 'react'

import {Cutlery, RightArrow, LeftArrow} from '../img/Icons'


const InfoBarReserv = () => (
    <div className="reservation__infoBar">
       
        <div className="reservation__infoBar__icons">
            <LeftArrow />
            <RightArrow />
        </div>
        <ul className="reservation__infoBar__info">
            <li className="reservation__infoBar__info__item">Rezerwacja stolika jest darmowa</li>
            <li className="reservation__infoBar__info__item">Brak potwierdzenia rezerwacji</li>   
            <li className="reservation__infoBar__info__item u-margin-bottom-medium">Rezerwacja na maksymalnie 6 osób</li>          
            <li className="reservation__infoBar__info__item reservation__infoBar__info__item--red">Wynajem piętra 100zł/godzinę</li>
            <li className="reservation__infoBar__info__item reservation__infoBar__info__item--red">Minimalny czas wynajmu to 2 godziny</li>
            <li className="reservation__infoBar__info__item reservation__infoBar__info__item--red">Potwierdzenie rezerwacji telefonicznie/emailem co najmniej dzień wcześniej</li>


        </ul>

        <Cutlery />
    </div>
)
    


export default InfoBarReserv


