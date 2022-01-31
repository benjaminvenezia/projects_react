import React, { Component } from 'react';

 class SmileysGrade extends Component {
  render() {
    const {nVote} = this.props;
    let smiley = undefined;

    const smileys = {
        catastrophic: '😑',
        verybad: '🤨',
        bad: '😐',
        nottoobad: '🙂',
        good: '😀',
        excellent: '😆'
    }

    if(nVote < 4) {
        smiley = smileys.catastrophic;
    } else if(nVote < 7) {
        smiley = smileys.verybad;
    } else if(nVote < 11) {
        smiley = smileys.bad;
    } else if(nVote < 14) {
        smiley = smileys.nottoobad;
    } else if(nVote < 17){
        smiley = smileys.good;
    } else {
        smiley = smileys.excellent;
    }

    return (
        <span>{smiley}</span>
    );
  }
}

export default SmileysGrade;