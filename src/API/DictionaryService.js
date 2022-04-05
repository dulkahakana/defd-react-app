import axios from 'axios'

export default class DictionaryService {

    // запрос на весь словарь
    static async getAll() {
        const response = await axios.get('http://localhost:5000/dictionary')
        // console.log(response.data)
        return response.data
    }
    // запрос на добавление нового словарь

    // запрос на удаление слова

    // запрос на изменение слова

}