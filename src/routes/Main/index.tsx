import React, { FunctionComponent, memo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marker } from 'react-google-maps';
import GoogleMap from 'containers/GoogleMap';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from 'components/Card';
import { fetchCards } from 'actions/main';
import { isValidCoords } from 'utils/validation';
import { ICoordinates, ICard } from 'interfaces';
import { AppState } from 'reducers';
import styles from './styles.module.css';

interface InitialState {
  cards: ICard[]
};

interface IInstanceMap {
  setOptions: Function
}

const Main: FunctionComponent = () => {
  const [instanceMap, setInstanceMap] = useState<IInstanceMap | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeCardPosition, setActiveCardPosition] = useState<ICoordinates>({ lat: null, lng: null });
  const dispatch = useDispatch();
  const { cards } = useSelector<AppState, InitialState>(state => state.main);

  const handleClickCard = useCallback((lat: number, lng: number): void => {
    if (!instanceMap) return;

    instanceMap.setOptions({
      center: { lat, lng },
      zoom: 14
    });
    setActiveCardPosition({ lat, lng });
  }, [instanceMap]);

  useEffect(() => {
    const interval = setInterval(async () => {
      await dispatch(fetchCards());
      setIsLoaded(true);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Grid xs={8} className={styles.map}>
        <GoogleMap onMapMounted={setInstanceMap}>
          {isValidCoords(activeCardPosition) && <Marker position={activeCardPosition}/>}
        </GoogleMap>
      </Grid>
      {!isLoaded ? (
        <div className={styles.center}>
          <CircularProgress />
        </div>
      ) : (
        <Grid xs={4} className={styles.cards}>
          {cards.map((card: ICard) => (
            <Card
              key={card.name}
              name={card.name}
              latitude={card.coords.latitude}
              longitude={card.coords.longitude}
              onClick={handleClickCard}
            />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default memo(Main);
