import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => {
      return (
        <div>
          <Component {...props} />
        </div>
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  theme: state.theme,
});

console.log("aaa")

export default connect(mapStateToProps)(withRouter(PublicRoute));
