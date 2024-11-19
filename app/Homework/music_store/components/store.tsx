import React, { useState } from 'react';
import { Editor } from './editor';
import { Display } from './display';

interface StoreProps {
  data: any[];
  setItem: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Store: React.FC<StoreProps> = ({ data, setItem }) => {

  const [editId, setEditId] = useState(-1)
  const [editing, setEdit] = useState(-1)
  const [event, setEvent] = useState('none')

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image_url, setImage] = useState('')
  const [like, setLike] = useState(0)
  const [isNew, setNew] = useState(false)

  return (
    <div>
      <Display data={data} setEditId={setEditId} editing={editing} setEvent={setEvent} setName={setName} setPrice={setPrice} setImage={setImage} setLike={setLike} setNew={setNew} />
      <Editor data={data} editId={editId} setEditId={setEditId} setItem={setItem} editing={editing} setEdit={setEdit} event={event} setEvent={setEvent}
      name={name} setName={setName} price={price} setPrice={setPrice} image_url={image_url} setImage={setImage} like={like} setLike={setLike} isNew={isNew} setNew={setNew}/>
    </div>
  );
};