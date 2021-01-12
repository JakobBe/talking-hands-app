import React from 'react';
import {listGestures} from '../graphql/queries';
import {getPreSignedUrl, appSyncGraphQl} from '../../AWSClient';

export const GestureContext = React.createContext({});

class GestureContextHolder extends React.Component {
  state = {
    gestures: [],
  };

  componentDidMount() {
    this.fetchGestures();
  }

  fetchGestures = async () => {
    await appSyncGraphQl({query: listGestures}).then((res) => {
      if (res.status === 200) {
        let gestures = res.res.listGestures.items;
        gestures.map((gesture) => {
          getPreSignedUrl(gesture.stillUrl).then((preSignedUrl) => {
            gesture.stillUrl = preSignedUrl;
          });
        });

        console.log('gestures from context', gestures);
        this.setState({
          gestures,
        });
        return 'Hello World';
      } else {
        console.log('res', res);
      }
    });
  };

  render() {
    return (
      <GestureContext.Provider
        value={{
          gestures: this.state.gestures,
          fetchGestures: this.fetchGestures,
        }}>
        {this.props.children}
      </GestureContext.Provider>
    );
  }
}

export default GestureContextHolder;
