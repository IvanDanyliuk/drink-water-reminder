import uuid from 'react-native-uuid'
import images from './images';

export default [
  {
    id: String(uuid.v4()),
    image: images.smallCup,
    capacity: 100,
  },
  {
    id: String(uuid.v4()),
    image: images.mediumCup,
    capacity: 125,
  },
  {
    id: String(uuid.v4()),
    image: images.largeCup,
    capacity: 150,
  },
  {
    id: String(uuid.v4()),
    image: images.extraLargeCup,
    capacity: 200,
  },
];