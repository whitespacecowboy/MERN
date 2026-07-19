import React from 'react';

interface Collage {
  id: number,
  name: string
}

interface StructProps {
  name: string,
  company: string,
  list: Collage[]
}

// const Hello_F: React.FC<StructProps> = (props) => {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Company: {props.company}</h2>
      // <ul>Collage list: {props.list.map(clg => <li>{clg.name}</li>)}</ul>
//     </div>
//   );
// };

// const Hello_F = ({name, company, list}: StructProps) => {
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h2>Company: {company}</h2>
      // <ul>Collage list: {props.list.map(clg => <li>{clg.name}</li>)}</ul>
//     </div>
//   );
// }

const Hello_F = (props: StructProps) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Company: {props.company}</h2>
      <ul>Collage list: {props.list.map(clg => <li>{clg.name}</li>)}</ul>
    </div>
  );
}

// function Hello_F(props: StructProps) {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Company: {props.company}</h2>
//       <ul>Collage list: {props.list.map(clg => <li>{clg.name}</li>)}</ul>
//     </div>
//   );
// }

export default Hello_F;
