import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Silk Lace Bralette',
      price: '12 000',
      image: '/img/8a47c21f-3df6-449b-b8c7-77dc9eed9c62.jpg',
      badge: 'Exclusive'
    },
    {
      id: 2,
      name: 'Premium Satin Brief',
      price: '8 500',
      image: '/img/c999eada-1885-45d2-8c99-e24861cbd774.jpg',
      badge: 'Limited'
    },
    {
      id: 3,
      name: 'Pearl White Set',
      price: '15 000',
      image: '/img/293f572e-927c-445d-b165-1a66a8979e8b.jpg',
      badge: 'New'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-secondary to-amber-600 text-primary border-0 px-6 py-2 text-sm">
              Лимитированная коллекция 2025
            </Badge>
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Эксклюзивное белье <br />
              <span className="bg-gradient-to-r from-secondary via-amber-600 to-secondary bg-clip-text text-transparent">
                ручной работы
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Откройте для себя изысканный комфорт и утонченность дизайна. 
              Каждое изделие создается вручную из премиальных материалов в ограниченном количестве.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/catalog">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base">
                  Смотреть коллекцию
                  <Icon name="ArrowRight" className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base border-2">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Избранные модели</h2>
            <p className="text-muted-foreground text-lg">Тщательно отобранные изделия из новой коллекции</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-muted">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold">{product.price} ₽</span>
                    <Button size="sm" variant="ghost" className="group-hover:bg-secondary group-hover:text-primary transition-colors">
                      <Icon name="Plus" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary via-zinc-900 to-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Award" className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Премиальное качество</h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Мы используем только натуральные ткани высочайшего качества: 
            шёлк, кружево ручной работы и органический хлопок. 
            Каждое изделие проходит строгий контроль качества.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Icon name="Sparkles" className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Ручная работа</h3>
              <p className="text-sm opacity-80">Каждый шов выполнен вручную</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Shield" className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-sm opacity-80">Пожизненная гарантия на изделия</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Package" className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Премиум упаковка</h3>
              <p className="text-sm opacity-80">Элегантная подарочная коробка</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Crown" className="w-6 h-6" />
            <span className="font-playfair text-xl font-semibold">LUXURY COLLECTION</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">Эксклюзивное белье ручной работы</p>
          <div className="flex items-center justify-center space-x-6">
            <Link to="/catalog" className="text-sm hover:text-secondary transition-colors">Каталог</Link>
            <Link to="/contacts" className="text-sm hover:text-secondary transition-colors">Контакты</Link>
          </div>
          <p className="text-xs text-muted-foreground mt-8">© 2025 Luxury Collection. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;