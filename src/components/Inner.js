import React from "react";


const Inner = () => {

    return (
         <>
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                <div className="container-fluid">

                    <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Inner Page</li>
                        </ol>
                        <h2>Inner Page</h2>
                    </div>
                    </div>

                </div>
                </section>
                

                <section className="inner-page">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="row">
                            <p>
                                Example inner page template
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Inner;
