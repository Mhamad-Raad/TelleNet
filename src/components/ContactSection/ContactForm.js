'use client';

import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { MdDoneOutline } from 'react-icons/md';

import './style.css';

const ContactForm = () => {
  const [validEmail, setValidEmail] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validText, setValidateText] = useState(true);

  const [loading, setLoading] = useState(false);

  const [submitError, setSubmitError] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const validateEmail = () => {
    if (form.current === null) return;

    const email = form.current.user_email.value;
    const regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const validateName = () => {
    if (form.current === null) return;

    const name = form.current.user_name.value;
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (regex.test(name)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const validateText = () => {
    if (form.current === null) return;

    const text = form.current.user_message.value;

    if (text.length > 0) {
      setValidateText(true);
    } else {
      setValidateText(false);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (form.current === null) return;

    const email = form.current.user_email.value;
    const name = form.current.user_name.value;
    const text = form.current.user_message.value;

    if (text.length === 0 || email.length === 0 || name.length === 0) {
      setShowModal(true);

      validateEmail();
      validateName();
      validateText();

      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_qz4ugws',
        'template_mi83gfy',
        form.current,
        'user_HuKpwTBqfsVm40phvlXmn'
      )
      .then(
        (_) => {
          form.current?.reset();
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          setSubmitError(true);
        }
      );
  };

  const error = !validEmail || !validName || !validText;
  return (
    <motion.form
      ref={form}
      autoComplete='off'
      className={`phone:w-full laptop:w-1/2 flex flex-col items-center justify-center border rounded-xl border-primary bg-[#0b1825] p-[20px] backdrop-opacity-10 max-w-[750px] ${
        validText ? '' : 'error'
      }`}
      onSubmit={formSubmissionHandler}
    >
      <h3 className='text-textColor font-bold mb-[20px] text-[24px]'>
        {`Let's Connect`}
      </h3>
      {error === true && (
        <div className='w-full mb-[20px]'>
          {!validEmail && (
            <motion.p
              className='text-[red] text-[14px] font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              * Please enter a valid email
            </motion.p>
          )}
          {!validName && (
            <motion.p
              className='text-[red] text-[14px] font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              * Please enter a Name email (no numbers, special characters)
            </motion.p>
          )}
          {!validText && (
            <motion.p
              className='text-[red] text-[14px] font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              * Please enter a Message,( more than 5 characters)
            </motion.p>
          )}
        </div>
      )}
      <input
        type='text'
        placeholder='Full Name'
        name='user_name'
        onBlur={validateName}
        className={`w-[80%] h-[40px] border-b border-primary p-[3px] mb-[25px] text-textColor text-[16px] font-bold bg-[transparent] transition-all duration-500 focus:outline-none focus:w-full ${
          validName ? '' : 'border-[red]'
        }`}
      />
      <input
        type='email'
        placeholder='Email'
        name='user_email'
        onBlur={validateEmail}
        className={`w-[80%] h-[40px] border-b border-primary p-[3px] mb-[25px] text-textColor text-[16px] font-bold bg-[transparent] transition-all duration-500 focus:outline-none focus:w-full ${
          validEmail ? '' : 'border-[red]'
        }`}
      />
      <textarea
        placeholder={`What's up?`}
        name='user_message'
        onBlur={validateText}
        className={`w-[80%] h-[40px] border-b border-primary p-[3px] mb-[25px] text-textColor text-[16px] font-bold bg-[transparent] transition-all duration-500 focus:outline-none focus:w-full resize-none ${
          validText ? '' : 'border-[red]'
        }`}
      />
      {loading && (
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!submitted && !loading && (
        <button
          type='submit'
          value='Send'
          className={`submit  ${validText ? '' : 'border-[red]'}`}
        >
          Send
        </button>
      )}
      {submitted && (
        <button
          type='button'
          value='Send'
          disabled={true}
          className='flex items-center gap-2'
        >
          Sent
          <MdDoneOutline />
        </button>
      )}

      {submitError && (
        <button type='button' value='Send' disabled={true}>
          Oops!!! Please try again later!
        </button>
      )}
    </motion.form>
  );
};

export default ContactForm;
