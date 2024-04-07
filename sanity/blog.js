export default {
    name: 'MRUniqueDecorationBlog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title',
            }
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Blog Thumbnail'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}