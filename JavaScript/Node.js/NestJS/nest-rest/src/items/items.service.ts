import { Injectable } from '@nestjs/common';
import { Item } from "./interfaces/item.interface"

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id:"99989",
            name: "one",
            qty: 88,
            description: "one one" 
        },
        {
            id:"99989",
            name: "two",
            qty: 22,
            description: "duo duo" 
        },
        {
            id:"99989",
            name: "three",
            qty: 333,
            description: "three thiry" 
        }
    ]

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id)

    }
}
