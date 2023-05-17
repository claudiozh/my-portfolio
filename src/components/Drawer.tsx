import { Sidebar } from './Sidebar'

type Props = {
  open: boolean
}

function Drawer({ open }: Props) {
  return (
    <div
      id="drawer-example"
      className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform ${
        open ? 'translate-x-0' : '-translate-x-full'
      } w-64`}
      aria-labelledby="drawer-label"
    >
      <Sidebar />
    </div>
  )
}

export default Drawer
