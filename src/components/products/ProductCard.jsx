import React from 'react'
import { ProductCardUI, ProductTitle, ProductInfo, ProductAuthor, ProductPrice, ProductButton } from './ProductStyles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

const ProductCard = (product) => {
        const dispatch = useDispatch();
        return (
                <ProductCardUI>
                        <ProductInfo>
                                <img src={product.image} alt={product.name} />
                                <ProductAuthor>
                                        {product.author.toUpperCase()}
                                </ProductAuthor>
                                <ProductTitle>
                                        {product.name}
                                </ProductTitle>
                                <ProductPrice>
                                        ${product.price}
                                </ProductPrice>
                        </ProductInfo>
                        <ProductButton onClick={() => dispatch(addToCart(product))}>
                                AGREGAR AL CARRITO
                        </ProductButton>
                </ProductCardUI>
        )
}

export default ProductCard