import React, { useEffect, useState } from "react";
import { getAnime, getAnimeEpisode, getAnimeGenres, } from "../../services/api.service";
import Layout from "../../layouts/Layout";
import { Row } from "react-bootstrap";
import AnimeCard from "../../components/AnimeCard";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import AmineSliderCard from "./AmineSliderCard";
import { debounce } from 'lodash';
import Loader from "../../components/Loader";


//carousel responsive
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Anime: React.FC = () => {
    interface IAnime { }

    const [animeData, setAnimeData] = useState<{ [key: string]: any }>([]);
    const [animeGenres, setAnimeGenres] = useState<{ [key: string]: any }>([]);
    const [animeEpisode, setAnimeEpisode] = useState<{ [key: string]: any }>([]);
    const [sortGenres, setSortGenres] = useState<string>("All");
    const [text, setText] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handelGenresCategory = (genresName: string): void => {
        setSortGenres(genresName);
    };

    /* Search Text */
    const handelSearchesCategory = (e: any) => {
        if (e.target.value) {
            setText(e.target.value);
            handelSearches();
        } else {
            setText('');
            setSearchText('');
        }
    };

    const handelSearches = debounce<() => void>(() => {
        console.log('searchText' + searchText)
        console.log('text' + text)
        setSearchText(text);

    }, 700)
    useEffect(() => {

        /* All Anime Type */
        getAnime(sortGenres, searchText).then((response) => {
            setAnimeData(response)
            setIsLoading(false)
        }).catch((error) => console.log("generse error", error));

        /* Trending This Week */
        getAnimeEpisode(sortGenres).then((response) => {
            setAnimeEpisode(response)
            setIsLoading(false)
        }).catch((error) => console.log("episode error", error));

        /* Anime genres type */
        getAnimeGenres().then((response) => {
            setAnimeGenres(response)
            setIsLoading(false)
        }).catch((error) => console.log("generse error", error));

    }, [sortGenres, searchText]);


    if (isLoading) return <Loader />



    return (
        <>
            <Layout title="Anime">

                <section className="section">
                    <div className="container-fluid">
                        <div id="grid" className="row mt-4 pt-2">
                            <h1 className="text-center">Trending This Week</h1>

                            <Carousel responsive={responsive} infinite={true}
                            >
                                {animeEpisode.length > 0 && animeEpisode.map((ani: any) => (
                                    <AmineSliderCard key={"slide" + ani.id} ani={ani} />
                                ))}

                            </Carousel>


                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <h1 className="text-center">Top Anime</h1>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-8 filters-group-wrap">
                                <div className="filters-group">
                                    <ul className="container-filter list-inline mb-0 filter-options text-center">
                                        <li
                                            className={`list-inline-item categories-name border text-dark rounded ${sortGenres === "All" ? "active" : ""
                                                }`}
                                            onClick={() => handelGenresCategory("All")}
                                        >
                                            {" "}
                                            All
                                        </li>
                                        {animeGenres.length > 0 &&
                                            animeGenres.map((genres: any) => (
                                                <li
                                                    className={`list-inline-item categories-name border text-dark rounded ${genres.attributes.name === sortGenres
                                                        ? "active"
                                                        : ""
                                                        }`}
                                                    key={genres.attributes.name}
                                                    onClick={() =>
                                                        handelGenresCategory(genres.attributes.name)
                                                    }
                                                >
                                                    {genres.attributes.name}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control border-primary"
                                    placeholder="search here"

                                    onChange={(e) => handelSearchesCategory(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">


                        <div id="grid" className="row mt-4 pt-2">
                            <Row>
                                {animeData.length > 0 &&
                                    animeData.map((ani: any) => (
                                        <AnimeCard key={ani.id} ani={ani} />
                                    ))}

                                <div className="col-12">
                                    <ul className="pagination justify-content-center mb-0">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                Prev
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Anime;
