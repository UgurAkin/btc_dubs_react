import React from 'react'

const ContentHeader = () => {
    return (
        <div id="ContentHeader" className="row justify-content-center">
            <div className="col-9">
                <div className="jumbotron  jumbotron-fluid my-4">
                    <div className="container">
                        <h1 className="display-4 text-center">BTC Doubles Night</h1>
                        <hr className="my-4" />
                        <p className="lead text-center">X time until the registration for next doubles night opens.</p>
                        <p className="lead text-center">
                            <a className="btn btn-primary btn-lg disabled" href="body" role="button">Register Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader
