import { Link } from "react-router-dom"
import "./Header.css"
import "./Button.css"

const Header = (props) => {

    let navLinkArr = [
        {
            url:'/',
            title:'Home'
        },
        {
            url:'/Studentams',
            title:'Studentams'
        },
        {
            url:'/Verslui',
            title:'Verslui'
        },
        {
            url:'/Programos',
            title:'Programos'
        },
        {
            url:'/Apie mus',
            title:'Apie mus'
        },
        {
            url:'/Naujienos',
            title:'Naujienos'
        },
        {
            url:'/IT testas',
            title:'IT testas'
        },
        {
            url:'/Kontaktai',
            title:'Kontaktai'
        },
        {
            url:'/EN',
            title:'EN'
        },
    ]
    function renderErrorMassage() {
        if (navLinkArr.length === 0) {
            return <h4>No valid Nav ARR !!! </h4>
        }
        const navLinks = navLinkArr.map((navLink, index) => {
            return (
                <li key={index} className="menu-item">
                    <Link to={navLink.url}>{navLink.title}</Link>
                </li>)
        })
        return <ul className="main-menu">{navLinks}</ul>
    }

    return (
        <div className="header-wrap">
            {props.children}
            <div className="header">
                <img
                    className="CaLogo"
                    alt="CA logo"
                    src='https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg'
                />
                <div className="nav-button-wrap">
                    <nav className="main-navigation">
                            {renderErrorMassage()}
                            {/* <li className="menu-item"><Link to="/">Home</Link></li>
                            <li className="menu-item"><Link to="/Studentams">Studentams</Link></li>
                            <li className="menu-item"><Link to="/Verslui">Verslui</Link></li>
                            <li className="menu-item"><a href="/Programos">Programos</a></li>
                            <li className="menu-item"><a href="/Apie mus">Apie mus</a></li>
                            <li className="menu-item"><a href="/Naujienos">Naujienos</a></li>
                            <li className="menu-item"><a href="/IT testas">IT testas</a></li>
                            <li className="menu-item"><a href="/Kontaktai">Kontaktai</a></li>
                            <li className="menu-item"><a href="/EN">EN</a></li> */}
                    </nav>
                    <button className="button">CLICK
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Header