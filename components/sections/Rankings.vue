<template>
  <section class="rankings section">
    <div class="container">
      <div class="section-header">
        <h2>ASU by the numbers</h2>
        <p>Recognized nationally and globally for excellence.</p>
      </div>

      <div class="rankings-grid">
        <div
          v-for="item in rankings"
          :key="item.title"
          class="ranking-card"
        >
          <h3>{{ item.number }}</h3>

          <h4>{{ item.title }}</h4>

          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Ranking {
  number: string
  title: string
  description: string
}

const rankings: Ranking[] = [
  {
    number: '#1',
    title: 'Innovation',
    description:
      'Recognized for innovation among universities.',
  },
  {
    number: 'Top 10',
    title: 'Research Institution',
    description:
      'Leading research and academic excellence.',
  },
  {
    number: '#1',
    title: 'Online Programs',
    description:
      'Highly ranked online education programs.',
  },
  {
    number: '90%',
    title: 'Employability',
    description:
      'Graduates succeed in their careers.',
  },
]
</script>

<style scoped>
.rankings {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.rankings-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.ranking-card {
  padding: 2rem;
  text-align: center;

  border-radius: 12px;
  background: #f8f8f8;

  transition: transform 0.2s ease;
}

.ranking-card:hover {
  transform: translateY(-6px);
}

.ranking-card h3 {
  color: #8c1d40;
  font-size: 3rem;
  margin: 0;
}

.ranking-card h4 {
  margin: 1rem 0;
}

@media (max-width: 992px) {
  .rankings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .rankings-grid {
    grid-template-columns: 1fr;
  }
}
</style>