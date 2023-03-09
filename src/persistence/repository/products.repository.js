import { asDto } from "../dto/productos.dto.js";
import { productsFactory } from "../daos/productos.factory.js";

class ProductsRepository {
    constructor() {
        this.dao = productsFactory.getDao();
    }

    async getById(id) {
        const products = await productsFactory.getById(id);
        if(products.data){
            const productDtoo = asDto(products.data);
            products.data =  productDtoo;
        }
        return products;
    }

    async save(data) {
        return await productsFactory.save(data);
    }
    
    async getAll() {
        const products = await productsFactory.getAll();
        if(products.data){
            const productDtoo = asDto(products.data);
            products.data =  productDtoo;
        }
        return products;
    }

    async actualizarPorId(id, nuevaData) {
        const productUdapte = await productsFactory.actualizarPorId(id, nuevaData);
        if(productUdapte.data){
            const productDtoo = asDto(productUdapte.data);
            productUdapte.data =  productDtoo;
        }
        return productUdapte;
    }

    async deleteById(id) {
        return await productsFactory.deleteById(id);
    }
}

export const productsRepository = new ProductsRepository;
