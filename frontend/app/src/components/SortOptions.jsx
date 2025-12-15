import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    if (e.target.value) {
      newParams.set("sortBy", e.target.value);
    } else {
      newParams.delete("sortBy");
    }
    setSearchParams(newParams, { replace: true });
  };
  return (
    <div className='mb-2 flex items-center justify-end'>
      <select
        className='border border-slate-200 rounded-md p-1 outline-1 outline-blue-100'
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
      >
        <option value="">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
