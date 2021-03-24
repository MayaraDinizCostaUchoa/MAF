import React, {Component} from 'react';
import './home.css';
import { Link } from 'react-router-dom';


class Home extends Component{
    render(){
        return(
            <div className="container-fluid p-0 mb-2 bg-info text-white">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">                                        
                    <a className="navbar-brand" href="#"><i className="far fa-address-book"></i>&nbsp;MAF-Minha Agenda Financeira</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>    
                    </button>
                    

                    <section className="collapse navbar-collapse" id="navbarMainToggler">
                        <div className="navbar-nav ml-auto pr-3">
                        <Link to="/login"><a className="nav-item nav-link" href="#">Entrar</a></Link>                        
                        </div>
                        
                    </section>
                </nav>

                <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselSection" data-slide-to="1"></li>
                        <li data-target="#carouselSection" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="carousel1.png" alt="Imagem 1" className="d-block w-100 image-fluid "/>
                        </div>
                        <div className="carousel-item">
                            <img src="carousel2.png" alt="Imagem 2" className="d-block w-100 image-fluid"/>
                        </div>
                        <div className="carousel-item">
                            <img src="carousel3.png" alt="Imagem 3" className="d-block w-100 image-fluid"/>
                        </div>
                    </div>
                    <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </div>
                    <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </div>                    
                </section>

                <section className="container p-2">
                    <ul className="list-unstyled">
                        <li className="media pt-2">
                            <img src="imagem1.jpg" alt="" className="mr-3 rounded"/>
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 h3">Organize seu tempo com apenas um click!</h5>
                                Um dos maiores desafios é encontrar um dia e horário que se encaixem na sua disponibilidade.
                            </div>
                        </li>
                        <li className="media pt-2">
                            <img src="imagem2.jpg" alt="" className="mr-3 rounded"/>
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 h3">Produtividade</h5>
                                Você irá conseguir organizar seus compromissos, tarefas e anotações em apenas um lugar, o que economiza tempo e ajuda na produtividade.
                            </div>
                        </li>
                        <li className="media pt-2">
                            <img src="imagem3.jpg" alt="" className="mr-3 rounded"/>
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 h3">Quase um assistente pessoal!</h5>
                                Ter um assistente é otimizar sua produtividade e a organizar as tarefas do seu dia-a-dia.
                            </div>
                        </li>
                        
                    </ul>
                </section>

                <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
                    <container className="container col-6 col-md-2 d-flex justify-content-around">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-twitter-square"></i>
                        
                        
                    </container>
                </footer>
            </div>                
        )
    }
}

export default Home;

