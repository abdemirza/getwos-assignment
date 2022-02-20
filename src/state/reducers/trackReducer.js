import {mediaJSON} from '../../data/dummyData';
const initialState = {
  trackUrl: '',
  trackId: '',
  thumb: '',
  trackTitle: '',
  trackSubtitle: '',
  items: mediaJSON.map(item => {
    return {
      // contentId: item.id,
      mediaInfo: {
        contentId: item.id,
        contentUrl: item.uri,
        metadata: {
          images: [{url: item.thumb}],
          title: item.title,
          subtitle: item.subtitle,
        },
      },
    };
  }),
};

export const trackReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_TRACK':
      return {
        ...state,
        trackUrl: payload.trackUrl,
        trackId: payload.trackId,
        thumb: payload.thumb,
        trackTitle: payload.trackTitle,
        trackSubtitle: payload.trackSubtitle,
      };
    default:
      return state;
  }
};
