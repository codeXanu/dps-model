import React from "react";
import ApplicationForm from "./components/ApplicationForm";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* CTA Section */}
      <HeroSection />

      {/* Main Form Section */}
      <main className="application-form-sec">
        <div className="application-cont w-container">
          <ApplicationForm />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer-section application _6">
        <div className="footer-container _6 succ w-container">
          <div className="footer-logos-wrapper">
            <img
              src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/6403770a7d01f7615b2174ac_UTUM.svg"
              alt="Business Innovation by UnternehmerTUM"
              className="image-102"
              width="247.5"
              loading="lazy"
            />
            <img
              src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/63504a8fdca652750be0394a_Logo-DPS.svg"
              alt="Digital Product School Logo"
              className="image-10"
              height="75"
              loading="lazy"
            />
            <a href="#cta" className="w-inline-block" aria-label="Back to top">
              <img
                src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/64037eb05361e50fd740787a_Link-up.svg"
                alt="Arrow pointing up"
                className="image-103"
                loading="lazy"
              />
            </a>
          </div>

          <div className="big-div-links">
            <div className="footer-links-wrapper">
              <h6 className="heading-10">OFFICE</h6>
              <p className="paragraph-6">
                UnternehmerTUM GmbH
                <br />
                Lichtenbergstr. 6
                <br />
                85748 Garching
                <br />
                Germany
              </p>
            </div>

            <div className="footer-links-wrapper">
              <h6 className="heading-10">CONTACT</h6>
              <p className="paragraph-6">Questions?<br />Contact us, we are friendly:</p>
              <a href="mailto:hello@dpschool.io" className="link-2 email">hello@dpschool.io</a>
            </div>

            <div className="footer-links-wrapper">
              <h6 className="heading-10">PARTNER</h6>
              <p className="paragraph-6">You have a challenge and want to partner with us? We can help you:</p>
              <a href="mailto:partner@dpschool.io" className="link-3">partner@dpschool.io</a>
            </div>
          </div>

          <div className="footer-down-wrapper">
            <div className="impressum-div">
              <a href="/faq" className="link-5">FAQ</a>
              <a href="/legal-disclosure" className="link-5">legal notice</a>
              <a href="/privacy-policy-utum" className="link-5">privacy policy</a>
            </div>

            <div className="sm-wrapper">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/digitalproductschool/" className="w-inline-block" aria-label="Instagram">
                <img
                  src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/636cf3f23bfe232e3b6615bf_Instagram%20-%20Negative.svg"
                  alt="Instagram Icon"
                  className="image-15"
                  loading="lazy"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/digital-product-school/" className="w-inline-block" aria-label="LinkedIn">
                <img
                  src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/636cf3f27a176eb4ae2a8809_LinkedIn%20-%20Negative.svg"
                  alt="LinkedIn Icon"
                  className="image-16"
                  loading="lazy"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/DigitalProductSchool" className="link-block-4 w-inline-block" aria-label="YouTube">
                <img
                  src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/636cf3f234d44a935d538372_YouTube%20-%20Negative.svg"
                  alt="YouTube Icon"
                  loading="lazy"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://leaks.digitalproductschool.io" className="link-block-4 w-inline-block" aria-label="Medium">
                <img
                  src="https://cdn.prod.website-files.com/634ea15277434f04ed30599a/636cf3f26480fa1cc24ab5e5_Medium%20-%20Negative.svg"
                  alt="Medium Icon"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


