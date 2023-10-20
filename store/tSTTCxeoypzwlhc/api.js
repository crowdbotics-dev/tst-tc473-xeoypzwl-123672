import axios from "axios"
import {
  TST_TC473_XEOYPZWLHC_USERNAME,
  TST_TC473_XEOYPZWLHC_PASSWORD
} from "react-native-dotenv"
const tSTTCxeoypzwlhc = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_XEOYPZWLHC_USERNAME,
    password: TST_TC473_XEOYPZWLHC_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473xeoypzwlhc_get_getUserDetails_read(payload) {
  return tSTTCxeoypzwlhc.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473xeoypzwlhc_get_getUserDetails_read }
