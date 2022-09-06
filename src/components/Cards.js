import { Col, Container, Row} from 'react-bootstrap';

const Cards = () => {
    return (
        <section className='heroSections mt-5'>
            <Container>
                <Col className='text-center pt-4'>
                    <h5 class="mt-2">
                        <b>See Our Services</b>
                    </h5>
                    <p>
                        <h2><b>We Offer Wide Range of Services</b></h2>
                    </p>
                </Col>
                <Row className='row-cols-1 row-cols-md-3 g-4 cardLayer mx-auto mt-4'>
                    <Col>
                        <div class="card border-secondary">
                            <div class="card-body text-secondary">
                                <h5 class="card-title">
                                    <b>Operation Monitoring</b>
                                </h5>
                                <p>
                                    When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight.
                                </p>
                                <p>
                                    <b>Check Out More</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card border-secondary">
                            <div class="card-body text-secondary">
                                <h5 class="card-title">
                                    <b>Compliance</b>
                                </h5>
                                <p>
                                    When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight.
                                </p>
                                <p>
                                    <b>Check Out More</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card border-secondary">
                            <div class="card-body text-secondary">
                                <h5 class="card-title">
                                    <b>Project Management</b>
                                </h5>
                                <p>
                                    When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight.
                                </p>
                                <p>
                                    <b>Check Out More</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='row-cols-1 row-cols-md-3 g-4 cardLayer mx-auto mt-2'>
                    <Col>
                        <div class="card border-secondary">
                            <div class="card-body text-secondary">
                                <h5 class="card-title">
                                    <b>Human Resources</b>
                                </h5>
                                <p>
                                    When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight.
                                </p>
                                <p>
                                    <b>Check Out More</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card border-secondary">
                            <div class="card-body text-secondary">
                                <h5 class="card-title">
                                    <b>Quality Assurance</b>
                                </h5>
                                <p>
                                    When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight.
                                </p>
                                <p>
                                    <b>Check Out More</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card border-secondary">
                            <div class="card-body text-secondary">
                                <h5 class="card-title">
                                    <b>Process Development</b>
                                </h5>
                                <p>
                                    When it comes to business, listen to Henry David Thoreau: things usually don't happen overnight.
                                </p>
                                <p>
                                    <b>Check Out More</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cards;