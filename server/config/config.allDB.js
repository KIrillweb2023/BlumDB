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

                fs.stat(`./Databases/${file}`, (err, status) => {
                    if(err) {
                        throw new Error("Не удалось посчитать размер файла:", err)
                    }
                    
                    console.log(`Size file in bytes:`, status.size)
                })

                const listTextFile = JSON.parse(data)
               
                console.log(listTextFile)
            })
        })
    })
}

