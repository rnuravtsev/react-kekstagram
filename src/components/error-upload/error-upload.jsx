import React from "react"

const ErrorUpload = () => (
  <div id="error">
    <section className="error">
      <div className="error__inner">
        <h2 className="error__title">Ошибка загрузки файла</h2>
        <div className="error__buttons">
          <button type="button" className="error__button">
            Попробовать снова
          </button>
          <button type="button" className="error__button">
            Загрузить другой файл
          </button>
        </div>
      </div>
    </section>
  </div>
)

export default ErrorUpload
