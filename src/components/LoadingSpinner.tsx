const LoadingSpinner = () => {
    return (
        <>
            <div className="justify-content-center">

                <div className="spinner-grow" style={{ width: '40px', height: '40px' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default LoadingSpinner
