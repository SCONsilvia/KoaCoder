import { productsRepository } from "../persistence/repository/products.repository.js";

export const getAll = async (ctx, next) => {
    const resp = await productsRepository.getAll({});
    if (resp.status){
      ctx.body = {            
        status: "success",   
        data: resp.data,
      };
      ctx.status = 200; 
    }else{
      ctx.body = {            
        status: "Error",   
        data: resp.err,
      };
      ctx.status = 400;       
    }
}


export const save = async (ctx, next) => {
  const data = ctx.request.body;
  const resp = await productsRepository.save(data);
  if (resp.status){
    ctx.body = {            
      status: "success",   
      data: resp.data,
    };
    ctx.status = 200; 
  }else{
    ctx.body = {
      status: "Error",
      data: resp.err,
    };
    ctx.status = 404;
  }
}

export const getById = async (ctx, next) => {
  const { id } = ctx.params;
  const resp = await productsRepository.getById(id);
  if (resp.status){
    ctx.body = {            
      status: "success",   
      data: resp.data,
    };
    ctx.status = 200; 
  }else{
    ctx.body = {
      status: "Error",
      data: resp.err,
    };
    ctx.status = 404;
  }
}


export const update = async (ctx, next) => {
  const { id } = ctx.params;
  const data = ctx.request.body;
  const resp = await productsRepository.actualizarPorId(id, data);
  if (resp.status){
    ctx.body = {            
      status: "success",   
      data: resp.data,
    };
    ctx.status = 200; 
  }else{
    ctx.body = {
      status: "Error",
      data: resp.err,
    };
    ctx.status = 404;
  }
}

export const remove = async (ctx, next) => {
  const { id } = ctx.params;
  const resp = await productsRepository.deleteById(id);
  if (resp.status){
    ctx.body = {            
      status: "success",   
      data: resp.data,
    };
    ctx.status = 200; 
  }else{
    ctx.body = {
      status: "Error",
      data: resp.err,
    };
    ctx.status = 404;
  }
}