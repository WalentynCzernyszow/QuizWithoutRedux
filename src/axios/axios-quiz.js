import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-d62e1-default-rtdb.europe-west1.firebasedatabase.app/'
})