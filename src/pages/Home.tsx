import React from 'react'
import HeroImage from "../assets/images/illustrator/Creativity-bro.svg"
import Layout from '../layouts/Layout'

const Home: React.FC = () => {
  return (
    <>
      <Layout title='Home'>
        <section className="bg-half-170 d-table w-100" id="home">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title-heading mt-4">
                  <h1 className="display-4 fw-bold mb-3">Powerfull landing <br /> for your website</h1>
                  <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                </div>
              </div>

              <div className="col-md-6">
                <img src={HeroImage} alt={HeroImage} />
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
