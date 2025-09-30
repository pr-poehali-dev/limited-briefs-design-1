import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const featuredProducts = [
    {
      id: 1,
      name: 'Black Gold Edition',
      price: '4 990',
      image: '/img/0333e6aa-42ed-4d34-973e-65d06827656b.jpg',
      badge: 'Limited'
    },
    {
      id: 2,
      name: 'Navy Premium',
      price: '3 790',
      image: '/img/73abeac9-162b-4b9b-9fd7-84ae148bc5bf.jpg',
      badge: 'Exclusive'
    },
    {
      id: 3,
      name: 'Burgundy Lux',
      price: '5 490',
      image: '/img/f38d22ef-88d2-4770-b30a-b1dbfebda8ca.jpg',
      badge: 'New'
    }
  ];

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem(product);
    toast({
      title: 'Добавлено в корзину',
      description: product.name,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-6 py-2 text-sm font-semibold">
              Лимитированная коллекция 2025
            </Badge>
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Трусы премиум класса <br />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                ограниченный тираж
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Дизайнерские модели в лимитированных количествах. Эксклюзивные ткани, уникальный крой и невероятный комфорт.
              Каждая коллекция выходит тиражом всего 100 штук.
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Топовые модели</h2>
            <p className="text-muted-foreground text-lg">Самые популярные трусы из лимитированных серий</p>
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
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="group-hover:bg-secondary group-hover:text-primary transition-colors"
                      onClick={() => handleAddToCart(product)}
                    >
                      <Icon name="Plus" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Flame" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Почему мы?</h2>
          <p className="text-lg mb-8 opacity-95 leading-relaxed">
            Используем только премиальные ткани: микрофибра с модалом, мерсеризованный хлопок и бамбуковое волокно.
            Все модели разработаны дизайнерами и выпускаются ограниченными тиражами.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Icon name="Zap" className="w-12 h-12 mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Лимитированные</h3>
              <p className="text-sm opacity-90">Всего 100 штук каждой модели</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Award" className="w-12 h-12 mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Дизайнерские</h3>
              <p className="text-sm opacity-90">Эксклюзивные принты и крой</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Heart" className="w-12 h-12 mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Комфортные</h3>
              <p className="text-sm opacity-90">Идеальная посадка и дышащие ткани</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Crown" className="w-6 h-6" />
            <span className="font-playfair text-xl font-semibold">BOLSHIE YAYCA</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">Лимитированные трусы премиум класса</p>
          <div className="flex items-center justify-center space-x-6">
            <Link to="/catalog" className="text-sm hover:text-secondary transition-colors">Каталог</Link>
            <Link to="/contacts" className="text-sm hover:text-secondary transition-colors">Контакты</Link>
          </div>
          <p className="text-xs text-muted-foreground mt-8">© 2025 Bolshie Yayca. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;