import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"

const Button = ({page}) => {
    return (
        <div className="button px-8 py-2 bg-accent-pink text-center inline-block">
            <NavLink
              className="font-semibold"
              to={`/${page}`}
            >{page}</NavLink>
        </div>
    )
}

Button.defaultProps = {
    page: "404"
}

Button.propTypes = {
    page: PropTypes.string.isRequired,
}

export default Button
