import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
               
                <div className="bio">
                  <p>

                  I graduated from Johns Hopkins University with a B.S. in Biomedical Engineering and from Penn
                    State
                    University with an MBA in Finance and Supply Chain Management. I’ve spent the majority of my
                    post-college career working in the financial industry, primarily in fixed income and derivative
                    securities. In 2017 I published my first novel, a techno-thriller titled The Demeter Initiative,
                    which
                    will be rebranded and republished in late 2021. The Demeter Initiative is the first of three
                    intended
                    novels in the Demeter series.

                  </p>

                  </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;