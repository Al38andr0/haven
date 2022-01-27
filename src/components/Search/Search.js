import PropTypes from "react-proptypes";
import {DebounceInput} from 'react-debounce-input';
import './Search.scss'

const Search = ({changeEvent, query}) => {

  return (
    <div className="search-container">
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={changeEvent}
        name="search"
        placeholder="Search a gif"
        value={query}
      />
      <span>🔍</span>
    </div>
  )
}

Search.propTypes = {
}
Search.defaultProps = {
}
export default Search
