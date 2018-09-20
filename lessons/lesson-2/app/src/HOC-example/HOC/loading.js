import React from 'react';

export const LoadingHOC = WrappedComponent => {
  return class LoadingClass extends React.Component {
    render() {
      console.log('RENDER HOC')
      if (!this.props.contacts.length) {
        return <div>Loading</div>;
      }

      return <WrappedComponent {...this.props}/>;
    }
  };
};