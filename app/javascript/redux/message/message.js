const FETCH_MESSAGE_REQUEST = 'FETCH_MESSAGE_REQUEST';
const FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS';
const FETCH_MESSAGE_FAILURE = 'FETCH_MESSAGE_FAILURE';

const initialState = ""

const fetchMessageRequest = () => ({
  type: FETCH_MESSAGE_REQUEST
});

const fetchMessageSuccess = (payload) => ({
  type: FETCH_MESSAGE_SUCCESS,
  payload
});

const fetchMessageFailure = () => ({
  type: FETCH_MESSAGE_FAILURE,
});

export const fetchMessage = () => {
  return async (dispatch) => {
    dispatch(fetchMessageRequest());
    try {
      const response = await fetch('/v1/random_message.json');
      const json = await response.json();
      dispatch(fetchMessageSuccess(json.message));
    }
    catch (error) {
      dispatch(fetchMessageFailure());
    }
  };
};


const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MESSAGE_REQUEST:
      return "Fetching a message...";
    case FETCH_MESSAGE_SUCCESS:
      return payload;
    case FETCH_MESSAGE_FAILURE:
      return "Failed to fetch a message.";
    default:
      return state;
  }
}

export default reducer;