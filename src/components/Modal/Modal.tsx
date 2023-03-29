import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import { Modal, styled, TextField, Button } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify'
import { isMobile } from '../../utils'

interface ModalProps {
  open: boolean
  closeModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContainer = styled('div')(() => ({
  backgroundColor: '#fefefe',
  margin: '80px auto',
  padding: 20,
  border: '3px solid #ffca3e',
  borderRadius: 20,
  width: `${isMobile() ? '300px' : '500px'}`,
}))
const ModalTitle = styled('div')(() => ({
  color: '#ffca3e',
  fontSize: `${isMobile() ? '30px' : '40px'}`,
  margin: 10,
}))
const ModalSubtitle = styled('div')(() => ({
  color: '#999999',
  fontSize: 12,
  margin: 10,
}))
const FormContainer = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
}))
const FormInput = styled(TextField)(() => ({
  margin: 10,
}))
const FormButton = styled(Button)(() => ({
  margin: 10,
  backgroundColor: '#ffca3e',
}))

export const ModalPopup: FC<ModalProps> = ({ open, closeModal }) => {
  const [name, setName] = useState('')
  const [tell, setTell] = useState('')

  const typingName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }, [])

  const typingTell = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTell(event.currentTarget.value)
  }, [])

  const cancel = useCallback(() => {
    closeModal(false)
  }, [closeModal])

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
            if (res.status === 200) {
              toast.success('Ваш запит відправлено', { theme: 'colored' })
              closeModal(false)
            } else {
              toast.error('Помилка! Спробуйте зателефонувати нам.', { theme: 'colored' })
            }
          })
      }
    },
    [closeModal, name, tell],
  )

  return (
    <Modal open={open} onClose={cancel}>
      <ModalContainer>
        <ModalTitle>Зворотній дзвінок</ModalTitle>
        <ModalSubtitle>Заповнюй форму та наш менеджер зателефонує тобі в найкоротший час</ModalSubtitle>
        <FormContainer onSubmit={sendForm}>
          <FormInput type="text" value={name} label="Введіть Ваше ім'я" onChange={typingName} />
          <FormInput type="number" value={tell} label="099 000 00 00" onChange={typingTell} />
          <FormButton variant="contained" type="submit">
            Submit
          </FormButton>
        </FormContainer>
      </ModalContainer>
    </Modal>
  )
}
