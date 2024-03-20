import "./Home.css";
import logo from "../Images/twistedLogo.avif";
import waffleCone from "../Images/WaffleCone.jpg"
import twistedMan from "../Images/TwitstedStacheMan.jpg"

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

                <div className="services">
                    <div>
                        <h1 className="ourStory">Our Story</h1>
                        <a href="/story"><img src={twistedMan} alt="Twisted" className="twistedMan" /></a>
                    </div>

                    <div>
                        <h1>Serving Coffee & Hand Dipped Ice Cream</h1>
                        <a href="#"><img src={waffleCone} alt="Waffle Cone" className="waffleCone" /></a>
                    </div>
                </div>

                <div className="wspaceL" />

                <div className="wspaceR" />

                <div className="footer"> </div>

            </div>

        </>
    )
}
export default Home