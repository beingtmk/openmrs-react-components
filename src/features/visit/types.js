import types from 'redux-types';

import { BASIC_TYPES } from "../../types";

export default {
  ACTIVE_VISITS: types('active_visits', BASIC_TYPES),
  INACTIVE_VISITS: types('inactive_visits', BASIC_TYPES),
  PATIENT_ACTIVE_VISIT: types('patient_visits', BASIC_TYPES)
};
