/* eslint-disable jsx-a11y/alt-text */
import { Container, Row} from "react-bootstrap"

const KontenPertama = () => {
    return(
        <section className="heroSections mt-5">
            <Container>
                <Row>
                    <div className="col d-none d-sm-block d-sm-none d-md-block">
                        <img src={require('../assets/img/hero/img2.jpg')} width="750"></img>
                        {/* <img width="750" src="image/img2.jpg" alt=""> */}
                    </div>
                    <div className="col align-self-center">
                        {/* <hr style="max-width: 7%;"> */}
                        <h5><b>EST 2022</b></h5>
                        <h1 className="mb-4 mt-3">
                            Business opportunities are like buses, there's always another one coming.
                        </h1>
                        <p className="mb-4">
                            When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight - instead, to find success takes a lot of time, effort, and courage.
                            Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.
                        </p>
                        <p>
                            <b>Check out more</b> &rarr;
                        </p>
                    </div>
                </Row>
                <Row className="text-center mt-5">
                    <div class="col">
                        <h1>820</h1>
                        <p>Satisfaction Clients</p>
                    </div>
                    <div class="col">
                        <h1>40</h1>
                        <p>Completed Clients</p>
                    </div>
                    <div class="col">
                        <h1>17</h1>
                        <p>Finance Experts</p>
                    </div>
                    <div class="col">
                        <h1>99%</h1>
                        <p>Success Rate</p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default KontenPertama