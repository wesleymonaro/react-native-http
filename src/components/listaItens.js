import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    ScrollView
  } from 'react-native';
import axios from 'axios'

import Itens from './itens'

export default class ListaItens extends Component {

    constructor(props){
        super(props)
        this.state = { litaItens: [] }
    }

    componentWillMount(){
        //requisiçao http
        //http://faus.com.br/recursos/c/dmairr/api/itens.html

        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then((resp) => this.setState({ litaItens: resp.data }))
            .catch(err => console.log("Errro ", err))
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#DDD'}}>
                { this.state.litaItens.map(item => <Itens key={item.titulo} item={item}>{item.titulo}</Itens>) }
            </ScrollView>
        )
    }
}