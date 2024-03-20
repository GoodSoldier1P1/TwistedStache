import logo from "../Images/twistedLogo.avif"
import "./Story.css"

const Story = () => {
    return (
        <>


            <div className="twistedStache">
                    <nav className="navbar bg-body-tertiary mb-0">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="Twisted Stache" width={100} height={90} />
                            </a>
                            <a href="/" className="homeBtn">Home</a>
                            <a href="#" className="faqBtn">FAQ</a>
                        </div>
                    </nav>
                
                <div className="services" >
                    <h1>Welcome to Twisted Stache Coffee & Creamery</h1>
                </div>
                <div className="footer" />
                <div className="wspaceL" />
                <div className="wspaceR" />
                <div className="heroImg" />
            </div>

        </>
    )
}
export default Story