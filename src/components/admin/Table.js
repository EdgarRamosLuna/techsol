import React, { useContext } from 'react'
import DataTable from 'react-data-table-component';
import { TaskContext } from '../../context/TaskContext';
import { SearchCont, TableS, TextField } from '../styles/Admin';
const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<SearchCont>
		<TextField
			id="search"
			type="text"
			placeholder="Buscar registros..."
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button type="button" onClick={onClear}>
			X
		</button>
	</SearchCont>
);
const Table = (props) => {
  const { data, columns, filter } = props;
  const [filterText, setFilterText] = React.useState('');

	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = data.filter(
		item => item.customer && item.customer.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);
  return (
    <TableS>
         <DataTable
			title="Reparaciones"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
		
			persistTableHead
		/>      
    </TableS>
  )
}

export default Table