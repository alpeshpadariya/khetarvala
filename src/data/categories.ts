import { Category } from '@/types/category';

export const categories: Category[] = [
  {
    id: 'grains',
    name: 'Grains',
    slug: 'grains',
    description: 'Discover our collection of traditional Indian grains, cultivated with care and respect for the land. From everyday wheat to heritage millets like bajra and jowar, each grain carries the essence of India\'s agricultural heritage.',
    shortDescription: 'Traditional Indian grains - wheat, bajra, jowar and more.',
    image: '/images/categories/grains.svg',
    imageAlt: 'Assorted traditional Indian grains in wooden bowls',
    productCount: 3,
    seoTitle: 'Grains | Organic Wheat, Bajra, Jowar | Khetar Vala',
    seoDescription: 'Explore traditional Indian grains at Khetar Vala. Organic wheat, bajra (pearl millet), jowar (sorghum) sourced naturally. Contact for prices.',
    keywords: ['organic wheat', 'bajra', 'pearl millet', 'jowar', 'sorghum', 'traditional grains', 'Indian grains', 'millets']
  },
  {
    id: 'pulses-kathol',
    name: 'Pulses & Kathol',
    slug: 'pulses-kathol',
    description: 'Our pulses and kathol selection brings you the heart of Indian vegetarian cuisine. From the versatile chana and moong to regional specialties like moth and rajma, each pulse is selected for quality and authentic flavor.',
    shortDescription: 'Chana, moong, toor, urad, moth, rajma and more pulses.',
    image: '/images/categories/pulses-kathol.svg',
    imageAlt: 'Variety of Indian pulses and lentils in traditional containers',
    productCount: 7,
    seoTitle: 'Pulses & Kathol | Chana, Moong, Toor, Urad, Rajma | Khetar Vala',
    seoDescription: 'Quality pulses and kathol from Khetar Vala. Chana, moong dal, toor dal, urad dal, moth, rajma and more. Inquire for wholesale and retail prices.',
    keywords: ['chana', 'chickpeas', 'moong dal', 'green gram', 'toor dal', 'arhar dal', 'urad dal', 'black gram', 'moth', 'matki', 'rajma', 'kidney beans', 'pulses', 'kathol', 'Indian lentils']
  },
  {
    id: 'ghee',
    name: 'Ghee',
    slug: 'ghee',
    description: 'Experience the rich tradition of Indian ghee-making. Our ghee is prepared using time-honored methods from quality milk, delivering the authentic aroma and flavor that has been cherished in Indian homes for generations.',
    shortDescription: 'Traditional cow ghee made from quality milk.',
    image: '/images/categories/ghee.svg',
    imageAlt: 'Golden cow ghee in traditional brass container',
    productCount: 1,
    seoTitle: 'Ghee | Pure Cow Ghee | Traditional Ghee | Khetar Vala',
    seoDescription: 'Traditional cow ghee from Khetar Vala. Made from quality milk using traditional methods. Contact for prices and delivery options.',
    keywords: ['cow ghee', 'pure ghee', 'traditional ghee', 'desi ghee', 'clarified butter', 'Indian ghee']
  },
  {
    id: 'natural-products',
    name: 'Natural Products',
    slug: 'natural-products',
    description: 'Our natural products extend the farm-to-family philosophy beyond food. Handcrafted with botanical ingredients and traditional knowledge, these products bring the purity of nature into your daily self-care routine.',
    shortDescription: 'Handcrafted natural soaps and farm-inspired products.',
    image: '/images/categories/natural-products.svg',
    imageAlt: 'Natural handmade soap bars with botanical ingredients',
    productCount: 1,
    seoTitle: 'Natural Products | Handmade Soaps | Khetar Vala',
    seoDescription: 'Natural handmade soaps and farm-inspired products from Khetar Vala. Botanical ingredients, traditional craftsmanship. Inquire for availability.',
    keywords: ['natural soap', 'handmade soap', 'organic soap', 'botanical soap', 'natural skincare', 'handcrafted products']
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(c => c.id === id);
};