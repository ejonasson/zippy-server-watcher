import checkSite from './libs/checkSite'
import config from './config/config'

export function main(event, context, callback) {
    for (let address in config.ips) {
        let response = checkSite.checkAddress(address).then(
            (successResponse) => {
                console.log(successResponse.data)
            }
        )
    }
}
