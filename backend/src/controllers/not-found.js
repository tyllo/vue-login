export default async function (ctx, next) {
  ctx.status = 404

  await ctx.render('not-found', {
    title: 'Not Found',
    message: `Url ${ctx.originalUrl} not exist`
  })

  await next()
}
