import { FC } from 'react'

import SearchField from '@/UI/search-field/SearchField'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
