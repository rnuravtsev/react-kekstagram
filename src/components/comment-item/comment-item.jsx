import React from "react"
import PropTypes from "prop-types"

const CommentItem = ({ avatar, message }) => (
  <li className="social__comment">
    <img
      className="social__picture"
      src={avatar}
      alt="Аватар комментатора фотографии"
      width="35"
      height="35"
    />
    <p className="social__text">{message}</p>
  </li>
)

CommentItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default CommentItem
