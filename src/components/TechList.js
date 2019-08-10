import React, { Component } from 'react';

/**
 * É possível criar um componente de 2 formas> Classe e Função.
 *
 * Toda componente de classe deve conter o método "render()"
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
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">
                Remover
              </button>
            </li>
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
