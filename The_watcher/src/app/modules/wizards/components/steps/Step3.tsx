
import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';

const Step3: FC = () => {
  const { values } = useFormikContext<any>(); // Access Formik context for values

  return (
    <div className='w-100'>
      {/* Market Cap Field */}
      <div className='fv-row mb-10'>
        <label className='form-label required'>Market cap (USD)</label>
        <Field name='businessName' 
        className='form-control form-control-lg form-control-solid border-primary'/>
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>

      {/* Liquidity Field */}
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Liquidity (USD)</span>
        </label>
        <Field
          name='businessDescriptor'
          className='form-control form-control-lg form-control-solid border-primary'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessDescriptor' />
        </div>
      </div>

      {/* Burned SOL Field */}
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Burned SOL</span>
        </label>
        <Field
          name='businessDescriptor'
          className='form-control form-control-lg form-control-solid border-primary'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessDescriptor' />
        </div>
      </div>

      {/* Supply Field */}
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Supply</span>
        </label>
        <Field
          name='Supply'
          className='form-control form-control-lg form-control-solid border-primary'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='Supply' />
        </div>
      </div>

      {/* Locked Liquidity Toggle */}
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Locked Liquidity</span>
        </label>
        <div className='form-check form-switch'>
          <Field
            type='checkbox'
            name='lockedLiquidity'
            className='form-check-input'
            id='lockedLiquidity'
            style={{
              backgroundColor: values.lockedLiquidity ? '#28a745' : '',
              borderColor: values.lockedLiquidity ? '#28a745' : '',
            }}
          />
          <label className='form-check-label' htmlFor='lockedLiquidity'>
            {values.lockedLiquidity ? 'True' : 'False'}
          </label>
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='lockedLiquidity' />
        </div>
      </div>
    </div>
  );
};

const FormikWrapper: FC = () => {
  return (
    <Formik
      initialValues={{
        businessName: '',
        businessDescriptor: '',
        Supply: '',
        lockedLiquidity: false,
      }}
      onSubmit={(values) => {
        console.log('Form submitted with values:', values);
      }}
    >
      {() => (
        <Form>
          <Step3 />
          <div className='text-center'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export {Step3}
// export default FormikWrapper;











// import {FC} from 'react'
// import {Field, ErrorMessage} from 'formik'
// import { useFormikContext } from 'formik';

// const Step3: FC = () => {
//   return (
//     <div className='w-100'>
//       {/* <div className='pb-10 pb-lg-12'>
//         <h2 className='fw-bolder text-gray-900'>Business Details</h2>

//         <div className='text-gray-500 fw-bold fs-6'>
//           If you need more info, please check out
//           <a href='/dashboard' className='link-primary fw-bolder'>
//             {' '}
//             Help Page
//           </a>
//           .
//         </div>
//       </div> */}

//       <div className='fv-row mb-10'>
//         <label className='form-label required'>Merket cap (USD)</label>

//         <Field name='businessName' className='form-control form-control-lg form-control-solid' />
//         <div className='text-danger mt-2'>
//           <ErrorMessage name='businessName' />
//         </div>
//       </div>

//       <div className='fv-row mb-10'>
//         <label className='d-flex align-items-center form-label'>
//           <span className='required'>Liquidity (USD)</span>
//         </label>

//         <Field
//           name='businessDescriptor'
//           className='form-control form-control-lg form-control-solid'
//         />
//         <div className='text-danger mt-2'>
//           <ErrorMessage name='businessDescriptor' />
//         </div>
//       </div>

//       <div className='fv-row mb-10'>
//         <label className='d-flex align-items-center form-label'>
//           <span className='required'>Burned SOL</span>
//         </label>

//         <Field
//           name='businessDescriptor'
//           className='form-control form-control-lg form-control-solid'
//         />
//         <div className='text-danger mt-2'>
//           <ErrorMessage name='businessDescriptor' />
//         </div>
//       </div>

//       <div className='fv-row mb-10'>
//         <label className='d-flex align-items-center form-label'>
//           <span className='required'>Supply</span>
//         </label>

//         <Field
//           name='Supply'
//           className='form-control form-control-lg form-control-solid'
//         />
//         <div className='text-danger mt-2'>
//           <ErrorMessage name='businessDescriptor' />
//         </div>
//       </div>


    

      {/* <div className='fv-row mb-10'>
        <label className='form-label required'>Burned SOL</label>

        <Field
          as='select'
          name='businessType'
          className='form-select form-select-lg form-select-solid'
        >
          <option></option>
          <option value='1'>S Corporation</option>
          <option value='1'>C Corporation</option>
          <option value='2'>Sole Proprietorship</option>
          <option value='3'>Non-profit</option>
          <option value='4'>Limited Liability</option>
          <option value='5'>General Partnership</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessType' />
        </div>
      </div> */}

      {/* <div className='fv-row mb-10'>
        <label className='form-label'>Business Description</label>

        <Field
          as='textarea'
          name='businessDescription'
          className='form-control form-control-lg form-control-solid'
          rows={3}
        ></Field>
      </div> */}

      {/* <div className='fv-row mb-0'>
        <label className='fs-6 fw-bold form-label required'>Contact Email</label>

        <Field name='businessEmail' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessEmail' />
        </div>
      </div> */}




//     </div>
//   )
// }

// export {Step3}
