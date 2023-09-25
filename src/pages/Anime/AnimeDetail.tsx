import { useLocation, useParams } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';



const AnimeDetail: React.FC = () => {

  const params = useParams<string>();
  const { state } = useLocation();
  const [animes, setAnimes] = useState<any>(state.ani.attributes)


  useEffect(() => {
    setAnimes(state.ani.attributes);
  }, [state])



  return (
    <>

      <Layout title={animes.titles.en}>

        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center">
                <img src={animes.coverImage.large} className="img-fluid rounded" alt={animes.titles.en} />
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-4 pt-2">
                <div className="card job-profile shadow border-0" style={{ marginTop: '380px' }}>
                  <img src={animes.posterImage.large} className="avatar d-block" alt={animes.titles.en} />
                  <div className="text-center">
                    <h3 className="mt-3 mb-0">{animes.titles.en}</h3>
                    <p className="text-primary mb-0"><strong>{animes.averageRating} Community Approval</strong></p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Watch Online :</h5>

                    <div className="d-grid">
                      <a href="#" data-bs-toggle="modal" data-bs-target="#Contactme" className="btn btn-sm btn-primary"><i className="uil uil-envelope align-middle" /> Contact Me</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12 mt-4 pt-2 ">
                <div className="ms-lg-4">
                  <h4>Description :</h4>
                  <p className="text-muted">{animes.description}</p>
                  <p className="text-muted mb-0">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>

                  <h4 className="mt-lg-5 mt-4">Related Animes :</h4>
                  <div className="row">

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>

    </>
  )
}

export default AnimeDetail
