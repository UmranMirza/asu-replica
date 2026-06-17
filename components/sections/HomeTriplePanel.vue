<template>
  <section class="triple-wrapper">
    <div class="container">
      <div class="triple-grid">
        <!-- Degree Search -->
        <div class="degree-panel">
          <h2>Find my degree program</h2>

          <p>I would like to take most or all classes</p>

          <div class="radio-group">
            <label>
              <input v-model="searchMode" type="radio" value="in-person" />
              In person
            </label>

            <label>
              <input v-model="searchMode" type="radio" value="online" />
              Online
            </label>
          </div>

          <label class="label"> Search by keyword </label>

          <input v-model="keywordSearch" type="text" placeholder="Enter keywords" />

          <div class="or">OR</div>

          <label class="label"> Search by interest area </label>

          <select v-model="interestArea">
            <option value="">Select one...</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
          </select>

          <h3>Degree type</h3>

          <div class="radio-group">
            <label>
              <input v-model="degreeType" type="radio" value="undergraduate" />
              Undergraduate
            </label>

            <label>
              <input v-model="degreeType" type="radio" value="graduate" />
              Graduate
            </label>
          </div>

          <div class="actions">
            <RdsButton class="submit" size="large" @click="handleSubmit"> Submit </RdsButton>

            <RdsButton class="reset-button" size="large" @click="handleReset"> Reset </RdsButton>
          </div>

          <a href="#" class="discover" @click.prevent="handleDiscover">
            Discover what's right for me
          </a>
        </div>

        <!-- Rankings Carousel -->
        <div class="ranking-panel" :style="{ background: slides[currentSlide]?.bg }">
          <div class="ranking-content">
            <h2>
              {{ slides[currentSlide]?.headline }}

              <span v-if="slides[currentSlide]?.number">
                {{ slides[currentSlide]?.number }}
              </span>
            </h2>

            <h3>
              {{ slides[currentSlide]?.text }}
            </h3>

            <p>
              {{ slides[currentSlide]?.footer }}
            </p>
          </div>

          <div class="ranking-footer">
            <div class="controls">
              <button class="control-btn" @click="prevSlide">‹</button>

              <button class="control-btn" @click="togglePlay">
                {{ isPlaying ? '❚❚' : '▶' }}
              </button>

              <button class="control-btn" @click="nextSlide">›</button>
            </div>

            <a href="#" @click.prevent="handleViewRankings"> View all rankings </a>
          </div>
        </div>

        <!-- Future Students -->
        <div class="future-panel">
          <h2>I am a future</h2>

          <div class="tabs">
            <button :class="{ active: futureTab === 'in-person' }" @click="futureTab = 'in-person'">
              In Person
            </button>

            <button :class="{ active: futureTab === 'online' }" @click="futureTab = 'online'">
              Online
            </button>
          </div>

          <div class="future-links">
            <a
              v-for="link in currentFutureLinks"
              :key="link"
              href="#"
              @click.prevent="handleFutureLink(link)"
            >
              {{ link }}
            </a>
          </div>

          <button class="spanish-btn" @click="handleSpanish">Aprender más en Español</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Slide {
  headline: string
  number: string
  text: string
  footer: string
  bg: string
}

const slides: Slide[] = [
  {
    headline: 'Top',
    number: '10',
    text: "in the U.S. for best online bachelor's programs",
    footer: 'U.S. News & World Report, 2026',
    bg: '#FFC627',
  },
  {
    headline: '#5',
    number: '',
    text: 'in the U.S. for undergraduate teaching',
    footer: 'among public universities',
    bg: '#FFC627',
  },
  {
    headline: '90%',
    number: '',
    text: 'Graduates employed shortly after graduation',
    footer: 'Career outcomes',
    bg: '#FFC627',
  },
]

const currentSlide = ref<number>(0)
const isPlaying = ref<boolean>(true)
const futureTab = ref<'in-person' | 'online'>('in-person')

// Form state
const searchMode = ref<'in-person' | 'online'>('in-person')
const keywordSearch = ref<string>('')
const interestArea = ref<string>('')
const degreeType = ref<'undergraduate' | 'graduate'>('undergraduate')

const inPersonLinks: string[] = [
  'First-year student',
  'Transfer student',
  'Honors student',
  'Graduate student',
  'International student',
  'Veteran student',
  'Non-degree student',
]

const onlineLinks: string[] = [
  'Online undergraduate',
  'Online graduate',
  'Certificates',
  'Continuing education',
]

const currentFutureLinks = computed<string[]>(() => {
  return futureTab.value === 'in-person' ? inPersonLinks : onlineLinks
})

let interval: ReturnType<typeof setInterval> | null = null

const nextSlide = (): void => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = (): void => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const startAutoPlay = (): void => {
  interval = setInterval(() => {
    nextSlide()
  }, 4000)
}

