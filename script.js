const { useState, useEffect } = React;

function App() {
    const ratingComments = [
        'Vasat',
        'Pek iyi değil',
        'Nötr',
        'İyi',
        'Harika'
    ];

    return /*#__PURE__*/ (
        React.createElement(StarRating, {

            title: "Hiç Yorum Yok, Yorum Ekleyin",
            comments: ratingComments,
            ratingOnChange: rating => console.log(rating)
        }));


}

function StarRating(props) {
    const [stars, setStars] = useState([1, 2, 3, 4, 5]);
    const [rating, setRating] = useState(5);

    function onClickStarRating(rating) {
        setRating(rating);
        props.ratingOnChange && props.ratingOnChange(rating);
    }

    return /*#__PURE__*/ (
        React.createElement("div", { className: "star-rating-wrapper center" }, /*#__PURE__*/
            React.createElement("h1", null, props.title || "Star Rating Component"), /*#__PURE__*/
            React.createElement("div", { className: "star-rating-container" },

                stars.map((starNum) => /*#__PURE__*/
                    React.createElement("div", {
                        onClick: () => onClickStarRating(starNum),
                        className: starNum <= rating ? 'star-rating-item selected' : 'star-rating-item'
                    }, "\u2605"))),
            props.comments && /*#__PURE__*/ React.createElement("p", null, props.comments[rating - 1])));


}


ReactDOM.render( /*#__PURE__*/ React.createElement(App, null), document.getElementById("app"));