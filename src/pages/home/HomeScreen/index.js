import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class HomeScreen extends Component {

    _acessarAdmin = () => {
        const { history } = this.props;
        history.push('/admin')
    }

    render() {
        const { location } = this.props;
        
        return (
            <div>
                <h1>Institucional page</h1>
                <section class="content content-first" id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                                <h2>Exclusivo, inovador, é <span>Mais Tênis</span></h2>
                                <p>Nascemos com a missão de Realizar campeonatos de Tênis de alto nível, para todos os apaixonados por este Esporte que mesmo sendo tão tradicional cada dia mais ganha fãs, encantando multidões. Por isto existimos, para que você tenha a oportunidade de Competir como um profissional, mesmo sendo um jogador amador.</p>
                                <p><a class="btn btn-colored" href="/como-funciona/" title="Saiba mais, e descubra essa campeonato fantástico"><i class="glyphicon glyphicon-hand-right"></i> Saiba mais</a> e descubra essa campeonato fantástico</p>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    location.pathname != '/login' ?
                        <button onClick={this._acessarAdmin}>
                            Acessar o admin
                        </button>
                        :
                        null
                }
            </div>
        )
    }
}

export default HomeScreen
