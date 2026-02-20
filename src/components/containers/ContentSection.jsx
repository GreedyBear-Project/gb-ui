import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function ContentSection({ className = null, children, ...rest }) {
  return (
    <div className={classnames("content-section bg-dark", className)} {...rest}>
      {children}
    </div>
  );
}

ContentSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ContentSection;
