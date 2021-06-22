import React from "react"
import PropTypes from "prop-types"
import map from "lodash/map"

import Photo from "../photo/photo"
import UploadForm from "../upload-form/upload-form"

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
        <UploadForm />
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
