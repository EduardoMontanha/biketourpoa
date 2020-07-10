import React from 'react';
import Banner from './components/Banner';
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <main id="landing">
            <div className="container">
                <Banner />

                <section>
                    <h2>Próximos passeios</h2>

                    <div className="next-trips">
                        <div className="trip">
                            <img src="" alt="" />

                            <h3></h3>
                            <p></p>
                            <Link to="/roteiros/"></Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Landing;