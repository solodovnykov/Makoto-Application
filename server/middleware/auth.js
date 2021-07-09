import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decoratedData;

    if(token && isCustomAuth) {
      decoratedData = jwt.verify(token, 'test');

      req.userId = decoratedData?.id;

    } else {
      decoratedData = jwt.decode(token);

      req.userId = decoratedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
}

export default auth;