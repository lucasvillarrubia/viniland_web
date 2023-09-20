import * as Yup from 'yup'

export const checkoutValidationSchema = Yup.object({
        name: Yup.string().required('Campo requerido'),
        phone: Yup.string().required('Campo requerido'),
        location: Yup.string().required('Campo requerido'),
        address: Yup.string().required('Campo requerido')
});