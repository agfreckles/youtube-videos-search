import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.handleSearchSubmit(this.state.term)
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label>Search Videos</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
