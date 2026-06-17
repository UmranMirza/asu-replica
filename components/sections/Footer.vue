<template>
  <ClientOnly>
    <FooterStandard
      :tertiary-items="tertiaryItems"
      innovation-image-alt="Repeatedly ranked #1 on 30+ lists in the last 3 years"
    >
      <template #secondary-menu>
        <nav class="nav grid-flex-menu" aria-label="Footer navigation">
          <a
            v-for="item in secondaryItems"
            :key="item.text"
            :href="item.uri"
            :target="formatTarget(item.target)"
            class="nav-link text-dark-3 menu-item fw-bold"
            rel="noopener noreferrer"
          >
            {{ item.text }}
          </a>
        </nav>
      </template>
    </FooterStandard>
  </ClientOnly>
</template>

<script setup lang="ts">
import { FooterStandard } from '@rds-vue-ui/footer-standard'

const secondaryItems = [
  {
    text: 'Maps and Locations',
    uri: 'https://www.asu.edu/about/locations-maps',
    target: 'BLNK',
  },
  {
    text: 'Jobs',
    uri: 'https://www.asu.edu/asujobs',
    target: 'BLNK',
  },
  {
    text: 'Directory',
    uri: 'https://isearch.asu.edu/asu-people/',
    target: 'BLNK',
  },
  {
    text: 'Contact ASU',
    uri: 'https://www.asu.edu/about/contact',
    target: 'BLNK',
  },
  {
    text: 'My ASU',
    uri: 'https://my.asu.edu/',
    target: 'BLNK',
  },
]

const tertiaryItems = [
  {
    text: 'Copyright and Trademark',
    uri: 'https://www.asu.edu/about/copyright-trademark',
    target: 'BLNK',
  },
  {
    text: 'Accessibility',
    uri: 'https://accessibility.asu.edu/report',
    target: 'BLNK',
  },
  {
    text: 'Privacy',
    uri: 'https://www.asu.edu/privacy/',
    target: 'BLNK',
  },
  {
    text: 'Terms of Use',
    uri: 'https://www.asu.edu/tou/',
    target: 'BLNK',
  },
  {
    text: 'Emergency',
    uri: 'https://www.asu.edu/emergency/',
    target: 'BLNK',
  },
]

const formatTarget = (target: string) => {
  return target === 'SELF' ? '_self' : '_blank'
}
</script>

<style scoped>
nav.grid-flex-menu {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: column;
  justify-items: start;
  width: 100%;
}

@media (min-width: 992px) {
  nav.grid-flex-menu {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    gap: 1.5rem;
  }

  a.menu-item:hover {
    text-decoration: underline;
  }
}
</style>
