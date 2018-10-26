import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none",
            display2: "block"
        }
    }

    handleClick = () => {
        this.setState({
            display:"block",
            display2: "none"
        })
    }
    handleClick2 = () =>{
        this.setState({
            display:"none",
            display2:"block"
        })
    }

    render() {

        return (
            <header className="main__navigation ">
                <nav className="navigation center">
                    <i className="fas fa-film nav__icon"></i>
                    <ul className="navigation__menu" style={{display: this.state.display}}>
                        <li className="navigation__element"><a href="" className="navigation__item">Lista Filmów</a>
                        </li>
                        <li className="navigation__element"><a href="" className="navigation__item">Kontakt</a></li>
                        <li className="navigation__element"><a href="" className="navigation__item">O Autorze</a></li>
                    </ul>
                    <i className="fas fa-bars nav__icon" onClick={this.handleClick} style={{display: this.state.display2}}></i>
                    <i className="fas fa-times nav__icon__2" style={{display: this.state.display}} onClick={this.handleClick2}></i>

                </nav>
            </header>

        )
    }
}

export default Header;