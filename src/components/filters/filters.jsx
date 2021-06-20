import React from "react"

const Filters = () => (
  <section className="img-filters  img-filters--inactive  container">
    <h2 className="img-filters__title  visually-hidden">Фильтр фотографий</h2>
    <form
      className="img-filters__form"
      action="index.html"
      method="get"
      autoComplete="off"
    >
      <button
        type="button"
        className="img-filters__button  img-filters__button--active"
        id="filter-popular"
      >
        Популярные
      </button>
      <button type="button" className="img-filters__button" id="filter-new">
        Новые
      </button>
      <button
        type="button"
        className="img-filters__button"
        id="filter-discussed"
      >
        Обсуждаемые
      </button>
    </form>
  </section>
)

export default Filters
