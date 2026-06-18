<template>
  <ClientOnly>
    <FooterStandard
      :tertiary-items="tertiaryItems"
      :display-privacy-settings="true"
      innovation-image-alt="Repeatedly ranked #1 on 30+ lists in the last 3 years"
      footer-label="Arizona State University"
    >
      <!-- Top Black Section -->
      <template #primary-section>
        <div class="footer-top">
          <!-- Clickable ASU Logo -->
          <a
            href="https://www.asu.edu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Arizona State University"
            class="logo-link"
          >
            <img
              src="https://www.asu.edu/profiles/contrib/webspark/modules/asu_footer/img/ASU-EndorsedLogo.png"
              alt="Arizona State University"
              class="asu-logo"
            />
          </a>

          <!-- Social Icons -->
          <div class="social-icons">
            <a
              href="https://www.facebook.com/arizonastateuniversity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/arizonastateuniversity/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>

            <a
              href="https://www.youtube.com/user/arizstateuniversity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i class="fab fa-youtube" />
            </a>

            <a
              href="https://www.linkedin.com/school/arizona-state-university/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </template>

      <!-- Yellow Section -->
      <template #secondary-menu>
        <nav
          class="nav grid-flex-menu order-2 order-lg-1 mb-space-sm mb-lg-0"
          aria-label="Footer navigation"
        >
          <a
            v-for="item in secondaryItems"
            :key="item.text"
            :href="item.uri"
            :target="formatTarget(item.target)"
            class="nav-link text-dark-3 menu-item fw-bold py-space-xxs py-lg-0"
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
:deep(.footer-top) {
  background: #1e1e1e;
  color: white;
  padding: 40px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
:deep(.logo-link) {
  display: inline-flex;
  transition: opacity 0.2s ease;
}

:deep(.logo-link:hover) {
  opacity: 0.85;
}

:deep(.asu-logo) {
  height: 70px;
  display: block;
}

/* Social Icons */
:deep(.social-icons) {
  display: flex;
  gap: 16px;
}

:deep(.social-icons a) {
  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  text-decoration: none;

  /* border-radius: 50%; */

  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

:deep(.social-icons a:hover) {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

:deep(.social-icons i) {
  font-size: 2rem;
}

/* Mobile */
@media (max-width: 768px) {
  :deep(.footer-top) {
    flex-direction: column;
    gap: 24px;
    text-align: center;
    padding: 32px 24px;
  }

  :deep(.asu-logo) {
    height: 50px;
  }

  :deep(.social-icons) {
    justify-content: center;
  }

  :deep(.social-icons a) {
    width: 46px;
    height: 46px;
  }

  :deep(.social-icons i) {
    font-size: 1.75rem;
  }
}

/* Yellow Section Layout */
@media (min-width: 992px) {
  :deep(.justify-content-lg-end) {
    justify-content: space-between !important;
  }
}

/* Secondary Links */
:deep(.menu-item:hover) {
  text-decoration: underline;
}
</style>
