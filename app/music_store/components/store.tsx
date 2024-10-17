import React, { useState } from 'react';
import { Editor } from './editor';
import { Display } from './display';
import { defaultProducts } from '../data';

export const Store: React.FC = () => {
  const [data, setItem] = useState(defaultProducts);

  return (
    <div>
      <Display data={data} />
      <Editor data={data} setItem={setItem} />
    </div>
  );
};