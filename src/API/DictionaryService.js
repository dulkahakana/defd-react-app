import axios from 'axios'

// попытка исправить проблему CORS
const postConfig = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    }
}
export default class DictionaryService {

    // словарь
    static async getAll() {
        const response = await axios.get('http://localhost:5000/dictionary/API')
        return response.data
    }

    // получениe названий секций (алфавит)
    static async getSectionsNameList() {
        const response = await axios.get('http://localhost:5000/dictionary/API/sectionslist')
        return response.data
    }

    // получение секции словаря
    static async getSection(sectionName) {
        const response = await axios.get(`http://localhost:5000/dictionary/API/${sectionName}`)
        return response.data
    }

    // TODO и снова CORS ошибка, при использовании npm start
    // добавление нового слова
    static async postWord(word) {
        await axios.post('http://localhost:5000/dictionary/API/addword', word, postConfig)
    }
    // ? запрос на удаление слова

    // ? запрос на изменение слова

}