import bcrypt from 'bcryptjs';
import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  favorites: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    const draft = draftState;

    switch (action.type) {
      case '@favorites/ADD_REQUEST': {
        draft.loading = true;

        break;
      }
      case '@favorites/ADD_SUCCESS': {
        draft.loading = false;

        const { review } = action.payload;

        draft.favorites.push(review);

        break;
      }
      case '@favorites/ADD_FAILURE': {
        draft.loading = false;

        break;
      }
      case '@favorites/REMOVE': {
        const { reviewTitle, criticName } = action.payload;

        const index = draft.favorites.findIndex(element =>
          bcrypt.compareSync(`${reviewTitle}${criticName}`, element.id)
        );

        if (index >= 0) {
          draft.favorites.splice(index, 1);
        }

        break;
      }
      default:
    }
  });
}
