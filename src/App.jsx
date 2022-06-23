import useWindowSize from './hooks/useWindowSize'

const App = () => {
  const windowSize = useWindowSize();
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>The breakpoint for current width is: </h1>
      <span className='text-2xl p-2'>{windowSize}</span>
    </div>
  )
}

export default App
