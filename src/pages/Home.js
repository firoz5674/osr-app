

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import homeBanner from "../assets/images/home/aeroplane.jpg";
import telegramImg from "../assets/images/telegram.png";
import whatsAppImg from "../assets/images/WhatsApp.png";
import { siteKeywords, dhanVarsha } from "../shared/mockData";

function Home() {
  return (
    <>
      <main className="home-main">
        <div className="refresh-btn-wrapper">
          <Button className="refresh-btn">Refresh</Button>
        </div>
        <div className="social-media-share">
          <ul>
            <li><a href="#"><img src={telegramImg} alt="telegramImg" /></a></li>
            <li><a href="#"><img src={whatsAppImg} alt="whatsAppImg" /></a></li>
          </ul>
        </div>
        <section className="home-banner">
          <img src={homeBanner} className="img-fluid" alt="" />
        </section>
        <section className="keywords">
          <Container>
            <Row className="justify-content-center">
              {siteKeywords.map((item) => {
                const { id, name } = item;
                return (
                  <Col sm={6} md={4} lg={3} xl={2} key={id}>
                    <Card>
                      <h2 className="card-title">{name}</h2>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col sm={12}>
                <p className="info mt-5"><a href="sattamatkadpbosskuber.net">sattamatkadpbosskuber.net</a> is one of the oldest company that provides you Fastest Live Results of satta matka. sattamatkadpbosskuber.net Provides accurate and fast Matka Guessing and Charts. The <a href="sattamatkadpbosskuber.net">sattamatkadpbosskuber.net</a> provides you a solution to win money by playing satta matka game.</p>
                <p className="info">matka guessing, Fix Matka, satta market, satta matka result, matka game, matka result, matka market, matka bazar,satta bazar, Satta Matka, Kalyan Matka Results, Mumbai Main Results , Kalyan Results , Kalyan Chart , Main Mumbai Chart , Online Matka Result, Live Satta Matka Results, Satta Matka Number, Free Matka Guessing, 220 Patti Satta Weekly Matka Jodi Chart with Guessing by experts of Satta Matka.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="dhan-varsha">
          <div className="dhan-varsha-header">
            <Container>
              <Row>
                <Col md={4}>
                  <h2 className="title blink-animation2">साप्ताहिक <br />धन वर्षा<br /> चान्स </h2>
                </Col>
                <Col md={4}>
                  <h2 className="title">दिनांक <br />20-02-2023 </h2>
                </Col>
                <Col md={4}>
                  <h2 className="title blink-animation2">मुकद्दर <br />का <br />सिकंदर </h2>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="dhan-varsha-content">
            <Container>
              <Row className="justify-content-center">
                {dhanVarsha.map((item, index) => {
                  const { id, link, name } = item;
                  return (
                    <Col sm={6} md={4} lg={3} key={id}>
                      <a href={link} className="dhan-varsha-link dhan-varsha-animation">{name}</a>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </section>
        <section className="live-result">
          <div className="live-result__header">
            <h4 className="title">Satta Matka Live Results 08-03-2023 11:50 AM (Wednesday)</h4>
          </div>
          <Row>
            <Col md={4}>
              <div>
                <div className="satta-name">
                  <h2>Weekly Guessing</h2>
                </div>
                <Card>
                  <CardHeader>World Star</CardHeader>
                  <CardBody>
                    <table>
                      <thead>
                        <tr>
                          <th>Mon</th>
                          <th>Tue</th>
                          <th>Wed</th>
                          <th>Thu</th>
                          <th>Fri</th>
                          <th>Sat</th>
                          <th>Sun</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>3</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>13</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>3</td>
                          <td className="blink-animation">*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>3</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                          <td>*</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="satta-name">
                  <h2 className="invisible">Weekly Guessing</h2>
                </div>
                <Card className="star-card">
                  <h2 className="title">world star</h2>
                  <h2 className="title">happy holi 08/03/2023 - holiday</h2>
                  <h3 className="time">(10:30 AM - 11:30 AM)</h3>
                  <a href="" className="link blink-animation2">world star chart</a>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="satta-name">
                  <h2>220 Patti</h2>
                </div>
                <Card>
                  <CardHeader>World Star</CardHeader>
                  <CardBody>
                    <table>
                      <tbody>
                        <tr>
                          <td className="td5">1</td>
                          <td className="td5">3</td>
                          <td className="td5">*</td>
                          <td className="td5">*</td>
                          <td className="td5">*</td>
                        </tr>
                        <tr>
                          <td className="td5">1</td>
                          <td className="td5">3</td>
                          <td className="td5 big-size" rowspan="3">8</td>
                          <td className="td5">*</td>
                          <td className="td5">*</td>
                        </tr>
                        <tr>
                          <td className="td5">1</td>
                          <td className="td5">3</td>
                          <td className="td5">*</td>
                          <td className="td5">*</td>
                        </tr>
                        <tr>
                          <td className="td5">1</td>
                          <td className="td5">3</td>
                          <td className="td5">*</td>
                          <td className="td5">*</td>
                        </tr>
                        <tr>
                          <td className="td5">1</td>
                          <td className="td5">3</td>
                          <td className="td5">*</td>
                          <td className="td5">*</td>
                          <td className="td5">*</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}

export default Home;
