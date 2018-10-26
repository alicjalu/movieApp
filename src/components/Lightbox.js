import React from 'react';


class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.comment = React.createRef();
        this.state = {
            commentBtnTxt: "DODAJ KOMENTARZ",
            like: false,
            hate: false,
            fav: false,
            comment: "Wpisz swoją opinię...",


        }

    }

    likeClick = () => {
        const isLike = this.state.like;
        this.setState({
            like: isLike ? false : true,
            hate: false,

        })
    }

    hateClick = () => {
        const isHate = this.state.hate;
        this.setState({
            like: false,
            hate: isHate ? false : true
        })

    }

    favClick = () => {
        const isFav = this.state.fav;
        this.setState({
            fav: isFav ? false : true
        })

    }

    commentClick = () => {
        this.setState({
            comment: this.comment.current.value

        })
        console.log(this.comment.current.value);

    }
    handleQuit = (event) => {
        console.log("klikam na ixa", event)
        if (typeof this.props.onClose === 'function') {
            this.props.onClose(event);
        }
    }

    render() {
        return (
            <div className="lightbox">
                <div className="lightbox__window">
                    <div className="lightbox__content">
                        <img src={this.props.movie.posterUrl} alt="movie poster"
                             className="lightbox__img"/>
                        <div className="lightbox__data">
                            {/*<span >x</span>*/}
                            <i className="fas fa-times lightboxExit"onClick={e=> this.handleQuit(e)}></i>
                            <h1>Tytuł:</h1>
                            <span>{this.props.movie.title}</span>
                            <h2>Reżyser:</h2>
                            <span>{this.props.movie.director}</span>
                            <h2>Rok produkcji:</h2>
                            <span>{this.props.movie.year}</span>
                            <h2>Opis:</h2>
                            <span>{this.props.movie.description}</span>
                        </div>
                    </div>
                    <div className="lightbox__user">
                        <div className="lightbox__rating">
                            <h3>Twoja ocena:</h3>
                            <div>
                                <i className="far fa-angry lightbox__rate__icon"
                                   style={{color: this.state.hate ? "red" : ""}} onClick={this.hateClick}></i>
                                <i className="far fa-smile lightbox__rate__icon"
                                   style={{color: this.state.like ? "red" : ""}} onClick={this.likeClick}></i>
                            </div>
                            <h3>Dodaj do ulubionych:</h3>
                            <div>
                                <i className="far fa-star lightbox__rate__star"
                                   style={{color: this.state.fav ? "red" : ""}} onClick={this.favClick}></i>
                            </div>
                        </div>
                        <div className="lightbox__comments">
                            <h3>Twój komentarz:</h3>
                            <textarea className="lightbox__comments__section" placeholder={this.state.comment}
                                      ref={this.comment}></textarea>
                            <button className="lightbox__comments__btn"
                                    onClick={this.commentClick}>{this.state.commentBtnTxt}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lightbox;