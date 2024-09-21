import { map } from 'lodash'
import TEMPLATE from '../constants/Templates/TEMPLATE-01.json'

const useGetTemplateEngine = () => {
    const getElem = (type: unknown) => {
        switch(type){
            case 'row':
                return 'This is a Row'
                break;
            case 'column':
                return 'This is a Column'
                break;
            default:
                return 'sth sth'
                break;
        }
    }

    map(TEMPLATE, temp => {
        console.log(JSON.stringify(temp))
    })
}

export default useGetTemplateEngine