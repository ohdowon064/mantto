const initialState = {
  insertInputs: {
    major: '',
    manttoTalent: '',
    manttiTalent: '',
  },
};

export default function TalentReducer(state = initialState, action) {
  if (action.type === 'setMajor') {
    const { major } = action.payload;
    return {
      ...state,
      insertInputs: {
        ...state.insertInputs,
        major,
      },
    };
  }
  if (action.type === 'setManttoTalent') {
    const { manttoTalent } = action.payload;
    return {
      ...state,
      insertInputs: {
        ...state.insertInputs,
        manttoTalent,
      },
    };
  }
  if (action.type === 'setManttiTalent') {
    const { manttiTalent } = action.payload;
    return {
      ...state,
      insertInputs: {
        ...state.insertInputs,
        manttiTalent,
      },
    };
  }
  return state;
}
