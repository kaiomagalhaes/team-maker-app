import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

/**
 * @TODO: Implement user query
 *
 * The purpose of this query is to pull in the current user
 * so you can verify them and allow access to the child page
 *
 * You cannot use this component until you implement the auth query
 */
const CURRENT_USER_QUERY = gql``;

const propTypes = {
  children: PropTypes.element.isRequired,
};

const AuthGate = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.user) {
        return (
          <div>
            <p>Please Sign In before Continuing</p>
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

AuthGate.propTypes = propTypes;

export default AuthGate;
