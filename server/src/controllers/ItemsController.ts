import {Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController{
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
        
        const serialedItems = items.map(item => {
            return{
                id: item.id,
                title: item.title,
                image: `http://localhost:3333/uploads/${item.image}`
            };
        });
        
        return response.json(serialedItems);
    }
}

export default ItemsController;