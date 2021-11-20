import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import "./Privacy.css";

const Privacy = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div className="emptyPage">
        <h1>PRIVACY</h1>

        <p>
          Privacy is not a new concept. Humans have always desired privacy in
          their social as well as private lives. But the idea of privacy as a
          human right is a relatively modern phenomenon. Around the world, laws
          and regulations have been developed for the protection of data related
          to government, education, health, children, consumers, financial
          institutions, etc. This data is critical to the person it belongs to.
          From credit card numbers and social security numbers to email
          addresses and phone numbers, our sensitive, personally identifiable
          information is important. This sort of information in unreliable hands
          can potentially have far-reaching consequences. Companies or websites
          that handle customer information are required to publish their Privacy
          Policies on their business websites. If you own a website, web app,
          mobile app or desktop app that collects or processes user data, you
          most certainly will have to post a Privacy Policy on your website (or
          give in-app access to the full Privacy Policy agreement). There are
          several reasons for a website to post its Privacy Policy agreement on
          its website. Here are some of the main reasons: Required by the law
          Required by third party services Increases Transparency Let's take a
          look at each of these reasons in more depth.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
