import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, X, XCircle } from "@phosphor-icons/react";
import { ExpenseCreateForm } from "./components/expense-create-form";
import { useState } from "react";

const DialogComponent = () => {
  const [closeDialog, setCloseDialog] = useState(false);
  return (
    <Dialog
      open={closeDialog}
      children={
        <>
          <DialogTrigger onClick={() => setCloseDialog(true)}>
            <div className="rounded-full bg-purple-900 hover:bg-purple-800  text-white p-1">
              <Plus height={25} weight="light" width={25} />
            </div>
          </DialogTrigger>
          <DialogContent className="h-[33rem] ">
            <DialogHeader>
              <DialogClose onClick={() => setCloseDialog(false)}>
                <div className="absolute z-20 justify-end items-center top-3 right-3 bg-purple-950 hover:bg-purple-900 rounded-full p-1 cursor-pointer">
                  <X
                    height={22}
                    weight="light"
                    width={22}
                    className=" text-white"
                  />
                </div>
              </DialogClose>
              <DialogTitle className="text-2xl">
                Cadastre uma nova Despesa
              </DialogTitle>
              <DialogDescription className="text-lg">
                Preencha todos os campos corretamente, e tenha controle de suas
                finanças.
              </DialogDescription>
            </DialogHeader>
            <ExpenseCreateForm closeModal={setCloseDialog} />
          </DialogContent>
        </>
      }
    />
  );
};

export { DialogComponent };
