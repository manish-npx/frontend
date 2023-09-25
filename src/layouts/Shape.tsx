type Proptype = {
    title: string,
}

const Shape = ({ title }: Proptype) => {
    return (
        <>
            <section className="bg-half-170 bg-light d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="pages-heading">
                                <h4 className="title mb-0"> {title} </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Shape
