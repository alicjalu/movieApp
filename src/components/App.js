import React, {Component} from 'react';
import Header from "./Header";
import Information from "./Information";
import Slider from "./Slider";
import {db} from '../firebase';
import Search from "./Search";
import Random from "./Random";
import Footer from "./Footer";

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Information/>
                <Slider movies={this.state.movies}/>
                <Search/>
                <Random/>
                <Footer/>
            </div>
        );
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

export default App;
