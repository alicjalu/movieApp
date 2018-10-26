import React from 'react';
import {db} from '../firebase';


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.filter);
        // this.state = {
        //     movies: props.movies,
        //     filter: props.filter
        // }
    }




    render() {
        let usedFilter = {};
        for (let key in this.props.filter) {
            if (this.props.filter[key] !== null) {
                usedFilter["name"] = key;
                usedFilter["value"] = this.props.filter[key];
            }
        }

        let resultList = this.props.movies
            .filter((movie) => {
                return movie[usedFilter.name].toLowerCase().indexOf(usedFilter.value.toLowerCase()) != -1;
            })
            .map((movie) => {
                console.log(movie["year"]);
                return <li key={movie.title}>
                    <h3>{movie.title}({movie["year"]})</h3>
                    <br/>
                    <span>{movie.description}</span>
                    <br/>
                    <br/>
                </li>
            })
        // console.log(resultList);

        return (
            <div className="search__results">
                <ul className="search__list">
                    {resultList}
                </ul>
            </div>
        )
    }
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.text = React.createRef();
        this.state = {
            hasSearch: false,
            filter: {
                genre: null,
                year: null,
                title: null
            }
        }
    }

    handleSearch = (e) => {
        console.log(this.form.filter.value);
        console.log(this.text.current.value);

        this.setState({
            hasSearch: true,
            filter: {
                genre: this.form.filter.value === "genre" ? this.text.current.value : null,
                year: this.form.filter.value === "year" ? this.text.current.value : null,
                title: this.form.filter.value === "title" ? this.text.current.value : null
            }
        });
    }

    render() {
        let results = null;
        if (this.state.hasSearch) {
            results = <SearchResults movies={this.state.movies} filter={this.state.filter}/>;
        }

        const btnClass = this.state.hasSearch ? "positionTop" : 0
// console.log(btnClass)
        return (
            <section className="main__search">
                <div className="center search">
                    <div className="search__form">
                        <div className="search__title">
                            <span>Wyszukaj film według kategorii:</span>
                        </div>
                        <form ref={form => this.form = form}>
                            <input type="radio" name="filter" value="genre" className="search__type"/>
                            <span className="search__label">gatunek</span>
                            <input type="radio" name="filter" value="year" className="search__type"/>
                            <span className="search__label">rok produkcji</span>
                            <input type="radio" name="filter" value="title" className="search__type"/>
                            <span className="search__label">tytuł</span>
                        </form>
                    </div>
                    <div className={`search__btn ${btnClass}`} >
                        <input type="text" className="search__input" ref={this.text} placeholder="Wyszukaj film"/>
                        <a className="search__button">
                            <i className="fas fa-search" onClick={this.handleSearch}></i>
                        </a>
                    </div>

                    {results}
                    {/*todo: render this line after every search submit.*/}

                </div>

            </section>

        )
    }

    componentDidMount() {
        db.collection('films').get().then((response) => {
            // console.log(response.docs[1].data())
            const temp = []
            response.docs.forEach((e) => {
                // console.log("ppppppppppp",e.data())
                temp.push(e.data()) ///?
            });

            this.setState({
                movies: temp
            })
        })
    }
}

export default Search;