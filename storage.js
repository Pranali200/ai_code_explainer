import fs from "fs"

const FILE = "explanations.json";

export function saveExplanation(code,explanation){
    let data = [];

    if(fs.existsSync(FILE)){
        data = JSON.parse(fs.readFileSync(FILE));
    }

    data.push({code,explanation,date:new Date()});

    fs.writeFileSync(FILE, JSON.stringify(data, null,2))
}


