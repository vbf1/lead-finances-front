import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "@phosphor-icons/react";

const DialogComponent = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-full">
          <Plus height={30} weight="light" width={30} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Crie uma nova Operação</DialogTitle>
          <DialogDescription className="text-lg">
            Preencha todos os campos corretamente, e tenha controle de suas
            despesas.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { DialogComponent };
