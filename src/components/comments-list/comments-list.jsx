import React, { useState } from "react"
import PropTypes from "prop-types"
import map from "lodash/map"

import CommentItem from "../comment-item/comment-item"
import { commentProptypes } from "../../propTypes"

const COMMENTS_COUNT = 5

const CommentsList = ({ comments }) => {
  const [renderedCommentsCount, setRenderedCommentsCount] =
    useState(COMMENTS_COUNT)
  const [renderedComments, setRenderedComments] = useState(
    comments.slice(0, COMMENTS_COUNT)
  )

  const onButtonClick = () => {
    setRenderedComments(
      comments.slice(0, renderedCommentsCount + COMMENTS_COUNT)
    )
    setRenderedCommentsCount(renderedCommentsCount + COMMENTS_COUNT)
  }

  return (
    <>
      <div className="social__comment-count">
        {comments.length > COMMENTS_COUNT && (
          <>
            <span>{COMMENTS_COUNT} из </span>
            <span className="comments-count">{comments.length}</span>{" "}
            комментариев
          </>
        )}
      </div>

      <ul className="social__comments">
        {map(renderedComments, (el) => (
          <CommentItem key={el.id} avatar={el.avatar} message={el.message} />
        ))}
      </ul>

      {renderedCommentsCount < comments.length && (
        <button
          type="button"
          className="social__comments-loader  comments-loader"
          onClick={onButtonClick}
        >
          Загрузить еще
        </button>
      )}
    </>
  )
}

CommentsList.defaultProps = {
  comments: [],
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentProptypes)),
}

export default CommentsList
