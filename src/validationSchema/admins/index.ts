import * as yup from 'yup';

export const adminValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  user_id: yup.string().nullable(),
});
