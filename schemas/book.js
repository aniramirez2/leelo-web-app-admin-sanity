export default {
    name: 'book',
    type: 'document',
      title: 'Book',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'authors',
        type: 'string',
        title: 'Authors'
      },
      {
        name: 'publisher',
        type: 'string',
        title: 'Publisher'
      },
      {
        name: 'publishedDate',
        type: 'string',
        title: 'Published Date'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'shortDescription',
        type: 'string',
        title: 'Short Description'
      },
      {
        name: 'pageCount',
        type: 'string',
        title: 'Page Count'
      },
      {
        name: 'thumbnail',
        type: 'image',
        title: 'Thumbnail'
      }
    ]
  }