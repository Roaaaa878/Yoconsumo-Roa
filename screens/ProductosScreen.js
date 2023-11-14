import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

const categorias = [
  { id: '1', nombre: 'Comida rápida', icono: '🍔' },
  { id: '2', nombre: 'Comida', icono: '🍲' },
  { id: '3', nombre: 'Bebidas', icono: '🥤' },
  { id: '4', nombre: 'Postres', icono: '🍰' },
];

const ProductosScreen = () => {
  const data = [
    {
      id: '1',
      name: 'Hamburguesa',
      category: 'Comida rápida',
      rating: 4,
      price: '$10',
      image: require('../src/images/pizza.png'),
    },
    {
      id: '2',
      name: 'Pizza',
      category: 'Comida',
      rating: 4.5,
      price: '$12',
      image: require('../src/images/pizza.png'),
    },
    {
      id: '3',
      name: 'Tacos',
      category: 'Comida rápida',
      rating: 4,
      price: '$10',
      image: require('../src/images/pizza.png'),
    },
    {
      id: '4',
      name: 'Tortas',
      category: 'Comida',
      rating: 4.5,
      price: '$12',
      image: require('../src/images/pizza.png'),
    },
    {
      id: '5',
      name: 'Sushi',
      category: 'Comida',
      rating: 4.8,
      price: '$15',
      image: require('../src/images/pizza.png'),
    },
    {
      id: '6',
      name: 'Ensaladas',
      category: 'Comida',
      rating: 4.2,
      price: '$8',
      image: require('../src/images/pizza.png'),
    },
  ];

  const [showMoreProducts, setShowMoreProducts] = useState({});

  const [productRating, setProductRating] = useState(0);

  const toggleShowMore = (categoryId) => {
    setShowMoreProducts((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleRating = (rating) => {
    setProductRating(rating);
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos"
        />
      </View>
      <TouchableOpacity
        style={styles.homebutton}
        onPress={() => navigation.navigate('Otros')}
      >
        <Image source={require('../src/images/home.png')} style={styles.buttonImageHome} />
      </TouchableOpacity>

      <View style={styles.menu}>
        <Text style={styles.menuItem}>Inicio</Text>
        <Text style={styles.menuItem}>Cuenta</Text>
        <Text style={styles.menuItem}>Carrito</Text>
      </View>

      <View style={styles.userSection}>
        {/* Puedes mostrar la ubicación y la foto de perfil del usuario aquí */}
        {/* ... Agrega componentes de ubicación y foto de perfil */}
      </View>

      <View style={styles.categoriesSection}>
        {categorias.map((categoria) => (
          <TouchableOpacity key={categoria.id} style={styles.categoryBubble}>
            <Text style={styles.categoryIcon}>{categoria.icono}</Text>
            <Text style={styles.categoryName}>{categoria.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {categorias.map((categoria) => (
        <View key={categoria.id}>
          <Text style={styles.categoryTitle}>{categoria.nombre}</Text>
          <FlatList
            data={showMoreProducts[categoria.id] ? data : data.slice(0, 2)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productCategory}>{item.category}</Text>
                  <View style={styles.ratingContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <TouchableOpacity
                        key={star}
                        style={styles.starButton}
                        onPress={() => handleRating(star)}
                      >
                        <Text
                          style={[
                            styles.starIcon,
                            star <= productRating ? styles.starIconFilled : null,
                          ]}
                        >
                          ★
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          {/* Botón "Ver más" o "Ver menos" */}
          <TouchableOpacity
            style={[styles.productCard, styles.viewMoreButton]}
            onPress={() => toggleShowMore(categoria.id)}
          >
            <Text style={styles.viewMoreButtonText}>
              {showMoreProducts[categoria.id] ? 'Ver menos' : 'Ver más'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonImageHome: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userSection: {
    marginBottom: 16,
    // Estilos para la sección de usuario
  },
  categoriesSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    // Estilos para la sección de categorías
  },
  categoryBubble: {
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryName: {
    marginTop: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 8,
    borderRadius: 4,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productCategory: {
    fontSize: 14,
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  starButton: {
    marginRight: 4,
  },
  starIcon: {
    fontSize: 16,
    color: 'black',
  },
  starIconFilled: {
    color: 'gold',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewMoreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  viewMoreButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductosScreen;