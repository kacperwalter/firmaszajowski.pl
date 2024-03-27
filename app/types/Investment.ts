export type Investment = {
    _id: string
    _createdAt: string
    name: string
    category: string
    path: {
        _type: string
        current: string
    }
    image: {
        _type: string
        asset: {
            _ref: string
            _type: string
        }
        alt?: string
    }
    caption: Array<{
        _key: string
        _type: string
        children: Array<{
            _key: string
            _type: string
            marks: Array<string>
            text: string
        }>
        markDefs: Array<{
            _key: string
            _type: string
            href: string
        }>
        style: string
    }>
    title: string
    description: string
}