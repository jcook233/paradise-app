
const API_ENDPOINT = "http://54.177.201.47:8002/WsEcl/submit/query/hthor/paradisevr/json?submit_type=json"; 

async function fetchData(params) {
    const response = await fetch(API_ENDPOINT+"", {
        method:"GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response;
    console.log(data)
    const rows = JSON.parse(data)["paradisevrResponse"]["Results"]["Result 1"]["Row"][0];

    return rows;
}

export default fetchData;