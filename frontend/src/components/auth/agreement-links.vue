<template lang='pug'>
  .auth-agreement-links
    router-link.link.uk-link-muted.uk-button-text(
      :to='{ name: "privacy-police" }') Privacy police

    span.divider.uk-link-muted |

    router-link.link.uk-link-muted.uk-button-text(
      :to='{ name: "terms-of-service" }') Terms of service
</template>

<style lang='scss'>
  .auth-agreement-links {
    text-align: center;
    font-size: 0.9em;

    > .link:hover {
      text-decoration: none;
    }

    > .divider {
      margin: 0 0.5rem;
    }
  }
</style>