const togglePlay = (): void => {
  isPlaying.value = !isPlaying.value

  if (isPlaying.value) {
    startAutoPlay()
  } else if (interval) {
    clearInterval(interval)
    interval = null
  }
}

const handleSubmit = (): void => {
  const formData = {
    searchMode: searchMode.value,
    keyword: keywordSearch.value,
    interestArea: interestArea.value,
    degreeType: degreeType.value,
  }
  console.log('Form submitted:', formData)
  alert(`Searching for ${degreeType.value} degrees in ${searchMode.value} format`)
}

const handleReset = (): void => {
  searchMode.value = 'in-person'
  keywordSearch.value = ''
  interestArea.value = ''
  degreeType.value = 'undergraduate'
}

const handleDiscover = (): void => {
  console.log("Discover what's right for me clicked")
}

const handleViewRankings = (): void => {
  console.log('View all rankings clicked')
}

const handleFutureLink = (link: string): void => {
  console.log('Future link clicked:', link)
}

const handleSpanish = (): void => {
  console.log('Spanish button clicked')
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.triple-wrapper {
  background: #f3f3f3;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.triple-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  border: 2px solid #d0d0d0;
  background: white;
  overflow: hidden;
}

.degree-panel,
.ranking-panel,
.future-panel {
  min-height: 600px;
  padding: 2.5rem;
}

.degree-panel,
.ranking-panel {
  border-right: 2px solid #d0d0d0;
}

.degree-panel,
.future-panel {
  background: #f9f9f9;
}

.degree-panel h2 {
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0 0 1.5rem 0;
  color: #000;
}
.future-panel h2 {
  font-size: 2.25rem;
  font-weight: 900;
  margin: 0 0 1.5rem 0;
  color: #000;
}

.degree-panel p {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #333;
}

.label {
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  color: #000;
}

input[type='text'],
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
}

input[type='text']:focus,
select:focus {
  outline: none;
  border-color: #8c1d40;
}

.radio-group {
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
  align-items: center;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  margin: 0;
}

.radio-group input[type='radio'] {
  cursor: pointer;
  accent-color: #8c1d40;
}

.degree-panel h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem 0;
  color: #000;
}

.or {
  margin: 1.5rem 0;
  font-weight: 700;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.actions {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.submit {
  background: #8c1d40;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.8rem 1.8rem;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.submit:hover {
  background: #6b1630;
}

.actions a {
  color: #8c1d40;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
}

.actions a:hover {
  text-decoration: underline;
}

.discover {
  display: inline-block;
  margin-top: 1.5rem;
  color: #8c1d40;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
}

.discover:hover {
  text-decoration: underline;
}

.ranking-panel {
  background: #ffc627;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
}

.ranking-content {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ranking-content h2 {
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
}

.ranking-content span {
  display: block;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  margin: 0.5rem 0;
}

.ranking-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 1rem 0;
}

.ranking-content p {
  margin: 1rem 0 0 0;
  font-size: 0.9rem;
  font-weight: 600;
}

.ranking-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.controls {
  display: flex;
  gap: 0.8rem;
}

.control-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: white;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.2s;
}

.control-btn:hover {
  transform: scale(1.05);
}

.ranking-footer a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
}

.ranking-footer a:hover {
  text-decoration: underline;
}

.tabs {
  display: flex;
  gap: 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
}

.tabs button {
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.95rem;
  color: #333;
  transition: all 0.2s;
}

.tabs button:hover {
  color: #8c1d40;
}

.tabs button.active {
  color: #8c1d40;
  border-bottom-color: #8c1d40;
}

.future-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.future-links a {
  color: #8c1d40;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
}

.future-links a:hover {
  text-decoration: underline;
}

.spanish-btn {
  margin-top: 2rem;
  border: none;
  border-radius: 20px;
  background: #000;
  color: white;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.85rem;
  transition: background 0.2s;
}

.spanish-btn:hover {
  background: #333;
}

/* Responsive */
@media (max-width: 1200px) {
  .triple-grid {
    grid-template-columns: 1fr;
  }

  .degree-panel,
  .ranking-panel,
  .future-panel {
    border-right: none;
    border-bottom: 2px solid #d0d0d0;
  }

  .ranking-panel {
    min-height: 400px;
  }

  .ranking-content h2 {
    font-size: 2.5rem;
  }

  .ranking-content span {
    font-size: 4rem;
  }

  .ranking-content h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .triple-wrapper {
    padding: 2rem 0;
  }

  .degree-panel,
  .ranking-panel,
  .future-panel {
    min-height: auto;
    padding: 2rem 1.5rem;
  }

  .degree-panel h2,
  .future-panel h2,
  .ranking-content h2 {
    font-size: 1.5rem;
  }

  .ranking-content span {
    font-size: 3rem;
  }

  .ranking-content h3 {
    font-size: 1.1rem;
  }

  .tabs {
    gap: 0;
  }

  .tabs button {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .control-btn {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}
</style>
