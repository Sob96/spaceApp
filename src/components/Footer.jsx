import twitter from './../img/footer_twitter.svg';
import facebook from './../img/footer_facebook.svg';
import instagram from './../img/footer_instagram.svg';

function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer_top">
                <div className="footer_top_logo"><span></span></div>
                <div className="footer_top_links">
                    <div className="footer_top_item">
                        <h5>destinations</h5>
                        <ul>
                            <li><a href="#">Earth</a></li>
                            <li><a href="#">Moon</a></li>
                            <li><a href="#">Mars</a></li>
                            <li><a href="#">Europa</a></li>
                        </ul>
                    </div>
                    <div className="footer_top_item">
                        <h5>get help</h5>
                        <ul>
                            <li><a href="#">Status</a></li>
                            <li><a href="#">Preoder</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer_top_item">
                        <h5>about spaced</h5>
                        <ul>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Story</a></li>
                            <li><a href="#">Sustainable Inovation</a></li>
                            <li><a href="#">Media</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_top_socialNetworks">
                    <ul>
                        <li><a href="https://twitter.com/"><img src={twitter} alt="twitter"/></a></li>
                        <li><a href="https://www.facebook.com/"><img src={facebook} alt="facebook"/></a></li>
                        <li><a href="https://www.instagram.com/"><img src={instagram} alt="instagram"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom_container">
                <hr/>
            </div>
            <div className="footer_bottom">
                <p>&copy; 2022 SPACED, Inc. All rights reserved.</p>
                <div className="footer_bottom_right">
                    <ul>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Company Details</a></li>
                        <li><a href="#">Privacy & Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;