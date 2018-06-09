import React, { Component } from 'react';
import {Panel} from 'primereact/components/panel/Panel'
import {Button} from 'primereact/components/button/Button'
import { Chart } from 'primereact/components/chart/Chart'

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      exibindo: false,
      produtos : undefined,
      quantidade : undefined
    }
  }

  obtenhaDados() {
    fetch('/dados')
      .then(r => Promise.resolve(r))
      .then(r => r.json())
      .then(({produtos, quantidade}) => {
        this.setState({produtos, quantidade, exibindo: true})
      })
  }



  render() {
    let produtosPendentes
    let voltar
    let conteudo

    if (this.state.exibindo === false){
      conteudo = <Button label='Exibir' onClick={this.obtenhaDados.bind(this)}/>
      produtosPendentes = <Button label='Visualizar produtos' onClick={this.obtenhaDados.bind(this)}/>

      
    }


    else {
      const dados = {
        labels: this.state.produtos,
        datasets: [
          {
            label: 'produtos',
            backgroundColor: 'green',
            data: this.state.produtos
          }
        ]
      }

      conteudo = <Chart type='bar' data={dados}/>

    }


    return (
      <Panel header='Trabalho t1'>

        <div>
          {voltar}
          {conteudo}
          {produtosPendentes}
        </div>

      </Panel>
    )
  }
}

export default App;
