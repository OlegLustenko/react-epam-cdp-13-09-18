import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  static propTypes = {
    onSearchTermChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="YT-input"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span>(ﾉ≧∀≦)ﾉ ‥…━━━★</span>
      </div>
    );
  }

  onInputChange = (event) => {
    const {
      target: {
        value: term,
      },
    } = event;

    this.setState({term});
    this.props.onSearchTermChange(term);
  };
}

export default SearchBar;
