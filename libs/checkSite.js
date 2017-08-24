import axios from 'axios'
import config from '../config/config'

export default {
    checkAddress (ipAddress) {
        return axios.get(ipAddress).then(
            (successResponse) => {
                return successResponse
            },
            (errorResponse) => {
                return errorResponse
            }
        )
    }
}
