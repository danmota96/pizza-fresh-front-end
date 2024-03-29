import { OrderItemType } from "types/OrderItemType";

export const orders: OrderItemType[] = [
	{
		product: {
			id:          '507f191e810c19729de860ea',
			name:        'Peperoni',
			description: 'Peperoni e Mussarela',
			image:       "https://drive.google.com/uc?export=view&id=1gdDeV9yDtQBL-gMp8H6N4EWtw7LeRORj",
			price:       40.69,
		},
		quantity: 1,
		observation: '',
	},
	{
		product: {
			id:          '507f191e810c19729de860ea',
			name:        'Anchovas',
			description: 'Anchovas, Calabresa, Tomate, Congumelos e Cebola',
			image:       'https://drive.google.com/uc?export=view&id=1blDtFJHANScjWYOwCWH8upcJ3B6T_IsX',
			price:       40.29,
		},
		quantity: 3,
		observation: '',
	},
	{
		product: {
			id:          '507f191e810c19729de860ea',
			name:        'Calamussa',
			description: 'Calabresa e Mussarela',
			image:       'https://drive.google.com/uc?export=view&id=1wer1S3jrUEcTG_ke23Mzx7WgDBkhT3sJ',
			price:       30.29,
		},
		quantity: 2,
		observation: '',
	},
];