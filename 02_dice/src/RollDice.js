import React, { Component } from 'react'
import Die from './Die';
import "./css/RollDice.css";

class RollDice extends Component 
{
    constructor(props){
        super(props);

        this.state = {
            // dies: <h1>Lancez donc les dés. 🙂 </h1>,
            rolling: false,
            // sum : 0
        };

        this.generateDices = this.generateDices.bind(this);
    }

      generateDices(n){
        // let dies = [];
        //let sumDices = 0;

        //Pose problème pour gérer les animations. 
        // for(var i = 0; i < n; i++) {
        //     let randomValue = Math.floor(Math.random() * 6 + 1);
        //     sumDices += randomValue;
        //     dies.push(<Die key={i} val={randomValue} rolling={this.state.rolling}/>)

        //     randomValue = 0;
        // }

        //méthode statique
        

        //  this.setState({
        //      dies: dies,
        //      //sum : sumDices,
        //      rolling: true,
        // });

         const newDie1 = Math.floor(Math.random() * 6 + 1);
         const newDie2 = Math.floor(Math.random() * 6 + 1);


        this.setState({ die1: newDie1, die2: newDie2, rolling: true })

        //attendre une seconde et passer rollin a false
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }

    render() {
        return (
            <div className="RollDice">

                {/* {this.state.dies} */}
                <Die face={this.state.die1} rolling={this.state.rolling} />
                <Die face={this.state.die2} rolling={this.state.rolling}/>

                <button onClick={() => this.generateDices(2)} disabled={this.state.rolling} className="RollDice-button">
                   {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
                {/* {this.state.sum ? <h3> Somme : {this.state.sum}</h3> : ' '} */}
            </div>
        )
    }
}

export default RollDice;


