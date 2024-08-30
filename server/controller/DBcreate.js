import fs from "fs";

export const DBcreate = async (req, res) => {
    try {
        const {nameDB, fraimingDB, accessDB, TablesDB, ActivityDB} = req.body;
        
        const informationDB = {
            nameDB: nameDB, 
            fraimingDB: fraimingDB, 
            accessDB: accessDB, 
            TablesDB: TablesDB, 
            ActivityDB: ActivityDB
        }

        const data = JSON.stringify(informationDB)
        const readJSONdb = await fs.writeFile(`./Databases/${nameDB}.json`, data, "utf8", (err) => {
            if(err) throw new Error(err)
          
            fs.readFile(`./Databases/users.json`, "utf-8", (err, data) => {
                if(err) throw new Error(err)
                
                const resultObj = JSON.parse(data)
                res.json(resultObj)
            })
        })
    } catch(err) {
        console.log(err)
    }
}