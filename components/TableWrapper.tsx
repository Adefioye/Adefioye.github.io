const TableWrapper = ({ children, ...props }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table {...props}>{children}</table>
    </div>
  )
}

export default TableWrapper
