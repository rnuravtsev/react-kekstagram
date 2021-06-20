import React from "react"
import PropTypes from "prop-types"
import map from "lodash/map"

import Photo from "../photo/photo"

const Pictures = ({ pictures }) => (
  <section className="pictures container">
    <h2 className="pictures__title visually-hidden">
      Фотографии других пользователей
    </h2>
    <section className="img-upload">
      <div className="img-upload__wrapper">
        <h2 className="img-upload__title  visually-hidden">
          Загрузка фотографии
        </h2>
        <form
          className="img-upload__form"
          id="upload-select-image"
          method="post"
          encType="multipart/form-data"
          autoComplete="off"
        >
          <fieldset className="img-upload__start">
            <input
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

          <div className="img-upload__overlay  hidden">
            <div className="img-upload__wrapper">
              <div className="img-upload__preview-container">
                <fieldset className="img-upload__scale scale">
                  <button
                    type="button"
                    className="scale__control scale__control--smaller"
                  >
                    Уменьшить
                  </button>
                  <input
                    type="text"
                    className="scale__control scale__control--value"
                    title="Image Scale"
                    name="scale"
                  />
                  <button
                    type="button"
                    className="scale__control scale__control--bigger"
                  >
                    Увеличить
                  </button>
                </fieldset>

                <div className="img-upload__preview">
                  <img
                    src="img/upload-default-image.jpg"
                    alt="Предварительный просмотр фотографии"
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
      </div>
    </section>
    {map(pictures, (item) => (
      <Photo key={item.id} photo={item} />
    ))}
  </section>
)

Pictures.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Pictures
