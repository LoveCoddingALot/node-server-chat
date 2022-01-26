import jwt from "jsonwebtoken";

export default (token: any) => {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECKRET_KEY || "", 
            (err: any, decodedToken: any) => {
                if(err || !decodedToken) return reject(err);
                resolve(decodedToken);
            })
        }
    )
}