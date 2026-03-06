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
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
        isPopular: true
    },
    {
        id: 'b2',
        name: 'Zesty Chicken Burger',
        description: 'Premium crispy chicken fillet, spicy mayo, lettuce, and pickles on a brioche bun.',
        price: 8.49,
        category: 'Burgers',
        image: 'https://images.unsplash.com/photo-1513185158878-8d8c196b7c8c?auto=format&fit=crop&q=80&w=800',
        isPopular: true
    },
    {
        id: 'f1',
        name: 'Loaded Republic Fries',
        description: 'Golden fries topped with chopped crispy chicken, melted cheese, and secret sauce.',
        price: 6.99,
        category: 'Fries',
        image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800',
        isPopular: true
    },
    {
        id: 'w1',
        name: 'Spicy Buffalo Wings',
        description: '10 pieces of crispy wings tossed in our signature bold red buffalo sauce.',
        price: 10.99,
        category: 'Wings',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800',
        isPopular: true
    },
    {
        id: 'c1',
        name: 'Republic Bucket Combo',
        description: '6 pieces broasted chicken, 1 large fries, 2 coleslaw, and 1.5L drink.',
        price: 24.99,
        category: 'Combos',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
        isPopular: true
    },
    {
        id: 'c2',
        name: 'Family Broast Feast',
        description: '12 pieces broasted chicken, 2 large fries, 4 garlic dips, and 2L drink.',
        price: 34.99,
        category: 'Combos',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 's1',
        name: 'Creamy Coleslaw',
        description: 'Freshly shredded cabbage and carrots in our signature creamy dressing.',
        price: 2.99,
        category: 'Sides',
        image: 'https://images.unsplash.com/photo-1546793665-c74683c3ef86?auto=format&fit=crop&q=80&w=800'
    }
];
