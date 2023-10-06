/**
 * example for margins:
 *
 * destructure in component and assign to constant
 *
 * const positioning = `${mt ? `mt-${mt}` : ''}
                        ${mb ? `mb-${mb}` : ''}
                        ${ml ? `ml-${ml}` : ''}
                        ${mr ? `mr-${mr}` : ''}
                        ${m ? `m-${m}` : ''}
                       `.trim();
 */
interface IPositioning {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  m?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  p?: number;
}

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

export type { IPositioning, TProduct, TCategory, TCart };
