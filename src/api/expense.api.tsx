import { ILastExpense, IUserExpense } from "@/interface/user-expense.interface";
import { axiosNew } from "@/utils/axios";
import { AxiosResponse } from "axios";

const fetchGetListUserExpense = async (
  userId: string
): Promise<IUserExpense> => {
  try {
    const response: AxiosResponse<IUserExpense> =
      await axiosNew.get<IUserExpense>(
        `http://localhost:8080/get-list-user-expense/${userId}`
      );

    return response.data;
  } catch (error) {
    console.error(
      `Erro ao buscar lista de despesas para User Id: ${userId}:`,
      error
    );
    throw error;
  }
};

const getListUserExpenseOrderByDate = async (
  userId: string
): Promise<ILastExpense> => {
  try {
    const response: AxiosResponse<ILastExpense> =
      await axiosNew.get<ILastExpense>(
        `http://localhost:8080/get-list-user-expense-order-by-date/${userId}`
      );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar despesas:", error);
    throw error;
  }
};

export { fetchGetListUserExpense, getListUserExpenseOrderByDate };
