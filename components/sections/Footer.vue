<template>
  <footer class="footer">
    <!-- Top Dark Section -->
    <div class="footer-top">
      <div class="footer-container top-content">
        <div class="logo-section">
          <div class="asu-footer-brand">
            <span class="asu-brand">ASU</span>

            <div class="asu-brand-text">
              <span>Arizona State</span>
              <span>University</span>
            </div>
          </div>
        </div>

        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f" />
          </a>

          <a href="#" aria-label="Instagram">
            <i class="fa-brands fa-instagram" />
          </a>

          <a href="#" aria-label="YouTube">
            <i class="fa-brands fa-youtube" />
          </a>

          <a href="#" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>

    <!-- Gold Section -->
    <div class="footer-middle">
      <div class="footer-container middle-content">
        <div class="quick-links">
          <a href="#">Maps and Locations</a>
          <a href="#">Jobs</a>
          <a href="#">Directory</a>
          <a href="#">Contact ASU</a>
          <a href="#">My ASU</a>
        </div>

        <div class="ranking">
          <div>
            <div class="ranking-title">Repeatedly ranked</div>

            <div class="ranking-subtitle">30+ lists in the last 3 years</div>
          </div>

          <div class="ranking-badge">#1</div>
        </div>
      </div>
    </div>

    <!-- Bottom Gray Section -->
    <div class="footer-bottom">
      <div class="footer-container legal-links">
        <a href="#">Copyright and Trademark</a>
        <a href="#">Accessibility</a>
        <a href="#">Privacy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Emergency</a>
        <a href="#">Manage my privacy settings</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 0;
}

/* Shared */
.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ==========================
   TOP BLACK
========================== */

.footer-top {
  background: #1d1d1d;
}

.top-content {
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  height: 52px;
}

.social-links {
  display: flex;
  gap: 28px;
}

.social-links a {
  color: white;

  font-size: 32px;
  text-decoration: none;

  transition: opacity 0.2s ease;
}

.social-links a:hover {
  opacity: 0.7;
}

/* ==========================
   GOLD BAR
========================== */

.footer-middle {
  background: #ffc627;
}

.middle-content {
  min-height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 40px;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
}

.quick-links a {
  color: #191919;

  font-size: 18px;
  font-weight: 700;

  text-decoration: none;
}

.quick-links a:hover {
  text-decoration: underline;
}

.ranking {
  display: flex;
  align-items: center;
  gap: 18px;

  flex-shrink: 0;
}

.ranking-title {
  font-size: 22px;
  font-weight: 700;

  color: #000;
}

.ranking-subtitle {
  font-size: 16px;
  font-weight: 700;

  color: #000;
}

.ranking-badge {
  width: 54px;
  height: 54px;

  border-radius: 50%;

  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
  font-weight: 700;

  color: #000;
}

.logo-section {
  display: flex;
  align-items: center;
}

.asu-footer-brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.asu-brand {
  font-size: 64px;
  font-weight: 800;
  line-height: 0.9;
  color: white;
  letter-spacing: -3px;
}

.asu-brand-text {
  display: flex;
  flex-direction: column;

  color: white;

  font-size: 28px;
  font-weight: 700;
  line-height: 1;
}

.asu-brand-text span:last-child {
  margin-top: 2px;
}

/* ==========================
   BOTTOM GRAY
========================== */

.footer-bottom {
  background: #e5e5e5;
}

.legal-links {
  min-height: 58px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 32px;
}

.legal-links a {
  color: #191919;

  font-size: 16px;

  text-decoration: none;
}

.legal-links a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.social-links a {
  color: #d4d4d4;

  font-size: 32px;
  text-decoration: none;

  transition: all 0.2s ease;
}

.social-links a:hover {
  color: #ffffff;
  transform: translateY(-2px);
}
/* ==========================
   MOBILE
========================== */

@media (max-width: 992px) {
  .top-content,
  .middle-content {
    flex-direction: column;

    justify-content: center;

    padding: 28px 0;

    height: auto;
  }

  .quick-links,
  .legal-links {
    justify-content: center;
  }

  .ranking {
    margin-top: 20px;
  }

  .social-links {
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 20px;
  }

  .top-content,
  .middle-content {
    gap: 16px;
  }

  .social-links {
    gap: 18px;
  }

  .quick-links,
  .legal-links {
    gap: 18px;
    justify-content: center;
  }

  .quick-links a,
  .legal-links a {
    font-size: 14px;
  }

  .ranking-title {
    font-size: 18px;
  }

  .ranking-subtitle {
    font-size: 14px;
  }

  .ranking-badge {
    width: 46px;
    height: 46px;
    font-size: 30px;
  }

  .asu-brand {
    font-size: 48px;
  }

  .asu-brand-text {
    font-size: 20px;
  }

  .social-links a {
    font-size: 24px;
  }
}
</style>
