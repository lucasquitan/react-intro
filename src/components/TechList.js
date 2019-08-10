import React, { Component } from 'react';

import TechItem from './Techitem';

/**
 * É possível criar um componente de 2 formas> Classe e Função.
 *
 * Toda componente de classe deve conter o método "render()"
 *
 * Para acessar uma propriedade em um componente de classse, seria necessário
 * acessar 'this.props.<name>'
 *
 * Em um componente de função é possível acessar através parâmetros
 */
class TechList extends Component {
  state = {
    newTech: '',
    techs: ['NodeJS', 'ReactJS', 'React Native'],
  };

  /**
   * O método precisa ser inscrito em forma de arrow function
   * para poder acessar as propriedades atraves do this.
   */
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    /**
     * Estados imutáveis, para acessar novos valores é necessário criar
     * um novo item contendo este valor, usando o setState().
     */

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
    });
    this.state.newTech = '';
  };

  handleDelete = tech => {
    /**
     * filter retorna o array no qual a condição é satisfeita
     */
    this.setState({
      techs: this.state.techs.filter(t => t !== tech),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              onDelete={() => this.handleDelete(tech)}
              tech={tech}
              key={tech}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
