import React, {useState} from 'react'
import {
    IGS_SessionsContainer,
    IGS_SessionsWrapper
} from './IGS_SessionsElements'
import './style.css'



const IGS_Sessions = () => {
    return (
        <>
            <IGS_SessionsContainer>
                <IGS_SessionsWrapper>
                    <div className="carousel">
                        <div className="carousel-inner">
                            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
                                <div className="carousel-item">
                                    <div className="cont">
                                        <div className="left">
                                            <div className="up">
                                                <div className="pic">
                                                    <img src="./favicon.jpg" alt="" className="style3"/>
                                                </div>
                                                <div className="textTit">
                                                    <div id="tit1">Lorem, ipsum dolor.</div>
                                                    <div id="tit2">Speaker 1</div>
                                                    <div id="tit3">Job, Role</div>
                                                </div>
                                            </div>
                                            <div className="below">
                                                <div className="text">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam temporibus odio ratione
                                                    hic corporis dolore tempora voluptatum ipsam. Voluptatibus, sequi? Cumque tempore
                                                    veritatis laudantium repudiandae optio ducimus deleniti rem quo praesentium natus iste
                                                    numquam consequatur, recusandae expedita! Voluptatum, iusto labore beatae architecto
                                                    quia voluptatibus distinctio velit cumque non debitis? Asperiores.
                                                </div>
                                                <div className="button">
                                                    <a href="#" className="myButton">Visit our Channel</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <iframe width="650" height="345"
                                                    src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
                                        </div>
                                    </div>
                                </div>
                                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
                                    <div className="carousel-item">
                                        <div className="cont">
                                            <div className="left">
                                                <div className="up">
                                                    <div className="pic">
                                                        <img src="./favicon.jpg" alt="" className="style3"/>
                                                    </div>
                                                    <div className="textTit">
                                                        <div id="tit1">Lorem, ipsum dolor.</div>
                                                        <div id="tit2">Speaker 2</div>
                                                        <div id="tit3">Job, Role</div>
                                                    </div>

                                                </div>
                                                <div className="below">
                                                    <div className="text">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam temporibus odio
                                                        ratione hic corporis dolore tempora voluptatum ipsam. Voluptatibus, sequi? Cumque
                                                        tempore veritatis laudantium repudiandae optio ducimus deleniti rem quo praesentium
                                                        natus iste numquam consequatur, recusandae expedita! Voluptatum, iusto labore beatae
                                                        architecto quia voluptatibus distinctio velit cumque non debitis? Asperiores.
                                                    </div>
                                                    <div className="button">
                                                        <a href="#" className="myButton">Visit our Channel</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="right">
                                                <iframe width="650" height="345"
                                                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                </iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"
                                           hidden=""/>
                                        <div className="carousel-item">
                                            <div className="cont">
                                                <div className="left">
                                                    <div className="up">
                                                        <div className="pic">
                                                            <img src="./favicon.jpg" alt="" className="style3"/>
                                                        </div>
                                                        <div className="textTit">
                                                            <div id="tit1">Lorem, ipsum dolor.</div>
                                                            <div id="tit2">Speaker 3</div>
                                                            <div id="tit3">Job, Role</div>
                                                        </div>

                                                    </div>
                                                    <div className="below">
                                                        <div className="text">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam temporibus odio
                                                            ratione hic corporis dolore tempora voluptatum ipsam. Voluptatibus, sequi?
                                                            Cumque tempore veritatis laudantium repudiandae optio ducimus deleniti rem quo
                                                            praesentium natus iste numquam consequatur, recusandae expedita! Voluptatum,
                                                            iusto labore beatae architecto quia voluptatibus distinctio velit cumque non
                                                            debitis? Asperiores.
                                                        </div>
                                                        <div className="button">
                                                            <a href="#" className="myButton">Visit our Channel</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="right">
                                                    <iframe width="650" height="345"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
                                                </div>
                                            </div>
                                        </div>
                                        <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
                                        <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
                                        <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
                                        <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
                                        <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
                                        <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
                                        <ol className="carousel-indicators">
                                            <li>
                                                <label htmlFor="carousel-1" className="carousel-bullet">•</label>
                                            </li>
                                            <li>
                                                <label htmlFor="carousel-2" className="carousel-bullet">•</label>
                                            </li>
                                            <li>
                                                <label htmlFor="carousel-3" className="carousel-bullet">•</label>
                                            </li>
                                        </ol>
                        </div>
                    </div>
                </IGS_SessionsWrapper>
            </IGS_SessionsContainer>
        </>
    )
}

export default IGS_Sessions
