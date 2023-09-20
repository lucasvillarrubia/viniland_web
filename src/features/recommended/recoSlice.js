import { createSlice } from "@reduxjs/toolkit"
import { ProductCollection } from "../../data/Products";

const initialState = {
        recommendations: Array(3).fill(0).reduce((acc) => {
                let reco;
                do {
                        reco = { ...ProductCollection[Math.floor(Math.random() * ProductCollection.length)] }
                } while (acc.map(product => product.id).includes(reco.id));
                return [...acc, reco];
        }, [])
}

export const recoSlice = createSlice({
        name: 'recommended',
        initialState,
        reducers: {
                randomReco: state => state
        }
});

export const { randomReco } = recoSlice.actions;

export default recoSlice.reducer;