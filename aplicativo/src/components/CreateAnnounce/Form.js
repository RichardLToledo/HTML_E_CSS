import React, { Component } from 'react';
import { Head, Menu, PageTitle, Camps, Select, Input, Button, CreateType, Question, OptionButton} from '../../style.js';
import  {Link} from 'react-router-dom';


export default class CreateAnnounce extends Component {
  render() {
    return <>
          <Menu>
                <li>
                    <Link to="/imoveis"> 
                        <span class="material-icons">
                            home
                        </span>
                        Anúncios
                    </Link>
                </li>
                <li>
                    <Link to="/mapa">  
                        <span class="material-icons">
                            map
                        </span>
                        Mapa
                    </Link>
                </li>
                <li>
                    <Link> 
                        <span class="material-icons">
                            favorite
                        </span>
                        Salvos
                    </Link>
                </li>
                <li>
                    <Link> 
                        <span class="material-icons">
                            person
                        </span>
                        Perfil
                    </Link>
                </li>
              </Menu>
              <Question>
                <Link to="/dicas-criacao"> <div></div></Link>
              </Question>
          <Head>
                <div className="Brand">
                  <svg width="119" height="36" viewBox="0 0 119 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74483 35L0.4439 10.985H4.66095L10.5204 29.6732L16.0692 10.985H20.3306L25.7018 29.6732L31.6057 10.985H35.9115L27.5218 35H23.6155L18.1999 16.6669L12.6512 35H10.5204H8.74483ZM42.6737 35H38.8562V10.985H42.6737V35ZM38.5898 3.0392C38.5898 2.41774 38.797 1.89985 39.2113 1.48555C39.6552 1.04165 40.1731 0.819699 40.7649 0.819699C41.3864 0.819699 41.9043 1.04165 42.3186 1.48555C42.7625 1.89985 42.9844 2.41774 42.9844 3.0392C42.9844 3.63107 42.7625 4.14895 42.3186 4.59285C41.9043 5.00716 41.3864 5.21431 40.7649 5.21431C40.1731 5.21431 39.6552 5.00716 39.2113 4.59285C38.797 4.14895 38.5898 3.63107 38.5898 3.0392ZM80.1122 35H74.9629H74.2083H70.1244H67.1503C66.4992 35 65.937 34.8076 65.4635 34.4229C65.0196 34.0382 64.7976 33.4611 64.7976 32.6917C64.7976 32.2182 64.8864 31.6855 65.0639 31.0937C65.2711 30.5018 65.6262 29.8508 66.1293 29.1405L76.1171 14.4918H66.3069L64.7976 10.985H69.9912H71.101H75.1849H76.9161C77.7743 10.985 78.4549 11.1922 78.958 11.6065C79.4907 11.9912 79.757 12.5683 79.757 13.3377C79.757 13.752 79.6683 14.2255 79.4907 14.7582C79.3427 15.2612 79.0616 15.8235 78.6473 16.445L68.7039 31.6264H79.0912L80.1122 35ZM86.8674 23.9469V25.1454C86.8674 26.1812 86.897 27.1282 86.9562 27.9864C87.0154 28.8446 87.1929 29.5992 87.4889 30.2503C87.8144 30.9013 88.3175 31.4044 88.9981 31.7595C89.6788 32.1146 90.6554 32.2922 91.9279 32.2922C93.8514 32.2922 95.1683 31.9075 95.8786 31.1381C96.5888 30.339 96.9439 29.2293 96.9439 27.8088C97.1215 27.8088 97.3731 27.8088 97.6986 27.8088C98.0241 27.8088 98.3644 27.8088 98.7195 27.8088C99.0747 27.7792 99.4298 27.7644 99.7849 27.7644C100.14 27.7644 100.451 27.7644 100.717 27.7644C100.717 28.9186 100.584 29.9691 100.318 30.9161C100.051 31.8335 99.5778 32.6325 98.8971 33.3132C98.2461 33.9642 97.3435 34.4821 96.1893 34.8668C95.0648 35.222 93.6443 35.3995 91.9279 35.3995C89.9155 35.3995 88.3175 35.148 87.1338 34.6449C85.9796 34.1122 85.1066 33.402 84.5147 32.5142C83.9229 31.5968 83.5382 30.5166 83.3606 29.2737C83.183 28.0308 83.0943 26.6695 83.0943 25.1898V20.8396C83.0943 19.3599 83.1683 17.9986 83.3162 16.7557C83.4938 15.4832 83.8785 14.3882 84.4704 13.4708C85.0918 12.5535 85.9796 11.8432 87.1338 11.3401C88.3175 10.8074 89.9155 10.5411 91.9279 10.5411C93.7923 10.5411 95.3015 10.7927 96.4557 11.2957C97.6098 11.7988 98.4976 12.5091 99.1191 13.4265C99.7701 14.3143 100.199 15.4092 100.406 16.7113C100.643 17.9838 100.761 19.4043 100.761 20.9728V23.9469H86.8674ZM91.9279 13.6484C90.6554 13.6484 89.6788 13.8408 88.9981 14.2255C88.3175 14.5806 87.8144 15.0689 87.4889 15.6903C87.1929 16.3118 87.0154 17.0368 86.9562 17.8655C86.897 18.6941 86.8674 19.5819 86.8674 20.5289V20.9728H96.9883C96.9883 19.7298 96.9292 18.6497 96.8108 17.7323C96.722 16.8149 96.5 16.0603 96.1449 15.4684C95.8194 14.8469 95.3163 14.3882 94.6357 14.0923C93.9846 13.7964 93.082 13.6484 91.9279 13.6484ZM104.169 19.0196C104.169 17.4807 104.303 16.2082 104.569 15.2021C104.835 14.1663 105.338 13.3377 106.078 12.7162C106.818 12.0948 107.809 11.6509 109.052 11.3845C110.325 11.1182 111.967 10.985 113.98 10.985H118.241L116.643 14.1367H114.246C112.973 14.1367 111.923 14.2107 111.094 14.3586C110.295 14.477 109.659 14.7138 109.186 15.0689C108.712 15.424 108.387 15.9271 108.209 16.5781C108.031 17.1996 107.943 18.0134 107.943 19.0196V35H104.169V19.0196Z" fill="#055EFF"/>
                    <path d="M61.9487 35H56.7994H56.0448H51.9609H48.9868C48.3357 35 47.7735 34.8076 47.3 34.4229C46.8561 34.0382 46.6341 33.4611 46.6341 32.6917C46.6341 32.2182 46.7229 31.6855 46.9005 31.0937C47.1076 30.5018 47.4627 29.8508 47.9658 29.1405L57.9536 14.4918H48.1434L46.6341 10.985H51.8278H52.9375H57.0214H58.7526C59.6108 10.985 60.2914 11.1922 60.7945 11.6065C61.3272 11.9912 61.5936 12.5683 61.5936 13.3377C61.5936 13.752 61.5048 14.2255 61.3272 14.7582C61.1792 15.2612 60.8981 15.8235 60.4838 16.445L50.5404 31.6264H60.9277L61.9487 35Z" fill="#11DE9A"/>
                  </svg>
                </div>
                <button>
                  <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="1.5" x2="28.5" y2="1.5" stroke="#055EFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="10.5" y1="9.5" x2="28.5" y2="9.5" stroke="#055EFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="5.5" y1="17.5" x2="28.5" y2="17.5" stroke="#055EFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
          </Head>
          <PageTitle>
          <span class="material-icons">
            house
            </span>
            Registrar Imóvel
          </PageTitle>
          <Camps>
            <small> <span class="material-icons">
            settings
            </span> 
            Admistrador</small>
            <p>Quem é o proprietário?</p>
            <Select>
                <input type="text" list="users" placeholder="Nome do proprietário"/>
                <datalist id="users">
                    <option value="Pedro Paulo" />
                    <option value="Alex" />
                    <option value="Marília Mendoça" />
                    <option value="Maraia Maraísa" />
                </datalist>
            </Select>
            <h5>Informações do Imóvel</h5>
            <p>Onde fica seu imóvel?</p>
            <Input>
              <input type="text" placeholder="CEP"/>
            </Input>
            <Input>
              <input type="text" placeholder="Bairro"/>
            </Input>
            <Input>
              <input type="text" placeholder="Endereço"/>
            </Input>
            <Input>
              <input type="text" placeholder="Número"/>
            </Input>
            <Input>
              <input type="text" placeholder="Complemento"/>
            </Input>
            <Input>
              <input type="text" placeholder="Cidade"/>
            </Input>
            <Input>
              <input type="text" placeholder="Estado"/>
            </Input>

           <div>
            <p>Qual tipo da sua propriedade?</p>
              <Select>
                  <input type="text" list="types" placeholder="Tipo da propriedade"/>
                  <datalist id="types">
                      <option value="Casa" />
                      <option value="Apartamento" />
                      <option value="Flat" />
                      <option value="Galpão" />
                  </datalist>
              </Select>
              <Button><span class="material-icons">
                add
              </span>
              <Link to="/criar-tipo">Adicionar tipo</Link></Button>
           </div>
            <Input>
              <input type="text" placeholder="Valor do Aluguel"/>
            </Input>
            <Input>
              <input type="text" placeholder="Valor do IPTU"/>
            </Input>
            <Input>
              <input type="text" placeholder="Valor do Condomínio"/>
            </Input>
            <Input>
              <input type="text" placeholder="Área em m²"/>
            </Input>
            <Input>
              <input type="text" placeholder="Instalação da Cemig"/>
            </Input>
            <Select>
                <input type="text" list="bed" placeholder="Quantos quartos?"/>
                <datalist id="bed">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                </datalist>
            </Select>
            <Select>
                <input type="text" list="beth" placeholder="Quantos banheiros?"/>
                <datalist id="beth">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                </datalist>
            </Select>
            <Select>
                <input type="text" list="parking" placeholder="Passui vagas na garagem?"/>
                <datalist id="parking">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                </datalist>
            </Select>
            <p>Esta propriedade permite animais?</p>
              <OptionButton>
                <p>Não</p>
                <input type="checkbox" name="option"/>
                <p>Sim</p>
              </OptionButton>
            <p>Tem seguro contra incêndio?</p>
            <OptionButton>
                <p>Não</p>
                <input type="checkbox" name="option"/>
                <p>Sim</p>
              </OptionButton>
            <p>Descrição</p>
            <textarea name="description" id="description" cols="30" rows="10" resize="none"></textarea>
            <label>
              <input type="checkbox"/>
              <span>Eu autorizo que a Wizzer Imóveis gerencie o meu imóvel</span>
            </label>
            <button >
              <span class="material-icons">
                add
              </span>
              Registrar imóvel
            </button>
          </Camps>

    </>;
  }
}
