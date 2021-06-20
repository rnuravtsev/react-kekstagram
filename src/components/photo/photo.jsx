import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { commentProptypes } from "../../propTypes"
import { openFullImage } from "../../store/slices"

/**
 *
 * @param {string} url адрес картинки вида photos/{{i}}.jpg
 * @param {string} description описание фотографии.
 * @param {number} likes количество лайков, поставленных фотографии. Случайное число от 15 до 200
 * @param {array} comments список комментариев, оставленных другими пользователями к этой фотографии.
 * @returns {JSX.Element}
 * @constructor
 */

const Photo = ({ photo }) => {
  const dispatch = useDispatch()

  const { url, description, likes, comments } = photo

  return (
    <button
      className="picture"
      type="button"
      onClick={() => dispatch(openFullImage(photo))}
    >
      <img
        className="picture__img"
        src={url}
        width="182"
        height="182"
        alt={description}
      />
      <p className="picture__info">
        <span className="picture__comments">{comments.length}</span>
        <span className="picture__likes">{likes}</span>
      </p>
    </button>
  )
}

Photo.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape(commentProptypes)),
  }).isRequired,
}

export default Photo
