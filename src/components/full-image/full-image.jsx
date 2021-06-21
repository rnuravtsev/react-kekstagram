import React, { useEffect, useState } from "react"
import isEmpty from "lodash/isEmpty"
import { useDispatch, useSelector } from "react-redux"
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler"

import { closeFullImage } from "../../store/slices"
import CommentsList from "../comments-list/comments-list"

const FullImage = () => {
  const dispatch = useDispatch()
  const currentFullImage = useSelector((state) => state.app.fullImage)

  const { url, likes, comments, description } = currentFullImage

  const onButtonClose = () => {
    dispatch(closeFullImage())
  }

  return (
    <>
      {!isEmpty(currentFullImage) && (
        <section className="big-picture overlay">
          <h2 className="big-picture__title visually-hidden">
            Просмотр фотографии
          </h2>
          <OutsideClickHandler
            onOutsideClick={() => dispatch(closeFullImage())}
          >
            <div className="big-picture__preview">
              <div className="big-picture__img">
                <img src={url} alt={description} width="600" height="600" />
              </div>

              <div className="big-picture__social  social">
                <div className="social__header">
                  <img
                    className="social__picture"
                    src="img/avatar-1.svg"
                    alt="Аватар автора фотографии"
                    width="35"
                    height="35"
                  />
                  <p className="social__caption">{description}</p>
                  <p className="social__likes">
                    Нравится <span className="likes-count">{likes}</span>
                  </p>
                </div>
                <CommentsList comments={comments} />
                <div className="social__footer">
                  <img
                    className="social__picture"
                    src="img/avatar-6.svg"
                    alt="Аватар комментатора фотографии"
                    width="35"
                    height="35"
                  />
                  <input
                    type="text"
                    className="social__footer-text"
                    placeholder="Ваш комментарий..."
                  />
                  <button
                    type="button"
                    className="social__footer-btn"
                    name="button"
                  >
                    Отправить
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={onButtonClose}
                className="big-picture__cancel  cancel"
                id="picture-cancel"
              >
                Закрыть
              </button>
            </div>
          </OutsideClickHandler>
        </section>
      )}
    </>
  )
}

export default FullImage
