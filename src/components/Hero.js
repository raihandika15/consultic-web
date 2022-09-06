/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Container, Row } from "react-bootstrap"

const Hero = () => {
    return(
        <section className="heroSections mt-4">
            <Container>
                <Row>
                    <div className="col align-self-center">
                        <h1 class="mb-4">
                            Build brand and grow your business with Consultic
                        </h1>
                        <p class="mb-4">
                            When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight - instead, to find success takes a lot of time, effort, and courage.
                        </p>
                        <a href="#" class="btn btn-warning">Get a Free Consultation</a>                       
                    </div>
                    <div className="col d-none d-sm-block d-sm-none d-md-block">
                        <img src={require('../assets/img/hero/img1.jpg')} width="750"></img>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Hero