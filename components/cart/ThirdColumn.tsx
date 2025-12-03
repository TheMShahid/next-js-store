"use client";

import FormContainer from "../form/FormContainer";
import SubmitButton from "../form/Buttons";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import { useState } from "react";
import { toast } from "sonner";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast("Calculating...");
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast(result.message);
    setIsLoading(false);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        isLoading={isLoading}
        mode={Mode.CartItem}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton text="remove" size="sm" className="mt-4" />
      </FormContainer>
    </div>
  );
}

export default ThirdColumn;
