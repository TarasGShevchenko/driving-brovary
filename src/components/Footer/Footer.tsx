import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import { styled, TextField } from '@mui/material'
import footerImage from '../../assets/footer.webp'
import { isMobile } from '../../utils'
import axios from 'axios'
import { toast } from 'react-toastify'

const FooterContainer = styled('footer')(() => ({
  width: '100%',
  marginTop: 100,
}))
const FooterForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: 400,
  backgroundImage: `url(${footerImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
}))
const FooterOverlay = styled('div')(() => ({
  position: 'absolute',
  backgroundColor: '#000000',
  opacity: 0.5,
  transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
  width: '100%',
  height: '100%',
}))
const FooterFormContent = styled('div')(() => ({
  maxWidth: 850,
  zIndex: 99,
  padding: 20,
}))
const FooterFormContentTitle = styled('h2')(() => ({
  fontSize: 48,
  fontWeight: 600,
  color: '#FCFCFC',
}))
const FormInput = styled(TextField)(() => ({
  justifyContent: 'center',
  width: `${isMobile() ? '300px' : '400px'}`,
  height: 40,
  padding: '6px 20px',
  border: 'none',
  background: 'transparent',
  color: '#FCFCFC',
  '&:focus-visible': {
    outline: 'none',
  },
  '& .MuiOutlinedInput-root': {
    fontSize: 15,
    color: '#ffffff',
    '& fieldset': {
      border: 'none',
    },
  },
}))

const Form = styled('form')(() => ({
  padding: 20,
}))
const FormInputWrap = styled('div')(() => ({
  transform: 'skew(-20deg)',
  backgroundColor: 'rgba(246, 236, 0, 0)',
  color: '#ffca3e',
  fontSize: 14,
  textTransform: 'capitalize',
  border: '3px solid #fcfcfc',
  borderRadius: 10,
  margin: 10,
}))
const FormButton = styled('button')(() => ({
  width: 200,
  height: 40,
  padding: '6px 20px',
  transform: 'skew(-20deg)',
  backgroundColor: 'rgba(246, 236, 0, 0)',
  color: '#ffca3e',
  fontSize: 14,
  textTransform: 'capitalize',
  border: '3px solid #ffca3e',
  borderRadius: 10,
  margin: 10,
  cursor: 'pointer',
}))
const FooterBottom = styled('div')(() => ({
  background: '#000000',
  color: '#FCFCFC',
  textAlign: 'center',
}))

export const Footer: FC = () => {
  const [name, setName] = useState('')
  const [tell, setTell] = useState('')

  const typingName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }, [])

  const typingTell = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTell(event.currentTarget.value)
  }, [])

  const sendForm = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const token = process.env.REACT_APP_TELEGRAM_TOKEN
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID
      const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

      if (!name) {
        toast.error("Напишіть Ваше ім'я", { theme: 'colored' })
      }
      if (!tell) {
        toast.error('Введіть Ваш телефон', { theme: 'colored' })
      }
      if (tell.length < 10) {
        toast.error('Номер телефону вказано некоректно', { theme: 'colored' })
      }

      const mail = `
      <b>Новий запит!</b>\n
      <b>Автошкола Бровари</b>\n
      <b>Ім'я: </b> ${name}\n
      <b>Телефон: </b> ${tell}
    `
      if (!!name && !!tell && tell.length >= 10) {
        axios
          .post(urlApi, {
            chat_id: chatId,
            parse_mode: 'html',
            text: mail,
          })
          .then((res) => {
            res.status === 200
              ? toast.success('Ваш запит відправлено', { theme: 'colored' })
              : toast.error('Помилка! Спробуйте зателефонувати нам.', { theme: 'colored' })
          })
      }
    },
    [name, tell],
  )

  return (
    <FooterContainer>
      <FooterForm>
        <FooterOverlay />
        <FooterFormContent>
          <FooterFormContentTitle>
            Заповнюй форму і ми зв&apos;яжемось з тобою в найкоротші терміни!
          </FooterFormContentTitle>
        </FooterFormContent>
        <Form onSubmit={sendForm}>
          <FormInputWrap>
            <FormInput type="text" placeholder={"Введіть Ваше ім'я"} value={name} onChange={typingName} />
          </FormInputWrap>
          <FormInputWrap>
            <FormInput
              type="number"
              placeholder={'Введіть Ваш телефон (099 000 00 00)'}
              value={tell}
              onChange={typingTell}
            />
          </FormInputWrap>
          <FormButton type={'submit'}>Надіслати</FormButton>
        </Form>
      </FooterForm>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d782.285734184864!2d30.78028433566721!3d50.516512748171124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d97773ce0d83%3A0x4f37edb134e1631f!2z0LLRg9C70LjRhtGPINCSJ9GP0YfQtdGB0LvQsNCy0LAg0KfQvtGA0L3QvtCy0L7Qu9CwLCAyLCDQkdGA0L7QstCw0YDQuCwg0JrQuNGX0LLRgdGM0LrQsCDQvtCx0LsuLCAwNzQwMg!5e0!3m2!1suk!2sua!4v1680552966266!5m2!1suk!2sua"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={'footerMap'}
      ></iframe>
      <FooterBottom>&#169;Driving 2023</FooterBottom>
    </FooterContainer>
  )
}
