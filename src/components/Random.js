import React from 'react';
import {db} from '../firebase'


class RandomFilm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="random__result">
                <div>
                    <img className="random__poster" src={this.props.movie.posterUrl}
                         alt=""/>
                </div>
                <div className="random__film">
                    <h3>Tytuł:</h3>
                    <span>{this.props.movie.title}</span>
                    <br/>
                    <h4>Reżyser:</h4>
                    <span>{this.props.movie.director}</span>
                    <br/>
                    <h4>Rok produkcji:</h4>
                    <span>{this.props.movie.year}</span>
                    <br/>
                    <h4>Opis:</h4>
                    <span>{this.props.movie.description}</span>
                </div>
            </div>
        )
    }
}


class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            hasRandom: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.form.genre.value);

        let filteredMovies = this.state.movies.filter((e) =>{
            return e.genre == this.form.genre.value;
        })

        let randomIndex = Math.floor(Math.random() * filteredMovies.length);
        let randomFilm = filteredMovies[randomIndex];
        console.log(randomFilm);

        this.setState({
            hasRandom: true,
            randomFilm: randomFilm
        })
    }
    render() {
        let randomFilm = this.state.hasRandom ? <RandomFilm movie={this.state.randomFilm}/> : null;
        // console.log(randomFilm);
        return (
            <section className="main__random">
                <div className="center random">
                    <div className="random">
                        <i className="fas fa-question random__icon"></i>
                        <div>Podaj parametry i wylosuj film na wieczór:</div>
                    </div>
                    <div>
                        <form id="random__select" onSubmit={this.handleSubmit} ref={form => this.form = form}>
                            <label htmlFor="random__select" className="random__label"> Gatunek:
                                <select name="genre" form="random__select" className="random__select">
                                    <option value="horror" className="random__option">horror</option>
                                    <option value="romans" className="random__option">romans</option>
                                    <option value="komedia" className="random__option">komedia</option>
                                    <option value="akcja" className="random__option">film akcji</option>
                                </select>
                                <button type="submit" className="random__button">WYLOSUJ</button>
                            </label>
                        </form>
                    </div>
                    {randomFilm}
                </div>
            </section>


        )
    }

    componentDidMount() {
        db.collection('films').get().then((response) => {
            // console.log(response.docs[1].data())
            const temp = []
            response.docs.forEach((e) => {
                temp.push(e.data()) ///?
            })
            this.setState({
                movies: temp
            })
        })

    }
}


export default Random;