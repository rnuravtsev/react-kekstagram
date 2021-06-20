import PropTypes from "prop-types"

// eslint-disable-next-line import/prefer-default-export
export const commentProptypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
