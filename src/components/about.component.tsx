const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="https://img.freepik.com/foto-gratis/vista-posterior-multitud-fanaticos-viendo-concierto-vivo-6_1562-631.jpg?t=st=1731469513~exp=1731473113~hmac=892ea8034963d215bff5295da0d47dbbbdd6193ac83939a284a7eacb06807a5a&w=1800"
              alt="People enjoying an event"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <h2>Your Ally for Unforgettable Events</h2>
            <p>
              At Eventix, we believe that every event is an opportunity to
              create unforgettable memories. That’s why we offer the perfect
              platform to find tickets for your favorite events and help
              organizers sell their tickets easily and securely.
            </p>
            <p>
              Our mission is to connect people with the experiences they are
              passionate about, from concerts and festivals to sports and
              cultural events.
            </p>
            <div className="row mt-4">
              <div className="col-md-6">
                <ul>
                  <li>
                    <strong>Wide variety of events</strong>
                  </li>
                  <li>
                    <strong>Fast and secure purchase</strong>
                  </li>
                  <li>
                    <strong>Tools for organizers</strong>
                  </li>
                  <li>
                    <strong>Personalized customer service</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
