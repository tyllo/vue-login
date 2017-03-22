const assets = {
  styles: [],
  scripts: []
}

export default async function (ctx, next) {
  // TODO: create assets manager
  ctx.state.assets = assets
  await next()
}
