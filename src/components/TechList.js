import React, { Component } from 'react';

/**
 * É possível criar um componente de 2 formas> Classe e Função.
 *
 * Toda componente de classe deve conter o método "render()"
 */
class TechList extends Component {
  state = {
    techs: ['NodeJS', 'ReactJS', 'React Native'],
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
