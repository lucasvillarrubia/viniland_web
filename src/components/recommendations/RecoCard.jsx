import React from 'react'
import { RecoCardUI, RecoTitle, RecoInfo, RecoAuthor, RecoPrice, RecoButton } from './RecoStyles';
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

const RecoCard = (product) => {
        const dispatch = useDispatch();
        return (
                <RecoCardUI>
                        <RecoInfo>
                                <div>
                                        <RecoAuthor>
                                                {product.author.toUpperCase()}
                                        </RecoAuthor>
                                        <RecoTitle>
                                                {product.name}
                                        </RecoTitle>
                                        <RecoPrice>
                                                ${product.price}
                                        </RecoPrice>
                                </div>
                                <img src={product.image} alt={product.name} />
                        </RecoInfo>
                        <RecoButton onClick={() => dispatch(addToCart(product))}>
                                <BsFillCartPlusFill />
                        </RecoButton>
                </RecoCardUI>
        )
}

export default RecoCard