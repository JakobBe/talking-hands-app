import React from 'react';
import { listGestures } from '../graphql/queries';
import { getPreSignedUrl, appSyncGraphQl } from '../../AWSClient';

export const GestureContext = React.createContext({});

class GestureContextHolder extends React.Component {
  state = {
    gestures: { dgs: [], guk: [] },
    lenguage: ''
  };

  componentDidMount() {
    this.fetchGestures();
  }

  fetchGestures = async () => {
    await appSyncGraphQl({ query: listGestures }).then((res) => {
      if (res.status === 200) {
        let gestures = res.res.listGestures.items;
        let sortedGestures = { dgs: [], guk: [] };

        gestures.map((gesture) => {
          getPreSignedUrl(gesture.stillUrl).then((preSignedUrl) => {
            gesture.stillUrl = preSignedUrl;
            if (gesture.type.includes('guk')) {
              sortedGestures.guk.push(gesture);
            }

            if (gesture.type.includes('dgs')) {
              sortedGestures.dgs.push(gesture);
            }
          });
        });

        this.setState({
          gestures: sortedGestures,
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
