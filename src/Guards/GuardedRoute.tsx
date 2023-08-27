import Home from '../pages/Home'
import { Outlet } from 'react-router-dom'

interface AdminGuardProps {
  auth: boolean
}

export const GuardedRoute = ({ auth }: AdminGuardProps) => {
  return <>{auth === true ? <Outlet /> : <Home />} </>
}
