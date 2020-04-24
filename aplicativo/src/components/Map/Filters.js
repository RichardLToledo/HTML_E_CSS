import React, { Component } from 'react';
import {FilterHead, Button, FilterBody, Input, Specifications, Types, OptionButton, FixedButton} from '../../style.js';
import  {Link} from 'react-router-dom';


export default class Map extends Component {
  render() {
    return (
        <>
            <FilterHead>
                <Link to="/filters"><Button back = "#B4B4B5">Limpar</Button></Link>
                <Link to="/mapa"><span class="material-icons">
                clear
                </span></Link>
            </FilterHead>
            <FilterBody>
                <strong>Faixa de preço</strong>
                <section>
                            <div>   
                            <small>Min <span>R$ 600</span></small>
                            <input type="text" placeholder="Min"/>
                        </div>
                        <div>
                            <small>Max <span>R$ 20.000</span></small>
                            <input type="text" placeholder="Max"/>
                        </div>
                </section>
                <strong>Cômodos</strong>
               <Specifications>
                    <section>
                        <div>
                            <p>Quartos</p>
                            <select name="numbers" id="numbers">
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                        <div>
                            <p>Banheiros</p>
                            <select name="numbers" id="numbers">
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                        <div>
                            <p>Garagem(Qntd. de Vagas)</p>
                            <select name="numbers" id="numbers">
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                    </section>
               </Specifications>
               <strong>Tipo do Imóvel</strong>
               <Types>
                    <button>Apartamento</button>
                    <button>Casa</button>
                    <button>Flat</button>
                    <button>Studio</button>
                    <button>Galpão</button>
                    <button>Loja</button>
               </Types>
               <strong>Área</strong>
                <section>
                            <div>   
                            <small>Min <span>20m²</span></small>
                            <input type="text" placeholder="Min"/>
                        </div>
                        <div>
                            <small>Max <span>1000m²</span></small>
                            <input type="text" placeholder="Máx"/>
                        </div>
                </section>
                <strong>Aceita Pets?</strong>
                <OptionButton>
                    <p>Não</p>
                    <input type="checkbox" name="option"/>
                    <p>Sim</p>
                </OptionButton>
            </FilterBody>
            <FixedButton>
               <Link to="/mapa">Aplicar Filtros</Link>
            </FixedButton>
        </>
    );
  }
}
