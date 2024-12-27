import type { Struct, Schema } from '@strapi/strapi';

export interface BookmakeBookmake extends Struct.ComponentSchema {
  collectionName: 'components_bookmake_bookmakes';
  info: {
    displayName: 'Bookmake';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface BookBook extends Struct.ComponentSchema {
  collectionName: 'components_book_books';
  info: {
    displayName: 'Book';
  };
  attributes: {
    tetst: Schema.Attribute.String & Schema.Attribute.Required;
    discription: Schema.Attribute.String & Schema.Attribute.Required;
    cover: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bookmake.bookmake': BookmakeBookmake;
      'book.book': BookBook;
    }
  }
}
