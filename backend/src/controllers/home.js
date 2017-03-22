export default async function (ctx, next) {
  await ctx.render('index', {
    title: 'Home',
    content: 'hello world!'
  })

  // await next()
}
