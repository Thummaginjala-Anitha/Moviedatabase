import './Pagination.css'

const Pagination = ({page, totalPages, onChange}) => {
  if (totalPages <= 1) return null

  const canGoPrev = page > 1
  const canGoNext = page < totalPages

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={!canGoPrev}
      >
        Prev
      </button>
      <span className="pagination__status">
        Page <strong>{page}</strong> of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={!canGoNext}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
