<script setup>
import ArticleCard from './ArticleCard.vue';

const articles = [
  {
    id: 1,
    title: 'Cómo obtener un certificado SSL para el dominio personalizado de tu Centro de Ayuda',
    status: 'draft',
    updatedAt: 1729048936,
    author: {
      name: 'John',
      thumbnail: 'https://i.pravatar.cc/300',
    },
    category: {
      title: 'Marketing',
      slug: 'marketing',
      icon: '📈',
    },
    views: 400,
  },
  {
    id: 2,
    title: 'Configura tu primer portal del Centro de Ayuda',
    status: '',
    updatedAt: 1729048936,
    author: {
      name: 'John',
      thumbnail: 'https://i.pravatar.cc/300',
    },
    category: {
      title: 'Desarrollo',
      slug: 'development',
      icon: '🛠️',
    },
    views: 1400,
  },
  {
    id: 3,
    title: 'Buenas prácticas para organizar el contenido de tu Centro de Ayuda',
    status: 'archived',
    updatedAt: 1729048936,
    author: {
      name: 'Fernando',
      thumbnail: 'https://i.pravatar.cc/300',
    },
    category: {
      title: 'Finanzas',
      slug: 'finance',
      icon: '💰',
    },
    views: 4300,
  },
];

const category = {
  name: 'Marketing',
  slug: 'marketing',
  icon: '📈',
};
</script>

<!-- eslint-disable vue/no-bare-strings-in-template -->
<!-- eslint-disable vue/no-undef-components -->
<template>
  <Story
    title="Components/HelpCenter/ArticleCard"
    :layout="{ type: 'grid', width: '700px' }"
  >
    <Variant title="Article Card">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="px-20 py-4 bg-n-background"
      >
        <ArticleCard
          :id="article.id"
          :title="article.title"
          :status="article.status"
          :author="article.author"
          :category="category"
          :views="article.views"
          :updated-at="article.updatedAt"
        />
      </div>
    </Variant>
  </Story>
</template>
