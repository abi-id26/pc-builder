export interface Product {
    id: string;
    fields: {
      Name: string;
      Price: number;
      Category: string;
      ImageURL?: { url: string }[];
    };
  }