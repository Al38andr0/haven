import PropTypes from "react-proptypes";
import Giphy from "../Giphy/Giphy";
import './GiphyContainer.scss'
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Masonry from 'react-masonry-css'
import MyMasonry from "../test/MyMasonry";

const GiphyContainer = ({collection, error}) => {
  const masonry = () => (
    <Masonry
      breakpointCols={3}
      className="giphy-container"
      columnClassName="giphy-columns">
      {collection.map(giphy => <Giphy key={giphy.id} giphy={giphy}/>)}
    </Masonry>
  )
  const myMasonry = () => (
    <MyMasonry
      nthColumns={3}
      isShuffled={JSON.parse(process.env.REACT_APP_IS_SHUFFLED)}
      containerClassName="giphy-container"
      columnClassName="giphy-columns"
    >
      {collection.map(giphy => <Giphy key={giphy.id} giphy={giphy}/>)}
    </MyMasonry>
  )

  return (
    <>
      { error ?
        <ErrorMessage/> :
        collection.length ?
          // masonry() :
          myMasonry() :
          <ErrorMessage message="No gifs found."/>
      }
    </>
  )
}

GiphyContainer.propTypes = {
}
GiphyContainer.defaultProps = {
}

export default GiphyContainer
