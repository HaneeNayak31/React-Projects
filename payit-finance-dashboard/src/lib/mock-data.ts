export interface Transaction {
    id: string;
    name: string;
    amount: number;
    date: string;
    type: 'credit' | 'debit';
    status: 'success' | 'pending' | 'failed';
    avatar?: string;
    category: string;
}

export const transactions: Transaction[] = [
    { id: '1', name: 'Netflix Subscription', amount: 199, date: '2024-03-20', type: 'debit', status: 'success', category: 'Entertainment' },
    { id: '2', name: 'Rohan Sharma', amount: 5000, date: '2024-03-19', type: 'credit', status: 'success', category: 'Transfer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan' },
    { id: '3', name: 'Uber Ride', amount: 342, date: '2024-03-18', type: 'debit', status: 'success', category: 'Transport' },
    { id: '4', name: 'Zomato', amount: 850, date: '2024-03-18', type: 'debit', status: 'success', category: 'Food' },
    { id: '5', name: 'Salary', amount: 85000, date: '2024-03-01', type: 'credit', status: 'success', category: 'Salary' },
    { id: '6', name: 'Apple Music', amount: 99, date: '2024-02-28', type: 'debit', status: 'success', category: 'Entertainment' },
    { id: '7', name: 'Grocery Store', amount: 2400, date: '2024-02-27', type: 'debit', status: 'success', category: 'Shopping' },
    { id: '8', name: 'Aditya Raj', amount: 1500, date: '2024-02-25', type: 'debit', status: 'success', category: 'Transfer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya' },
    { id: '9', name: 'Starbucks', amount: 450, date: '2024-02-24', type: 'debit', status: 'success', category: 'Food' },
    { id: '10', name: 'Electricity Bill', amount: 3200, date: '2024-02-20', type: 'debit', status: 'success', category: 'Utilities' },
];

export const contacts = [
    { id: '1', name: 'Rohan Sharma', username: '@rohan_s', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan' },
    { id: '2', name: 'Aditya Raj', username: '@adityaraj', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya' },
    { id: '3', name: 'Sneha Gupta', username: '@sneha_g', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha' },
    { id: '4', name: 'Priya Singh', username: '@priya_singh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
    { id: '5', name: 'Rahul V', username: '@rahul_v', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul' },
    { id: '6', name: 'Anjali K', username: '@anjali_k', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali' },
];
