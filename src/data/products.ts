import { Product } from '@/types/product';

export const products: Product[] = [
  // Grains
  {
    id: 'organic-wheat',
    name: 'Organic Wheat',
    slug: 'organic-wheat',
    category: 'grains',
    shortDescription: 'Premium quality organic wheat grains sourced from trusted farms.',
    description: 'Our organic wheat is cultivated using traditional farming methods without synthetic pesticides or fertilizers. Each grain is carefully selected to ensure premium quality for your daily nutrition needs. Perfect for making fresh rotis, chapatis, and traditional Indian breads.',
    images: ['/images/products/organic-wheat.svg'],
    imageAlt: 'Khetar Vala organic wheat grains',
    sizes: ['1 kg', '5 kg', '10 kg', '25 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Organic Wheat | Farm Fresh Wheat | Khetar Vala',
    seoDescription: 'Buy premium organic wheat from Khetar Vala. Fresh, natural wheat grains sourced directly from farms. Contact for prices and delivery.',
    keywords: ['organic wheat', 'farm fresh wheat', 'wheat grains', 'Indian wheat', 'buy wheat online'],
    relatedProducts: ['bajra', 'jowar', 'chana'],
    faqs: [
      {
        question: 'Is this wheat certified organic?',
        answer: 'Our wheat is sourced from farms following organic farming practices. For specific certification details, please contact us directly.'
      },
      {
        question: 'What sizes are available?',
        answer: 'We offer 1kg, 5kg, 10kg, and 25kg packs. Custom quantities may be available on request.'
      },
      {
        question: 'How should I store wheat?',
        answer: 'Store in a cool, dry place in an airtight container to maintain freshness and prevent moisture.'
      }
    ],
    imagePrompt: 'Premium realistic Indian organic wheat grains, golden wheat kernels, natural wooden surface, subtle farm background, warm natural sunlight, premium food photography, realistic texture, clean composition, high-end ecommerce photography.'
  },
  {
    id: 'bajra',
    name: 'Bajra (Pearl Millet)',
    slug: 'bajra',
    category: 'grains',
    shortDescription: 'Traditional pearl millet, naturally grown and nutrient-rich.',
    description: 'Bajra, also known as pearl millet, is a traditional Indian grain valued for its nutritional profile. Our bajra is sourced from farms that follow natural cultivation practices. Ideal for making bhakri, rotla, and other traditional dishes.',
    images: ['/images/products/bajra.svg'],
    imageAlt: 'Khetar Vala bajra pearl millet grains',
    sizes: ['1 kg', '5 kg', '10 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Bajra | Pearl Millet | Traditional Grains | Khetar Vala',
    seoDescription: 'Premium quality bajra (pearl millet) from Khetar Vala. Naturally grown traditional grain. Contact for prices and availability.',
    keywords: ['bajra', 'pearl millet', 'traditional grains', 'millet', 'Indian millets'],
    relatedProducts: ['organic-wheat', 'jowar', 'moong'],
    faqs: [
      {
        question: 'What is bajra good for?',
        answer: 'Bajra is traditionally used for making bhakri, rotla, khichdi, and porridge. It\'s a staple grain in many Indian regions.'
      },
      {
        question: 'Is this gluten-free?',
        answer: 'Yes, bajra is naturally gluten-free.'
      }
    ],
    imagePrompt: 'Premium realistic Indian bajra pearl millet grains, small round greyish kernels, natural wooden bowl, rustic farm setting, warm natural lighting, premium food photography.'
  },
  {
    id: 'jowar',
    name: 'Jowar (Sorghum)',
    slug: 'jowar',
    category: 'grains',
    shortDescription: 'Wholesome sorghum grains, a staple of traditional Indian diets.',
    description: 'Jowar, or sorghum, is one of India\'s ancient grains. Our jowar is carefully sourced to maintain its natural goodness. Versatile for making rotis, bhakris, porridge, and other wholesome dishes.',
    images: ['/images/products/jowar.svg'],
    imageAlt: 'Khetar Vala jowar sorghum grains',
    sizes: ['1 kg', '5 kg', '10 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Jowar | Sorghum | Traditional Indian Grain | Khetar Vala',
    seoDescription: 'Quality jowar (sorghum) from Khetar Vala. Traditional Indian grain sourced naturally. Inquire for prices and delivery.',
    keywords: ['jowar', 'sorghum', 'traditional grains', 'Indian grains', 'gluten free grains'],
    relatedProducts: ['organic-wheat', 'bajra', 'chana'],
    faqs: [
      {
        question: 'How to cook jowar?',
        answer: 'Jowar can be ground into flour for rotis/bhakris, or cooked whole like rice for khichdi and porridge.'
      },
      {
        question: 'Is jowar gluten-free?',
        answer: 'Yes, jowar is naturally gluten-free.'
      }
    ],
    imagePrompt: 'Premium realistic Indian jowar sorghum grains, pale round kernels, natural wooden surface, subtle Indian farm atmosphere, soft natural lighting, premium food photography.'
  },

  // Pulses & Kathol
  {
    id: 'chana',
    name: 'Chana (Chickpeas)',
    slug: 'chana',
    category: 'pulses-kathol',
    shortDescription: 'Premium quality chickpeas, perfect for traditional Indian dishes.',
    description: 'Our chana (chickpeas) are carefully selected for size, color, and quality. A versatile pulse used in countless Indian recipes - from chana masala and chole to snacks like chana chaat and sprouted salads.',
    images: ['/images/products/chana.svg'],
    imageAlt: 'Khetar Vala chana pulses',
    sizes: ['1 kg', '5 kg', '10 kg', '25 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Chana | Quality Indian Chickpeas | Khetar Vala',
    seoDescription: 'Premium chana (chickpeas) from Khetar Vala. Quality pulses for traditional Indian cooking. Contact for wholesale and retail prices.',
    keywords: ['chana', 'chickpeas', 'kabuli chana', 'pulses', 'kathol', 'Indian pulses'],
    relatedProducts: ['moong', 'toor-dal', 'rajma', 'moth'],
    faqs: [
      {
        question: 'What is the difference between chana and kabuli chana?',
        answer: 'Chana typically refers to desi chana (smaller, darker), while kabuli chana are the larger, lighter-colored chickpeas. Both are chickpea varieties.'
      },
      {
        question: 'How long to soak chana?',
        answer: 'Soak for 6-8 hours or overnight for best results. Quick soak: boil for 2 minutes, then let sit covered for 1 hour.'
      },
      {
        question: 'Can I sprout chana?',
        answer: 'Yes, chana sprouts easily and makes a nutritious addition to salads and chaats.'
      }
    ],
    imagePrompt: 'Premium realistic Indian chickpeas/chana, natural beige tones, rustic wooden surface, subtle Indian farm atmosphere, soft natural lighting, premium food photography.'
  },
  {
    id: 'moong',
    name: 'Moong / Mag (Green Gram)',
    slug: 'moong',
    category: 'pulses-kathol',
    shortDescription: 'Fresh green gram, ideal for dals, sprouts, and traditional recipes.',
    description: 'Our moong (green gram) is sourced for its vibrant color and fresh quality. Perfect for making moong dal, sprouts, khichdi, and traditional Gujarati dishes like mag ni dal and handvo.',
    images: ['/images/products/moong.svg'],
    imageAlt: 'Khetar Vala moong dal',
    sizes: ['1 kg', '5 kg', '10 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Moong Dal | Quality Green Gram | Khetar Vala',
    seoDescription: 'Fresh moong (green gram) from Khetar Vala. Perfect for dals, sprouts, and traditional recipes. Inquire for prices.',
    keywords: ['moong', 'green gram', 'moong dal', 'mag', 'pulses', 'kathol', 'sprouts'],
    relatedProducts: ['chana', 'toor-dal', 'urad-dal', 'moth'],
    faqs: [
      {
        question: 'What is the difference between whole moong and split moong dal?',
        answer: 'Whole moong has the green skin intact, while split moong dal is hulled and split. Both are the same bean, just processed differently.'
      },
      {
        question: 'How to sprout moong?',
        answer: 'Soak overnight, drain, wrap in damp cloth for 12-24 hours until sprouts appear. Rinse twice daily.'
      }
    ],
    imagePrompt: 'Premium realistic green moong beans, natural texture, elegant wooden bowl, soft natural light, clean premium food photography.'
  },
  {
    id: 'toor-dal',
    name: 'Toor Dal (Pigeon Peas)',
    slug: 'toor-dal',
    category: 'pulses-kathol',
    shortDescription: 'Premium pigeon peas, a staple for everyday dal and sambar.',
    description: 'Toor dal, also known as arhar dal or pigeon peas, is a kitchen essential across India. Our toor dal is carefully processed to retain its natural flavor and cooking quality. Perfect for daily dal, sambar, rasam, and Gujarati dal.',
    images: ['/images/products/toor-dal.svg'],
    imageAlt: 'Khetar Vala toor dal',
    sizes: ['1 kg', '5 kg', '10 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Toor Dal | Pigeon Peas | Arhar Dal | Khetar Vala',
    seoDescription: 'Quality toor dal (pigeon peas) from Khetar Vala. Essential for everyday Indian cooking. Contact for current prices.',
    keywords: ['toor dal', 'arhar dal', 'pigeon peas', 'tuvar dal', 'pulses', 'kathol'],
    relatedProducts: ['chana', 'moong', 'urad-dal', 'moth'],
    faqs: [
      {
        question: 'Does toor dal need soaking?',
        answer: 'Soaking for 30-60 minutes reduces cooking time and improves digestibility, but it\'s not strictly necessary.'
      },
      {
        question: 'What dishes can I make with toor dal?',
        answer: 'Daily dal, sambar, rasam, Gujarati dal, dal fry, dal tadka, and many regional variations.'
      }
    ],
    imagePrompt: 'Premium realistic toor dal pigeon peas, pale yellow split lentils, natural wooden spoon, rustic kitchen setting, warm natural lighting, premium food photography.'
  },
  {
    id: 'urad-dal',
    name: 'Urad Dal (Black Gram)',
    slug: 'urad-dal',
    category: 'pulses-kathol',
    shortDescription: 'Quality black gram, essential for South Indian and Punjabi cuisine.',
    description: 'Urad dal, or black gram, is prized for its rich, creamy texture when cooked. Our urad dal is selected for quality and consistency. Essential for dal makhani, idli/dosa batter, vada, and Punjabi specialties.',
    images: ['/images/products/urad-dal.svg'],
    imageAlt: 'Khetar Vala urad dal',
    sizes: ['1 kg', '5 kg', '10 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Urad Dal | Black Gram | Quality Pulses | Khetar Vala',
    seoDescription: 'Premium urad dal (black gram) from Khetar Vala. Essential for South Indian and North Indian dishes. Inquire for prices.',
    keywords: ['urad dal', 'black gram', 'maah ki dal', 'pulses', 'kathol', 'idli dosa batter'],
    relatedProducts: ['chana', 'moong', 'toor-dal', 'moth'],
    faqs: [
      {
        question: 'What is the difference between whole urad and split urad dal?',
        answer: 'Whole urad (black gram) has the black skin intact. Split urad dal (white) is hulled and split. Both come from the same bean.'
      },
      {
        question: 'How to get creamy texture in dal makhani?',
        answer: 'Slow cook urad dal for several hours, or use a pressure cooker. The natural starch creates the creaminess.'
      }
    ],
    imagePrompt: 'Premium realistic urad dal black gram, small black/white lentils, natural wooden surface, traditional Indian kitchen aesthetic, soft natural lighting, premium food photography.'
  },
  {
    id: 'moth',
    name: 'Moth (Matki / Moth Bean)',
    slug: 'moth',
    category: 'pulses-kathol',
    shortDescription: 'Traditional moth beans, a specialty of Gujarati and Rajasthani cuisine.',
    description: 'Moth beans (matki) are small, drought-resistant legumes with a unique earthy flavor. A traditional favorite in Gujarat and Rajasthan for making moth nu shaak, usal, and sprouted salads. Our moth is sourced for authentic quality.',
    images: ['/images/products/moth.svg'],
    imageAlt: 'Khetar Vala moth beans',
    sizes: ['500 g', '1 kg', '5 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Moth Beans | Matki | Traditional Pulses | Khetar Vala',
    seoDescription: 'Authentic moth beans (matki) from Khetar Vala. Traditional pulse for Gujarati and Rajasthani cuisine. Contact for availability.',
    keywords: ['moth', 'matki', 'moth bean', 'pulses', 'kathol', 'Gujarati food', 'Rajasthani food'],
    relatedProducts: ['chana', 'moong', 'toor-dal', 'urad-dal'],
    faqs: [
      {
        question: 'How to cook moth beans?',
        answer: 'Soak for 4-6 hours, then pressure cook for 3-4 whistles. Great for usal, shaak, or sprouted.'
      },
      {
        question: 'Can moth beans be sprouted?',
        answer: 'Yes, moth sprouts are delicious and nutritious. Soak overnight, drain, and sprout for 12-24 hours.'
      }
    ],
    imagePrompt: 'Premium realistic moth beans matki, small brown oval beans, rustic clay bowl, traditional Indian farm setting, warm natural light, premium food photography.'
  },
  {
    id: 'rajma',
    name: 'Rajma (Red Kidney Beans)',
    slug: 'rajma',
    category: 'pulses-kathol',
    shortDescription: 'Premium red kidney beans, perfect for rajma chawal and curries.',
    description: 'Our rajma (red kidney beans) are selected for their deep color, uniform size, and excellent cooking quality. A beloved staple for rajma chawal, rajma masala, and various bean salads and curries across North India.',
    images: ['/images/products/rajma.svg'],
    imageAlt: 'Khetar Vala rajma red kidney beans',
    sizes: ['1 kg', '5 kg', '10 kg'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Rajma | Red Kidney Beans | Quality Pulses | Khetar Vala',
    seoDescription: 'Premium rajma (red kidney beans) from Khetar Vala. Perfect for rajma chawal and traditional curries. Inquire for prices.',
    keywords: ['rajma', 'red kidney beans', 'pulses', 'kathol', 'rajma chawal', 'North Indian food'],
    relatedProducts: ['chana', 'moth', 'toor-dal', 'urad-dal'],
    faqs: [
      {
        question: 'Why soak rajma before cooking?',
        answer: 'Soaking overnight reduces cooking time significantly and helps reduce compounds that can cause digestive discomfort.'
      },
      {
        question: 'How long to pressure cook rajma?',
        answer: 'After soaking overnight, pressure cook for 15-20 minutes (4-5 whistles) until soft and creamy.'
      }
    ],
    imagePrompt: 'Premium realistic red kidney beans rajma, deep red large beans, natural wooden surface, subtle Indian kitchen background, warm natural lighting, premium food photography.'
  },

  // Ghee
  {
    id: 'cow-ghee',
    name: 'Cow Ghee',
    slug: 'cow-ghee',
    category: 'ghee',
    shortDescription: 'Traditional cow ghee made from quality milk.',
    description: 'Our cow ghee is prepared using traditional methods from quality cow milk. Rich in aroma and flavor, it\'s a staple in Indian kitchens for cooking, tempering, and as a finishing touch on rotis, dal, and rice.',
    images: ['/images/products/cow-ghee.svg'],
    imageAlt: 'Khetar Vala cow ghee',
    sizes: ['200 ml', '500 ml', '1 L', '5 L'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Pure Cow Ghee | Traditional Ghee | Khetar Vala',
    seoDescription: 'Traditional cow ghee from Khetar Vala. Made from quality milk using traditional methods. Contact for prices and delivery.',
    keywords: ['cow ghee', 'pure ghee', 'traditional ghee', 'desi ghee', 'clarified butter'],
    relatedProducts: ['organic-wheat', 'chana', 'moong'],
    faqs: [
      {
        question: 'How is this ghee made?',
        answer: 'Our ghee is made by simmering butter to remove milk solids, following traditional preparation methods.'
      },
      {
        question: 'What is the shelf life?',
        answer: 'Properly stored ghee can last 12+ months at room temperature. Keep in a cool, dry place away from direct sunlight.'
      },
      {
        question: 'Can I use ghee for high-heat cooking?',
        answer: 'Yes, ghee has a high smoke point (~250°C/482°F), making it excellent for frying, sautéing, and tempering.'
      }
    ],
    imagePrompt: 'Premium traditional Indian cow ghee in an elegant glass jar, warm golden ghee, subtle Indian kitchen/farm aesthetic, natural lighting, premium product photography.'
  },

  // Natural Products
  {
    id: 'natural-soap',
    name: 'Natural Soap',
    slug: 'natural-soap',
    category: 'natural-products',
    shortDescription: 'Handcrafted natural soap with botanical ingredients.',
    description: 'Our natural soaps are handcrafted using traditional methods with plant-based oils and botanical ingredients. Free from harsh synthetic detergents, they cleanse gently while maintaining skin\'s natural moisture. Available in various natural fragrances.',
    images: ['/images/products/natural-soap.svg'],
    imageAlt: 'Khetar Vala natural soap',
    sizes: ['100 g', '125 g'],
    availability: 'contact',
    featured: true,
    seoTitle: 'Natural Soap | Handmade Organic Soap | Khetar Vala',
    seoDescription: 'Handcrafted natural soaps from Khetar Vala. Made with botanical ingredients and plant oils. Gentle cleansing for daily use.',
    keywords: ['natural soap', 'handmade soap', 'organic soap', 'botanical soap', 'chemical free soap'],
    relatedProducts: ['cow-ghee'],
    faqs: [
      {
        question: 'What ingredients are in the soap?',
        answer: 'Our soaps are made with plant-based oils (coconut, olive, etc.) and natural botanicals. Specific ingredients vary by variant. Contact us for detailed ingredient lists.'
      },
      {
        question: 'Is it suitable for sensitive skin?',
        answer: 'Our soaps are made with gentle, natural ingredients. However, we recommend patch testing if you have known sensitivities.'
      },
      {
        question: 'How long does a bar last?',
        answer: 'With proper drainage between uses, a 100g bar typically lasts 3-4 weeks for daily use.'
      }
    ],
    imagePrompt: 'Premium handmade natural soap bars with subtle botanical elements, clean beige background, natural leaves, soft daylight, luxury organic skincare photography.'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getRelatedProducts = (productSlug: string, limit: number = 4): Product[] => {
  const product = getProductBySlug(productSlug);
  if (!product?.relatedProducts) return [];
  return product.relatedProducts
    .map(slug => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined)
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.shortDescription.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.keywords?.some(k => k.toLowerCase().includes(lowerQuery))
  );
};