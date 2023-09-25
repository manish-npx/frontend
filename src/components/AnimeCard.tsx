import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

/* 
*@Module 
*/
    
const AnimeCard: ({ ani }: any ) => JSX.Element = ({ ani }: any) => {

    const animes = ani.attributes

    return (
        <>
            <Col lg={2} md={4} className="col-lg-2 col-md-4 col-12 spacing picture-item rounded" data-groups="branding">

                <div className="card shop-features rounded overflow-hidden border-0 work-container work-primary work-classic">
                    <div className="card-body p-0">
                        <Link to={'/' + animes.slug} state={{ ani }} className="card-title title text-dark">
                            <img src={animes.posterImage ? animes.posterImage.medium : '#'} className="card-img-top rounded-top" alt={animes.titles.en_jp} />
                        </Link>
                        <div className="content pt-3">
                            <h6 className="mb-1">
                                <Link to={'/' + animes.slug} state={{ ani }} className="card-title title text-dark">
                                    {animes.titles.en ? animes.titles.en : (animes.titles.en_jp ? animes.titles.en_jp : animes.titles.ja_jp)}
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>

            </Col>

        </>
    )
}

export default AnimeCard
