<template>
  <HeroVideoApollo
    v-bind="heroProps"
    @cta-click="handleCtaClick"
    @toggle-video="handleToggleVideo"
  />
</template>

<script setup lang="ts">
import { HeroVideoApollo } from '@rds-vue-ui/hero-video-apollo'

const heroProps = {
  fullWidth: true,

  bgVideoSource:
    'https://cms.asuonline.asu.edu/sites/g/files/litvpz1971/files/2025-06/ASUOHomepageVideo-TEST.mp4',

  autoplay: true,

  mobileImageSource:
    'https://cms.asuonline.asu.edu/sites/default/files/ASU%20Online%20Rankings%402x.jpg',

  mobileImageAltText: 'ASU students collaborating',

  videoAlt: 'ASU hero video',

  showText: true,
  showTextOnMobile: true,

  text: 'ASU is part of the Association of American Universities, a highly selective group of top research institutions that advocates for innovation, education and academic excellence.',

  textFontWeight: 'normal',

  textSize: 'large',

  textVariant: 'white',

  textMultiline: true,

  title: 'Study at one of the most prestigious research institutions in the nation',

  titleLevel: 'h1',

  titleSize: 'medium',

  titleVariant: 'white',

  displayCta: true,

  ctaText: 'Find out more',

  ctaVariant: 'secondary',

  ctaSize: 'medium',

  ctaLink: '#',

  displayGradient: true,

  gradientOpacity: 0.55,

  gradientColor: '#000000',

  trackAnalytics: false,
} as const

const handleCtaClick = () => {
  console.log('Hero CTA clicked')
}

const handleToggleVideo = () => {
  console.log('Hero video toggled')
}
</script>
