import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilAlt,
  faHammer,
  faAngleDown,
  faArrowRight,
  faFileAlt,
  faBolt,
  faCommentAlt,
  faCalendarDay,
  faInfoCircle,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faPencilAlt,
  faHammer,
  faAngleDown,
  faArrowRight,
  faFileAlt,
  faBolt,
  faCommentAlt,
  faCalendarDay,
  faInfoCircle,
  faEnvelope
);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>{children}</div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
