import axios from 'axios'


const postConfig = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    }
}
export default class DictionaryService {

    // ? запрос на весь словарь
    static async getAll() {
        const response = await axios.get('http://localhost:5000/dictionary/API')
        // console.log(response.data)
        return response.data
    }

    // ? зарпос на получениe названий секций (алфавит)
    static async getSectionsNameList() {
        const response = await axios.get('http://localhost:5000/dictionary/API/sectionslist')
        return response.data
    }

    // ? запрос на получение секции словаря
    static async getSection(sectionName) {
        const response = await axios.get(`http://localhost:5000/dictionary/API/${sectionName}`)
        return response.data
    }

    // TODO и снова CORS ошибка!
    // ? запрос на добавление нового словарь
    static async postWord(word) {
        const response = await axios.post('http://localhost:5000/dictionary/API/addword', word)
        console.log(response)
    }
    // ? запрос на удаление слова

    // ? запрос на изменение слова

}