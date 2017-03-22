export default async function (ctx, next) {
  await ctx.render('not-found', {
    title: 'Not Found',
    message: `Url ${ctx.originalUrl} not exist`
  })

  await next()
}
