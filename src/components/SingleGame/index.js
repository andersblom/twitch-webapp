import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RenderSvg from '../RenderSvg';

import './singlegame.css';

export default class SingleGame extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover,
        })
    }
    
    render() {
        const game = this.props.game.game;
        const { channels, viewers } = this.props.game;
        
        return(
            <Link className={"games__grid__entry" + (this.state.hover ? " games__grid__entry--hover" : "")} to={`/game/${game.name}`} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                <div className="games__grid__background" style={{ backgroundImage: `url(${game.box.large})` }}></div>
                <div className="games__grid__overlay"></div>
                <div className="games__grid__content__name">{game.name}</div>
                <div className="games__grid__content__hover">
                    <div className="games__grid__content__streamers"><RenderSvg iconName="video" />{channels.toLocaleString()}</div>
                    <div className="games__grid__content__viewers"><RenderSvg iconName="tv" />{viewers.toLocaleString()}</div>
                </div>
            </Link>
        );
    }
}

SingleGame.propTypes = {
    game: PropTypes.object.isRequired,
}