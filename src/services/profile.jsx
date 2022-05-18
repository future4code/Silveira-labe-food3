import axios from 'axios'
import { BASE_URL } from '../constants/urls'


export const updateProfile = (body, clear) => {
    const url = `${BASE_URL}/profile`;
    const headers = {
        headers: {
            auth: localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
        }
    axios.put(url, body, headers)
        .then((response) => {
            alert("Perfil atualizado com sucesso")
            clear()
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}


export const updateAddress = (body, clear) => {
    const url = `${BASE_URL}/address`;
    const headers = {
        headers: {
            auth: localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    }
    axios.put(url, body, headers)
        .then((response) => {
            alert('Perfil atualizado com sucesso!')
            localStorage.setItem('token', response.data.token)
            clear()
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}
