import fs from "fs";

export const configAllDb = () => {
    fs.readdir('./Databases/', (err, files) => {
        if(err){
            throw new Error(err)
        }

        files.forEach((file) => {
            fs.readFile(`./Databases/${file}`, 'utf8', (err, data) => {
                if(err){
                    throw new Error(err)
                }

                const listTextFile = JSON.parse(data)
                console.log(listTextFile)
            })
        })
    })
}

