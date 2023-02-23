import Router, { RouterContext } from '@koa/router'
interface ReleaseInfo {
    hash: string
    apiServer: string
    timeStarted: string
}

export const getDefaultRouter = (releaseInfo?: ReleaseInfo): Router => {
    const DefaultRoutes = new Router()

    DefaultRoutes.get('/ping', async (ctx: RouterContext, next: () => Promise<any>) => {
        ctx.body = 'pong'
        return next()
    })

    DefaultRoutes.get('/version', async (ctx: RouterContext, next: () => Promise<any>) => {
        ctx.body = releaseInfo || {}
        return next()
    })

    return DefaultRoutes
}
