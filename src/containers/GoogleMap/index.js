import React, { useEffect, memo, useRef } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { MAP } from 'react-google-maps/lib/constants';
import { compose, withProps } from 'recompose';

const Map =({ onMapMounted, children }) => {
  const instanceMap = useRef();
  useEffect(() => {
    if (!instanceMap.current) return;
    const map = instanceMap.current.context[MAP];
    onMapMounted(map);
  }, [instanceMap, onMapMounted]);

  return (
    <GoogleMap
      ref={instanceMap}
      defaultZoom={2}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {children}
    </GoogleMap>
  );
};

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  memo,
)(Map);