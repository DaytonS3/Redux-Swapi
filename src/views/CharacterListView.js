import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import {Swapi} from '../actions/index';


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.Swapi();
  }

  render() {
    if (this.props.fetching) {
      return <p>Loading...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

export default connect(
    mapStateToProps,
  {Swapi}
)(CharacterListView);
