import { Request, Response } from "express"

export function callback(controller: Function) {
    return (req: Request, res: Response) => {
        controller(req)
            .then((httpRes: any) => {
                res.type('json');
                res.status(httpRes.statusCode).send({
                    success: (httpRes.statusCode === 200 || httpRes.statusCode === 201) ? true : false,
                    timestamp: new Date(),
                    message: httpRes.message,
                    data: httpRes.data,
                    errorData: httpRes.error
                });
            })
            .catch((error: any) => res.status(403).send({ message: 'An unknown error occurred.', error: error }));
    }
}