export interface GraphNode {
  id: string;
  kind: 'Person' | 'Product';
  name: string;
  properties: Record<string, any>;
}

export const data = [
  {
    id: '1',
    kind: 'Person',
    name: 'Alice',
    properties: {
      age: 30,
    },
  },
  {
    id: '2',
    kind: 'Person',
    name: 'Bob',
    properties: {
      age: 25,
    },
  },
  {
    id: '3',
    kind: 'Person',
    name: 'Charlie',
    properties: {
      age: 35,
    },
  },
  {
    id: '4',
    kind: 'Product',
    name: 'iPhone',
    properties: {
      price: 999,
    },
  },
  {
    id: '5',
    kind: 'Product',
    name: 'iPad',
    properties: {
      price: 799,
    },
  },
] satisfies GraphNode[];
