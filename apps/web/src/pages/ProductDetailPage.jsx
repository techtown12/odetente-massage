import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProduct, getProductQuantities } from '@/api/EcommerceApi';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, Minus, Plus } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = useCallback(async () => {
    if (product && selectedVariant) {
      const availableQuantity = selectedVariant.inventory_quantity;
      try {
        await addToCart(product, selectedVariant, quantity, availableQuantity);
        toast({
          title: "Ajouté au panier",
          description: `${quantity} x ${product.title} a été ajouté.`,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: error.message,
        });
      }
    }
  }, [product, selectedVariant, quantity, addToCart, toast]);

  const handleQuantityChange = useCallback((amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await getProduct(id);
        const quantitiesResponse = await getProductQuantities({
          fields: 'inventory_quantity',
          product_ids: [fetchedProduct.id]
        });

        const variantQuantityMap = new Map();
        quantitiesResponse.variants.forEach(v => variantQuantityMap.set(v.id, v.inventory_quantity));

        const productWithQuantities = {
          ...fetchedProduct,
          variants: fetchedProduct.variants.map(v => ({
            ...v,
            inventory_quantity: variantQuantityMap.get(v.id) ?? v.inventory_quantity
          }))
        };

        setProduct(productWithQuantities);
        if (productWithQuantities.variants?.length > 0) {
          setSelectedVariant(productWithQuantities.variants[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <Loader2 className="h-8 w-8 text-primary animate-spin stroke-[1.5]" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="mb-6">Produit introuvable</h2>
            <Link to="/shop" className="text-primary link-underline uppercase tracking-widest text-sm">
              Retour à la boutique
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const price = selectedVariant?.sale_price_formatted ?? selectedVariant?.price_formatted;
  const currentImage = product.images[currentImageIndex];
  const hasMultipleImages = product.images.length > 1;

  return (
    <>
      <Helmet>
        <title>{product.title} | Boutique Ô Détente</title>
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-grow py-32 px-6 lg:px-12 max-w-7xl mx-auto w-full">
          <Link to="/shop" className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-12 text-sm tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Images */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden mb-6">
                <img
                  src={currentImage?.url || placeholderImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {hasMultipleImages && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-24 flex-shrink-0 rounded-sm overflow-hidden transition-opacity ${idx === currentImageIndex ? 'opacity-100 ring-1 ring-primary ring-offset-2' : 'opacity-50 hover:opacity-100'}`}
                    >
                      <img src={img.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <h1 className="text-4xl md:text-5xl mb-4">{product.title}</h1>
              <p className="text-gold text-2xl mb-8">{price}</p>

              <div className="prose prose-p:font-light prose-p:text-foreground/70 prose-p:leading-relaxed mb-12" dangerouslySetInnerHTML={{ __html: product.description }} />

              {product.variants.length > 1 && (
                <div className="mb-8">
                  <span className="block text-sm tracking-widest uppercase text-foreground/60 mb-4">Variante</span>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map(v => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-6 py-2 text-sm border transition-colors ${selectedVariant?.id === v.id ? 'border-primary text-primary' : 'border-border text-foreground/60 hover:border-foreground/30'}`}
                      >
                        {v.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center border border-border rounded-sm h-14">
                  <button onClick={() => handleQuantityChange(-1)} className="px-4 text-foreground/60 hover:text-foreground transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)} className="px-4 text-foreground/60 hover:text-foreground transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  disabled={!product.purchasable}
                  className="flex-grow bg-primary text-primary-foreground h-14 text-sm tracking-widest uppercase hover:bg-primary/90 transition-luxury disabled:opacity-50"
                >
                  Ajouter au panier
                </button>
              </div>

              {product.additional_info?.length > 0 && (
                <div className="mt-12 space-y-8 border-t border-border pt-12">
                  {product.additional_info.map(info => (
                    <div key={info.id}>
                      <h3 className="text-xl mb-4">{info.title}</h3>
                      <div className="text-foreground/70 font-light text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: info.description }} />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProductDetailPage;