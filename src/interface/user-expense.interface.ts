export interface IExpense {
  id: string;
  name: string;
  operation: string;
  value: string;
  created_at: Date;
}

interface IExpenses {
  name: string;
  value: string;
}

export interface ILastExpense {
  expenses: IExpenses[];
}

export interface IUserExpense {
  listExpenses: {
    id: string;
    email: string;
    name: string;
    expenses: IExpense[];
  };
  totalValue: {
    totalExpense: number;
    totalRevenue: number;
  };
}
