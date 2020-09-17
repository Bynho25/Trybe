import React, { Component } from 'react';
import './Form.css';

const states = [
  'ACRE',
  'ALAGOAS',
  'AMAPA',
  'AMAZONAS',
  'BAHIA',
  'CEARÁ',
  'DISTRITO FEDERAL',
  'ESPÍRITO SANTO',
  'GOIÁS',
  'MARANHÃO',
  'MATO GROSSO',
  'MATO GROSSO DO SUL',
  'MINAS GERAIS',
  'PARÁ',
  'PARAÍBA',
  'PARANÁ',
  'PERNAMBUCO',
  'PIAUÍ',
  'RIO DE JANEIRO',
  'RIO GRANDE DO NORTE',
  'RIO GRANDE DO SUL',
  'RONDÔNIA',
  'RORAIMA',
  'SANTA CATARINA',
  'SÃO PAULO',
  'SERGIPE',
  'TOCANTIS',
];

class Form extends Component {
  constructor() {
    super();

    // this.handleName = this.handleName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toUpperCase = this.toUpperCase.bind(this);
    this.removeSpecialCharacters = this.removeSpecialCharacters.bind(this);
    this.onBlurhandle = this.onBlurhandle.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      resume: '',
      occupation: '',
      description: '',
    };
  }

  handleChange({ target }) {
    console.log(target.value);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  toUpperCase({ target }) {
    this.setState({
      name: target.value.toUpperCase(),
    });
  }

  removeSpecialCharacters({ target }) {
    this.setState({
      address: target.value.replace(/[^\w\s]/gi, ''),
    });
  }

  onBlurhandle({ target }) {
    let value = target.value.match(/^\d/) ? '' : target.value;
    this.setState({
      city: value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="box">          
          <form className="form">
          <h1>Hello Form</h1>
            <fieldset>
              <label>
                Nome:
                <input
                  className="name"
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  maxLength="50"
                  required="required"
                  value={this.state.name}
                  onChange={this.toUpperCase}
                />
              </label>
              <label>
                Email:
                <input
                  className="email"
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                  maxLength="50"
                  required="required"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                CPF:
                <input
                  className="cpf"
                  type="text"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  maxLength="11"
                  required="required"
                  value={this.state.cpf}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Endereço:
                <input
                  className="address"
                  type="text"
                  name="address"
                  placeholder="Digite seu endereço"
                  maxLength="200"
                  required="required"
                  value={this.state.address}
                  onChange={this.removeSpecialCharacters}
                />
              </label>
              <label>
                Cidade:
                <input
                  className="city"
                  type="text"
                  name="city"
                  placeholder="Digite sua cidade"
                  maxLength="28"
                  required="required"
                  value={this.state.city}
                  onBlur={this.onBlurhandle}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Escolha seu estado:
                <label>
                <br></br>
              </label>
                <select
                  className="state"
                  name="state"
                  required="required"
                  value={this.state.state}
                  onChange={this.handleChange}
                >
                  {states.map((value, key) => (
                    <option key={key}>{value}</option>
                  ))}
                </select>
                </label>
              <label>
                <br></br>
              </label>
              <label>
                Tipo de residência:
                <input className ="radio" type="radio" value="apartment" name="type" required="required" /> Apartamento
                <input className ="radio" type="radio" value="house" name="type" required="required" /> Casa
              </label>
            </fieldset>

            <fieldset>
              <label>
                Resumo do currículo:
                <textarea
                  className="resume"
                  type="text"
                  name="resume"
                  maxLength="1000"
                  required="required"
                  placeholder="Digite aqui o resumo do seu currículo"
                  rows="5"
                  cols="35"
                  value={this.state.resume}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Cargo:
                <textarea
                  className="occupation"
                  type="text"
                  name="occupation"
                  maxLength="40"
                  required="required"
                  placeholder="Digite aqui seu cargo"
                  value={this.state.occupation}
                  // onMouseEnter={() => {
                  //   alert('Preencha esse campo com cuidado');
                  // }}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Descrição do Cargo:
                <textarea
                  className="description"
                  type="text"
                  name="description"
                  maxLength="500"
                  required="required"
                  placeholder="Digite aqui a descrição do seu cargo"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <button type="submit">Submit</button>
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
