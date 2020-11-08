import axios from "axios";
import moment from "moment";

export const getData = ({ time, number }) => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })

   // https://financialmodelingprep.com/api/v3/historical-chart/1min/BTCUSD?apikey=deme
    /*
    [ {
      "date" : "2020-11-08 13:45:00",
      "open" : 15533.268000000000,
      "low" : 15497.087000000000,
      "high" : 15533.268000000000,
      "close" : 15497.087000000000,
      "volume" : 30837102592
    }*/

    const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=${process.env.REACT_APP_API_KEY}`)

    const labels = [];
    const data = [];
    for (let i = 0; i < response.data.length; i++) {
      data.unshift(response.data[i].close)
      labels.unshift(moment(response.data[i].date).format("LT")) // only getting close and date

      if (i === (number - 1)) {
        break;
      }
    }

    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
        data,
        labels
      }
    })
  } catch (e) {
    dispatch({
      type: "REJECTED_BITCOIN",
    })
  }
}
