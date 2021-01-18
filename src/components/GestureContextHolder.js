import React from 'react';
import { listGestures } from '../graphql/queries';
import { getPreSignedUrl, appSyncGraphQl } from '../../AWSClient';

export const GestureContext = React.createContext({});

class GestureContextHolder extends React.Component {
  state = {
    gestures: [],
    lenguage: ''
  };

  componentDidMount() {
    this.fetchGestures();
  }

  fetchGestures = async () => {
    await appSyncGraphQl({ query: listGestures }).then((res) => {
      if (res.status === 200) {
        let gestures = res.res.listGestures.items;
        gestures.map((gesture) => {
          getPreSignedUrl(gesture.stillUrl).then((preSignedUrl) => {
            gesture.stillUrl = preSignedUrl;
          });
        });

        this.setState({
          gestures,
        });
      }
    });
  };

  setLenguage = (lenguage) => {
    this.setState({
      lenguage,
    });
  };

  render() {
    return (
      <GestureContext.Provider
        value={{
          gestures: this.state.gestures,
          fetchGestures: this.fetchGestures,
          lenguage: this.state.lenguage,
          setLenguage: this.setLenguage,
        }}>
        {this.props.children}
      </GestureContext.Provider>
    );
  }
}

export default GestureContextHolder;
