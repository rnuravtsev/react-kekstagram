import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"

const SCALE_VALUES = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
}

const UploadForm = () => {
  const [showForm, setShowForm] = useState(false)
  const [scale, setScale] = useState(100)

  const uploadFormInputRef = useRef()
  const uploadFormImgRef = useRef()

  const onFormChange = () => {
    setShowForm(true)
  }

  const onButtonScaleSmallClick = () => {
    setScale((prevScale) => {
      if (prevScale > SCALE_VALUES.MIN) {
        return prevScale - SCALE_VALUES.STEP
      }
      return SCALE_VALUES.MIN
    })
  }
  const onButtonScaleBigClick = () => {
    setScale((prevScale) => {
      if (prevScale < SCALE_VALUES.MAX) {
        return prevScale + SCALE_VALUES.STEP
      }
      return SCALE_VALUES.MAX
    })
  }

  const onButtonClick = () => {
    setShowForm(false)
  }

  const onEscPress = ({ key }) => {
    if (key === "Escape") {
      setShowForm(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onEscPress, false)
    return () => {
      document.removeEventListener("keydown", onEscPress, false)
    }
  })

  return (
    <form
      className="img-upload__form"
      id="upload-select-image"
      method="post"
      encType="multipart/form-data"
      autoComplete="off"
      onChange={onFormChange}
    >
      <fieldset className="img-upload__start">
        <input
          ref={uploadFormInputRef}
          type="file"
          id="upload-file"
          className="img-upload__input visually-hidden"
          name="filename"
          required
        />
        <label
          htmlFor="upload-file"
          className="img-upload__label img-upload__control"
        >
          Загрузить
        </label>
      </fieldset>

      <div className={classNames("img-upload__overlay", { hidden: !showForm })}>
        <div className="img-upload__wrapper">
          <div className="img-upload__preview-container">
            <fieldset className="img-upload__scale scale">
              <button
                type="button"
                className="scale__control scale__control--smaller"
                onClick={onButtonScaleSmallClick}
              >
                Уменьшить
              </button>
              <input
                type="text"
                className="scale__control scale__control--value"
                title="Image Scale"
                name="scale"
                value={scale}
                onChange={() => scale}
              />
              <button
                type="button"
                className="scale__control scale__control--bigger"
                onClick={onButtonScaleBigClick}
              >
                Увеличить
              </button>
            </fieldset>

            <div className="img-upload__preview">
              <img
                src="img/upload-default-image.jpg"
                alt="Предварительный просмотр фотографии"
                style={{
                  transform: `scale(${scale / 100})`,
                }}
              />
            </div>

            <fieldset className="img-upload__effect-level  effect-level">
              <input
                className="effect-level__value"
                type="number"
                name="effect-level"
              />
              <div className="effect-level__line">
                <button
                  className="effect-level__pin"
                  type="button"
                  tabIndex="0"
                >
                  Кнопка изменения глубины эффекта фотографии
                </button>
                <div className="effect-level__depth">
                  Глубина эффекта фотографии
                </div>
              </div>
            </fieldset>

            <button
              type="button"
              className="img-upload__cancel  cancel"
              id="upload-cancel"
              onClick={onButtonClick}
            >
              Закрыть
            </button>
          </div>

          <fieldset className="img-upload__effects  effects">
            <ul className="effects__list">
              <li className="effects__item">
                <input
                  type="radio"
                  className="effects__radio  visually-hidden"
                  name="effect"
                  id="effect-none"
                />
                <label htmlFor="effect-none" className="effects__label">
                  <span className="effects__preview  effects__preview--none">
                    Превью фото без эффекта
                  </span>
                  Оригинал
                </label>
              </li>
              <li className="effects__item">
                <input
                  type="radio"
                  className="effects__radio  visually-hidden"
                  name="effect"
                  id="effect-chrome"
                />
                <label htmlFor="effect-chrome" className="effects__label">
                  <span className="effects__preview  effects__preview--chrome">
                    Превью эффекта Хром
                  </span>
                  Хром
                </label>
              </li>
              <li className="effects__item">
                <input
                  type="radio"
                  className="effects__radio  visually-hidden"
                  name="effect"
                  id="effect-sepia"
                />
                <label htmlFor="effect-sepia" className="effects__label">
                  <span className="effects__preview  effects__preview--sepia">
                    Превью эффекта Сепия
                  </span>
                  Сепия
                </label>
              </li>
              <li className="effects__item">
                <input
                  type="radio"
                  className="effects__radio  visually-hidden"
                  name="effect"
                  id="effect-marvin"
                />
                <label htmlFor="effect-marvin" className="effects__label">
                  <span className="effects__preview  effects__preview--marvin">
                    Превью эффекта Марвин
                  </span>
                  Марвин
                </label>
              </li>
              <li className="effects__item">
                <input
                  type="radio"
                  className="effects__radio  visually-hidden"
                  name="effect"
                  id="effect-phobos"
                />
                <label htmlFor="effect-phobos" className="effects__label">
                  <span className="effects__preview  effects__preview--phobos">
                    Превью эффекта Фобос
                  </span>
                  Фобос
                </label>
              </li>
              <li className="effects__item">
                <input
                  type="radio"
                  className="effects__radio  visually-hidden"
                  name="effect"
                  id="effect-heat"
                />
                <label htmlFor="effect-heat" className="effects__label">
                  <span className="effects__preview  effects__preview--heat">
                    Превью эффекта Зной
                  </span>
                  Зной
                </label>
              </li>
            </ul>
          </fieldset>

          <fieldset className="img-upload__text text">
            <input
              className="text__hashtags"
              name="hashtags"
              placeholder="#хэш-тег"
            />
            <textarea
              className="text__description"
              name="description"
              placeholder="Ваш комментарий..."
              maxLength="140"
            />
          </fieldset>

          <button
            type="submit"
            className="img-upload__submit"
            id="upload-submit"
          >
            Опубликовать
          </button>
        </div>
      </div>
    </form>
  )
}

export default UploadForm
