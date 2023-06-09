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

// eslint-disable-next-line import/prefer-default-export
export type { TProduct };
