import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import "./Terms.css";

const Terms = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div className="emptyPage">
        <h1>TERMS & CONDITION</h1>

        <p>
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our website, Webiste Name accessible at
          Website.com. These Terms will be applied fully and affect to your use
          of this Website. By using this Website, you agreed to accept all terms
          and conditions written in here. You must not use this Website if you
          disagree with any of these Website Standard Terms and Conditions.
        </p>

        <br />
        <p>
          Minors or people below 18 years old are not allowed to use this
          Website. Intellectual Property Rights Other than the content you own,
          under these Terms, Company Name and/or its licensors own all the
          intellectual property rights and materials contained in this Website.
          You are granted limited license only for purposes of viewing the
          material contained on this Website. Restrictions You are specifically
          restricted from all of the following: publishing any Website material
          in any other media; selling, sublicensing and/or otherwise
          commercializing any Website material; publicly performing and/or
          showing any Website material; using this Website in any way that is or
          may be damaging to this Website; using this Website in any way that
          impacts user access to this Website; using this Website contrary to
          applicable laws and regulations, or in any way may cause harm to the
          Website, or to any person or business entity; engaging in any data
          mining, data harvesting, data extracting or any other similar activity
          in relation to this Website; using this Website to engage in any
          advertising or marketing. Certain areas of this Website are restricted
          from being access by you and Company Name may further restrict access
          by you to any areas of this Website, at any time, in absolute
          discretion. Any user ID and password you may have for this Website are
          confidential and you must maintain confidentiality as well. Your
          Content In these Website Standard Terms and Conditions, “Your Content”
          shall mean any audio, video text, images or other material you choose
          to display on this Website. By displaying Your Content, you grant
          Company Name a non-exclusive, worldwide irrevocable, sub licensable
          license to use, reproduce, adapt, publish, translate and distribute it
          in any and all media. Your Content must be your own and must not be
          invading any third-party's rights. Company Name reserves the right to
          remove any of Your Content from this Website at any time without
          notice. No warranties This Website is provided “as is,” with all
          faults, and Company Name express no representations or warranties, of
          any kind related to this Website or the materials contained on this
          Website.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
