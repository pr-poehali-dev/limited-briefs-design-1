import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Silk Lace Bralette',
      price: '12 000',
      image: '/img/8a47c21f-3df6-449b-b8c7-77dc9eed9c62.jpg',
      badge: 'Exclusive',
      category: 'bralette'
    },
    {
      id: 2,
      name: 'Premium Satin Brief',
      price: '8 500',
      image: '/img/c999eada-1885-45d2-8c99-e24861cbd774.jpg',
      badge: 'Limited',
      category: 'brief'
    },
    {
      id: 3,
      name: 'Pearl White Set',
      price: '15 000',
      image: '/img/293f572e-927c-445d-b165-1a66a8979e8b.jpg',
      badge: 'New',
      category: 'set'
    },
    {
      id: 4,
      name: 'Black Lace Collection',
      price: '13 500',
      image: '/img/8a47c21f-3df6-449b-b8c7-77dc9eed9c62.jpg',
      badge: 'Bestseller',
      category: 'bralette'
    },
    {
      id: 5,
      name: 'Cream Silk Brief',
      price: '7 000',
      image: '/img/c999eada-1885-45d2-8c99-e24861cbd774.jpg',
      badge: 'New',
      category: 'brief'
    },
    {
      id: 6,
      name: 'Exclusive White Set',
      price: '18 000',
      image: '/img/293f572e-927c-445d-b165-1a66a8979e8b.jpg',
      badge: 'Exclusive',
      category: 'set'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все изделия' },
    { id: 'bralette', name: 'Бралетты' },
    { id: 'brief', name: 'Трусы' },
    { id: 'set', name: 'Комплекты' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <Navigation />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Каталог коллекции</h1>
            <p className="text-lg text-muted-foreground">
              Эксклюзивные изделия ручной работы из премиальных тканей
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-2'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-0">
                    {product.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-muted">
                  <h3 className="font-playfair text-xl font-semibold mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-semibold">{product.price} ₽</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon" className="border-2">
                      <Icon name="Heart" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Package" className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">В этой категории пока нет товаров</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Не нашли нужный размер?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Мы создаем изделия на заказ с учетом ваших индивидуальных параметров
          </p>
          <Button size="lg" variant="outline" className="border-2">
            <Icon name="Mail" className="mr-2 w-5 h-5" />
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Catalog;