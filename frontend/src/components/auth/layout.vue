<template lang='pug'>
  .auth-layout
    header.uk-margin-small-bottom
      slot(name='header')

    main.uk-margin-small-bottom
      slot

    footer.uk-margin-small-bottom
      slot(name='footer')
</template>

<style lang='scss'>
  @import '~@/styles/vars';

  :root {
    --form-background-color: color(#fff a(90%));
  }

  .auth-layout {
    box-shadow: var(--main-box-shadow);
    max-width: 320px;
    background-color: var(--form-background-color);
  }
</style>
