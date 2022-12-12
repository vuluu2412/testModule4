import jwt from 'jsonwebtoken'

export const SECRET = 'Secret';
export const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'You are anonymous!'
            })
        } else {
            jwt.verify(accessToken, SECRET, (err, data) => {
                if (err) {
                    res.status(401).json({
                        message: 'You are anonymous!'
                    })
                } else {
                    req.decode = data;
                    next()
                }
            })
        }
    } else {
        res.status(401).json({
            message: 'You are anonymous!'
        })
    }
}