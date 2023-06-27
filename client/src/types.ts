type TProduct = {
  id: number;
  attributes: {
    categories: {
      data: [
        {
          id: number;
          attributes: {
            title: string;
            // ...
          };
        },
      ];
    };
    createdAt: Date;
    description: string;
    image: {
      data: {
        attributes: {
          name: string;
          url: string;
          // ...
        };
      };
    };
    isNew: boolean;
    price: number;
    title: string;
    // ...
  };
};

type TCategory = {
  id: number;
  attributes: {
    title: string;
    // ...
  };
};

type TCart = {
  id: string;
  item: TProduct;
  amount: number;
};

export type { TProduct, TCategory, TCart };
