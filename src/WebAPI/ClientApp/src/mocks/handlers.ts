import { rest } from "msw"
import { Constants } from "../constants/constants"

export const handlers = [rest.post<any, any>(Constants.url, (req, res, ctx) => res(ctx.status(201), ctx.json(req.body)))];