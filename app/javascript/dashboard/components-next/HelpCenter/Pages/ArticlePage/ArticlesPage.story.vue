<script setup>
import ArticlesPage from './ArticlesPage.vue';

const articles = [
  {
    title: 'Cómo obtener un certificado SSL para el dominio personalizado de tu Centro de Ayuda',
    status: 'draft',
    updatedAt: 'hace 2 días',
    author: 'Michael',
    category: '⚡️ Marketing',
    views: 3400,
  },
  {
    title: 'Configura tu primer portal del Centro de Ayuda',
    status: '',
    updatedAt: 'hace 1 semana',
    author: 'John',
    category: '🛠️ Desarrollo',
    views: 400,
  },
  {
    title: 'Buenas prácticas para organizar el contenido de tu Centro de Ayuda',
    status: 'archived',
    updatedAt: 'hace 3 días',
    author: 'Fernando',
    category: '💰 Finanzas',
    views: 400,
  },
  {
    title: 'Personaliza la apariencia de tu Centro de Ayuda',
    status: '',
    updatedAt: 'hace 5 días',
    author: 'Jane',
    category: '💰 Finanzas',
    views: 400,
  },
  {
    title: 'Buenas prácticas para organizar el contenido de tu Centro de Ayuda',
    status: 'archived',
    updatedAt: 'hace 3 días',
    author: 'Fernando',
    category: '💰 Finanzas',
    views: 400,
  },
  {
    title: 'Personaliza la apariencia de tu Centro de Ayuda',
    status: '',
    updatedAt: 'hace 5 días',
    author: 'Jane',
    category: '💰 Finanzas',
    views: 400,
  },
  {
    title: 'Buenas prácticas para organizar el contenido de tu Centro de Ayuda',
    status: 'archived',
    updatedAt: 'hace 3 días',
    author: 'Fernando',
    category: '💰 Finanzas',
    views: 400,
  },
];</script>

<template>
  <Story title="Pages/HelpCenter/ArticlesPage" :layout="{ type: 'single' }">
    <Variant title="All Articles">
      <div class="w-full min-h-screen bg-n-background">
        <ArticlesPage :articles="articles" />
      </div>
    </Variant>
  </Story>
</template>
