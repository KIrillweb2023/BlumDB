import jwt from "jsonwebtoken";

export const Auth = (req, res) => {
    try{
        const {username, userPassword} = req.body;

        if(!username && !userPassword){
            return res.status(400).json("Вы не заполнили все поля!");
        }

        if(username === process.env.APP_USER && userPassword === process.env.APP_PASSWORD){
            const accessToken = jwt.sign({username}, process.env.JWT_ACCESS_SECRET, {
                expiresIn: "15m"
            });

            res.status(200).json({accessToken})
        }
    } catch(err) {
        console.log("Error authofication!", err)
    }
}