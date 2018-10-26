import React from 'react';
import Lightbox from "./Lightbox";


class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showLightbox: false,
            ppp: false
        }
    }

    handleClick = (e) =>{
        console.log("po kliknieciu w diva")
        this.setState({
            showLightbox: true,
            ppp: true
        })
    }

    handleLightboxClose = (e) => {
        console.log("klik z ligtboxa w ixa")
        e.stopPropagation();
        this.setState({
            showLightbox: false,
            ppp: false

        })
    }

    render() {
        let lightbox = null;
        console.log(this.state.showLightbox, this.state);//dlaczego tu jest true, skoro klikajac w x wywoluej sie handlelightboxclose

        if(this.state.showLightbox){
            lightbox = <Lightbox movie={this.props.movie} onClose={this.handleLightboxClose}/>;
        }
        return (
            <div onClick={this.handleClick}>
                {lightbox}
                <img className="slider__img"
                     src={this.props.movie.posterUrl}
                     alt="movie poster"/>
            </div>
        )
    }
}

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies,
            visibleSlides: {
                left: 0,
                center: 1,
                right: 2
            }
        }
    }

    handlePrev = () => {
        let tempSlides = this.state.visibleSlides; //zrobić kopie a nie dzialac na state
        for (let e in tempSlides) {
            if (tempSlides[e] === 0) {
                tempSlides[e] = this.props.movies.length - 1;
            } else {
                tempSlides[e] -= 1;
            }
        }
        this.setState({
            visibleSlides: tempSlides
        })
    }

    handleNext = () => {
        let tempSlides = this.state.visibleSlides;
        for (var e in tempSlides) {
            if (tempSlides[e] === this.props.movies.length - 1) {
                tempSlides[e] = 0
            } else {
                tempSlides[e] += 1;
            }
        }
        this.setState({
            visibleSlides: tempSlides
        })
    }

    render() {
        if (this.props.movies.length === 0) {
            return <p style={{textAlign: "center", fontSize: "60px"}}>loading ...</p>
        }

        const leftKey = this.state.visibleSlides.left;
        const centerKey = this.state.visibleSlides.center;
        const rightKey = this.state.visibleSlides.right;

        return (
            <div>
                <section className="main__slider">
                    <div className="center slider">
                        <div className="slider__prev">
                            <i className="fas fa-angle-left slider__arrow" onClick={this.handlePrev}></i>
                        </div>
                        <Movie key={"left"} movie={this.props.movies[leftKey]} clickMethod={this.handleClick}/>
                        <Movie key={"center"} movie={this.props.movies[centerKey]} clickMethod={this.handleClick}/>
                        <Movie key={"right"} movie={this.props.movies[rightKey]} clickMethod={this.handleClick}/>
                        <div className="slider__next">
                            <i className="fas fa-angle-right slider__arrow" onClick={this.handleNext}></i>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Slider;
