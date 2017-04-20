import Noop from '@/components/noop'

export default {
  path: '/static',
  redirect: '/privacy',
  name: 'static',
  component: Noop,
  children: [
    {
      path: 'privacy-police',
      alias: ['/privacy-police'],
      name: 'privacy-police',
      component: Noop,
    },
    {
      path: 'terms-of-service',
      alias: ['/terms-of-service'],
      name: 'terms-of-service',
      component: Noop,
    },
  ],
}
