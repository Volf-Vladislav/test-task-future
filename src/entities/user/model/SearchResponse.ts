import User from './User'

type SearchResponse = {
    total_count: number
    incomplete_results: boolean
    items: User[]
}

export default SearchResponse