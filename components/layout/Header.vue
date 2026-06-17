<template>
  <ClientOnly>
    <HeaderStandard
      :nav-items="items"
      home-title="Arizona State University"
      :display-rfi-cta="false"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { HeaderStandard } from '@rds-vue-ui/header-standard'

const items = [
  {
    isActive: false,
    htmlLink: {
      text: 'News and Events',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'Academics',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'Admission',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'Research',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'Athletics',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'Alumni',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'Giving',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'President',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: 'About ASU',
      uri: '#',
      target: 'SELF',
    },
    children: [],
  },
]
</script>
