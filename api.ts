export type VisaType = 'h1b' | 'b1';

export interface VisaData{
    data: [string, string, Date][];
}

const ENDPOINT = "https://visawatchservice.azurewebsites.net";
export function getVisaDataAsync(visa_type: VisaType): Promise<VisaData> {
    const url = `${ENDPOINT}/v1/visa?visa_type=${visa_type}`;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.text();
    }
    ).then((data) => {
        console.log(data);
        var json = JSON.parse(data);
        var data = json.data;
        var result: [string, string, Date][] = [];
        for (var i = 0; i < data.length; i++) {
            var entry = data[i];
            var date = new Date(entry["item3"]);
            result.push([entry["item1"], entry["item2"], date]);
        }

        return { data: result };
    }
    ).catch((error) => {
        console.log(error);
        return null;
    }
    );
}