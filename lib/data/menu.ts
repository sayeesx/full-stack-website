export type Category = 'Broasted Chicken' | 'Burgers' | 'Fries' | 'Wings' | 'Combos' | 'Sides' | 'Drinks';

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    image: string;
    isPopular?: boolean;
}

export const categories: Category[] = [
    'Broasted Chicken',
    'Burgers',
    'Fries',
    'Wings',
    'Combos',
    'Sides',
    'Drinks'
];

export const menuItems: MenuItem[] = [
    {
        id: 'b1',
        name: 'Classic Broasted Bucket',
        description: '8 pieces of our signature crispy broasted chicken, served with garlic dip.',
        price: 18.99,
        category: 'Broasted Chicken',
        image: '/images/menu/bucket.jpeg',
        isPopular: true
    },
    {
        id: 'b2',
        name: 'Zesty Chicken Burger',
        description: 'Premium crispy chicken fillet, spicy mayo, lettuce, and pickles on a brioche bun.',
        price: 8.49,
        category: 'Burgers',
        image: '/images/menu/burger.jpeg',
        isPopular: true
    },
    {
        id: 'f1',
        name: 'Loaded Republic Fries',
        description: 'Golden fries topped with chopped crispy chicken, melted cheese, and secret sauce.',
        price: 6.99,
        category: 'Fries',
        image: '/images/menu/fries.jpeg',
        isPopular: true
    },
    {
        id: 'w1',
        name: 'Spicy Buffalo Wings',
        description: '10 pieces of crispy wings tossed in our signature bold red buffalo sauce.',
        price: 10.99,
        category: 'Wings',
        image: '/images/menu/placeholder.jpg',
        isPopular: true
    },
    {
        id: 'c1',
        name: 'Republic Bucket Combo',
        description: '6 pieces broasted chicken, 1 large fries, 2 coleslaw, and 1.5L drink.',
        price: 24.99,
        category: 'Combos',
        image: '/images/menu/combo.jpeg',
        isPopular: true
    },
    {
        id: 'c2',
        name: 'Family Broast Feast',
        description: '12 pieces broasted chicken, 2 large fries, 4 garlic dips, and 2L drink.',
        price: 34.99,
        category: 'Combos',
        image: '/images/menu/burger-combo.jpeg'
    },
    {
        id: 's1',
        name: 'Creamy Coleslaw',
        description: 'Freshly shredded cabbage and carrots in our signature creamy dressing.',
        price: 2.99,
        category: 'Sides',
        image: '/images/menu/coleslaw.jpeg'
    }
];
