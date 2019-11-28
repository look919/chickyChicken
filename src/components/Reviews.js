import React from 'react'

const Reviews = () => (
    <div className="reviews">
        <div className="review">
            <div className="review__circle">
                <h2 className="heading-1--red review__number">2432</h2>
            </div>
            <div className="review__info">Osób lubi to</div>
        </div>
        <div className="review">
            <div className="review__circle">
                <h2 className="heading-1--red review__number">NR 1</h2>
            </div>
            <div className="review__info">W Mieście</div>
        </div>
        <div className="review">
            <div className="review__circle">
                <h2 className="heading-1--red review__number">4.7</h2>
            </div>
            <div className="review__info">na 104 opinie</div>
        </div>
    </div>
)

export default Reviews;