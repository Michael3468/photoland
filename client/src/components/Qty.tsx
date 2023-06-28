import React, { FC } from 'react';

import { TCart } from '../types';

type Props = {
  item: TCart,
};

const Qty: FC<Props> = ({ item }) => <div>Qty</div>;

export default Qty;
