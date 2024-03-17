import "./Home.css";
import logo from "../Images/twistedLogo.avif";

const Home = () => {
    return (
        <>
            <div className="twistedStache">
                <nav className="navbar bg-body-tertiary mb-0">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Twisted Stache" width={100} height={90} />
                        </a>
                            <a href="#" className="homeBtn">Home</a>
                            <a href="#" className="faqBtn">FAQ</a>
                    </div>
                </nav>


                <div className="heroImg">
                    <h1 className="heroInfo">Twisted Stache Coffee & Creamery</h1>
                    <img className="buildingImg" src="/src/Images/Building.jpg" alt="" />
                </div>

                <div className="services"> </div>

                <div className="wspaceL" />

                <div className="wspaceR" />

                <div className="footer"> </div>

            </div>

        </>
    )
}
export default Home