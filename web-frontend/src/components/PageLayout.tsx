import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <div className="w-full h-full bg-gray-900 mx-auto p-16">

        <Outlet />
    </div>
  );
}