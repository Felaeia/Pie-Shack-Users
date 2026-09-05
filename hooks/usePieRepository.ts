import { useEffect, useState } from "react";

//domain entry
export interface Pie {
  id: string;
  name: string;
  price: number;
}

export const usePieRepository = () => {
  const [pies, setPies] = useState<Pie[]>([]);

  useEffect(() => {
    const staticPies: Pie[] = [
      { id: "1", name: "Apple Pie", price: 12.99 },
      { id: "2", name: "Cherry Pie", price: 14.99 },
      { id: "3", name: "Pumpkin Pie", price: 11.99 },
      { id: "4", name: "Pecan Pie", price: 15.99 },
    ];
    setPies(staticPies);
  }, []);
};
