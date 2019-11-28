import React from 'react';
import {Link} from 'react-router-dom'

import descPhotoOne from '../img/description-1.jpg'
import descPhotoTwo from '../img/description-2.jpg'


const Description = () => (
    <div className="description">
        <div className="description__photos">
            <img src={descPhotoTwo} alt="" className="description__photos--1"/>
            <img src={descPhotoOne} alt="" className="description__photos--2"/>
        </div>
        <div className="description__info">
            <h2 className="heading-2 description__info__title--1">Dowiedz się więcej</h2>
            <h2 className="heading-2 description__info__title--2">O naszej restauracji</h2>
            <p>ChickyChicken to restuaracja znajdująca się w Warszawie.</p>
            <p>W naszym lokalu nie brakuje miejsca, gdzie można dobrze zjeść, wypić piwo lub spotkać się z przyjaciółmi. W takiej sytuacji nie trudno o tłumy, polecamy <Link to='/reservationPage' className="btn-inline">zarezerwować sobie stolik</Link>.</p>
            <p>Podajemy zawsze świeżo i dobrze bo naszą ideą jest jakość i zadowolenie naszych klientów. Nasza kuchnia serwuje przede wszystkim pyszne, ogromne i soczyste kurczaki w złocistej panierce, lecz znajdzie się tu również coś dla smakoszy innych smaków.</p>
        </div>
    </div>
)

export default Description;

