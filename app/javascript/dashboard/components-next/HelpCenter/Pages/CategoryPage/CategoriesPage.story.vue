<script setup>
import CategoriesPage from './CategoriesPage.vue';

const categories = [
  {
    id: 'getting-started',
    title: '🚀 Primeros pasos',
    description:
      'Aprende a usar Chatwoot de forma eficaz y saca el máximo partido a sus funcionalidades para mejorar la atención y la interacción con tus clientes.',
    articlesCount: '2',
    articles: [
      {
        variant: 'Artículo en borrador',
        title:
          'Cómo obtener un certificado SSL para el dominio personalizado de tu Centro de Ayuda',
        status: 'draft',
        updatedAt: 'hace 2 días',
        author: 'Michael',
        category: '⚡️ Marketing',
        views: 3400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Configura tu primer portal del Centro de Ayuda',
        status: '',
        updatedAt: 'hace 1 semana',
        author: 'John',
        category: '🛠️ Desarrollo',
        views: 400,
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description:
      'Aprende a usar Chatwoot de forma eficaz y saca el máximo partido a sus funcionalidades para mejorar la atención al cliente.',
    articlesCount: '4',
    articles: [
      {
        variant: 'Artículo en borrador',
        title:
          'Cómo obtener un certificado SSL para el dominio personalizado de tu Centro de Ayuda',
        status: 'draft',
        updatedAt: 'hace 2 días',
        author: 'Michael',
        category: '⚡️ Marketing',
        views: 3400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Configura tu primer portal del Centro de Ayuda',
        status: '',
        updatedAt: 'hace 1 semana',
        author: 'John',
        category: '🛠️ Desarrollo',
        views: 400,
      },
      {
        variant: 'Artículo archivado',
        title: 'Buenas prácticas para organizar el contenido de tu Centro de Ayuda',
        status: 'archived',
        updatedAt: 'hace 3 días',
        author: 'Fernando',
        category: '💰 Finanzas',
        views: 400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Personaliza la apariencia de tu Centro de Ayuda',
        status: '',
        updatedAt: 'hace 5 días',
        author: 'Jane',
        category: '💰 Finanzas',
        views: 400,
      },
    ],
  },
  {
    id: 'development',
    title: 'Desarrollo',
    description: '',
    articlesCount: '5',
    articles: [
      {
        variant: 'Artículo en borrador',
        title:
          'Cómo obtener un certificado SSL para el dominio personalizado de tu Centro de Ayuda',
        status: 'draft',
        updatedAt: 'hace 2 días',
        author: 'Michael',
        category: '⚡️ Marketing',
        views: 3400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Configura tu primer portal del Centro de Ayuda',
        status: '',
        updatedAt: 'hace 1 semana',
        author: 'John',
        category: '🛠️ Desarrollo',
        views: 400,
      },
      {
        variant: 'Artículo archivado',
        title: 'Buenas prácticas para organizar el contenido de tu Centro de Ayuda',
        status: 'archived',
        updatedAt: 'hace 3 días',
        author: 'Fernando',
        category: '💰 Finanzas',
        views: 400,
      },
      {
        variant: 'Artículo archivado',
        title: 'Buenas prácticas para organizar el contenido de tu Centro de Ayuda',
        status: 'archived',
        updatedAt: 'hace 3 días',
        author: 'Fernando',
        category: '💰 Finanzas',
        views: 400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Personaliza la apariencia de tu Centro de Ayuda',
        status: '',
        updatedAt: 'hace 5 días',
        author: 'Jane',
        category: '💰 Finanzas',
        views: 400,
      },
    ],
  },
  {
    id: 'roadmap',
    title: '🛣️ Hoja de ruta',
    description:
      'Aprende a usar Chatwoot de forma eficaz y saca el máximo partido a sus funcionalidades para mejorar la atención y la interacción con tus clientes.',
    articlesCount: '3',
    articles: [
      {
        variant: 'Artículo en borrador',
        title:
          'Cómo obtener un certificado SSL para el dominio personalizado de tu Centro de Ayuda',
        status: 'draft',
        updatedAt: 'hace 2 días',
        author: 'Michael',
        category: '⚡️ Marketing',
        views: 3400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Configura tu primer portal del Centro de Ayuda',
        status: '',
        updatedAt: 'hace 1 semana',
        author: 'John',
        category: '🛠️ Desarrollo',
        views: 400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Configura tu primer portal del Centro de Ayuda',
        status: '',
        updatedAt: 'hace 1 semana',
        author: 'John',
        category: '🛠️ Desarrollo',
        views: 400,
      },
    ],
  },
  {
    id: 'finance',
    title: '💰 Finanzas',
    description:
      'Aprende a usar Chatwoot de forma eficaz y saca el máximo partido a sus funcionalidades para mejorar la atención y la interacción con tus clientes.',
    articlesCount: '2',
    articles: [
      {
        variant: 'Artículo en borrador',
        title:
          'Cómo obtener un certificado SSL para el dominio personalizado de tu Centro de Ayuda',
        status: 'draft',
        updatedAt: 'hace 2 días',
        author: 'Michael',
        category: '⚡️ Marketing',
        views: 3400,
      },
      {
        variant: 'Artículo publicado',
        title: 'Configura tu primer portal del Centro de Ayuda',
        status: '',
        updatedAt: 'hace 1 semana',
        author: 'John',
        category: '🛠️ Desarrollo',
        views: 400,
      },
    ],
  },
];
</script>

<template>
  <Story title="Pages/HelpCenter/CategoryPage" :layout="{ type: 'single' }">
    <Variant title="All Categories">
      <div class="w-full min-h-screen bg-n-background">
        <CategoriesPage :categories="categories" />
      </div>
    </Variant>
  </Story>
</template>
