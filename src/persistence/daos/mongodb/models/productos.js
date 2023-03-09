import mongoose from 'mongoose';

const productsCollectionName = "productos";

const productsSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    precio: { type: Number, require: true },
    codigo: { type: String, require: true },
    stock: { type: Number, require: true },
    foto: { type: String, require: true },
}, { timestamps: true });

export const ProductsModel = mongoose.model(productsCollectionName, productsSchema);
