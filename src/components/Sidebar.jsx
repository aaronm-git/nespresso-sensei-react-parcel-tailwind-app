import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'ui/FeatherIcon';

function Sidebar({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	return (
		<div className="group relative h-full w-auto" data-issidebaropen={isSidebarOpen}>
			<StickyMenuButton toggleSidebar={toggleSidebar} />
			<nav className="h-full min-w-[200px] max-w-[200px] translate-x-0 transform overflow-x-hidden bg-gray-200 transition-all duration-300 ease-in-out max-md:group-data-[issidebaropen=false]:min-w-0 max-md:group-data-[issidebaropen=false]:max-w-0 max-md:group-data-[issidebaropen=false]:-translate-x-full">
				<MenuButton issidebaropen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				{children}
			</nav>
		</div>
	);
}

function Menu({ children }) {
	return <ul className="flex flex-col">{children}</ul>;
}

function Item({ children }) {
	return <li className="border-b border-solid border-gray-300 bg-gray-200 p-3 px-2 text-center">{children}</li>;
}

function StickyMenuButton({ toggleSidebar, className }) {
	return (
		<div className="absolute bottom-0 z-10 p-2 opacity-0 transition-opacity ease-in-out max-md:group-data-[issidebaropen=false]:opacity-100">
			<button className="rounded-full bg-nespresso-gold p-3 text-white hover:bg-black" onClick={toggleSidebar}>
				<FeatherIcon icon="layout" />
			</button>
		</div>
	);
}

function MenuButton({ toggleSidebar }) {
	return (
		<div className="border-b border-solid border-gray-300 p-2 text-center">
			<button className="rounded-full bg-nespresso-gold p-3 text-white hover:bg-black" onClick={toggleSidebar}>
				<FeatherIcon icon="layout" />
			</button>
			<p className="mt-3 uppercase">Admin Panel</p>
		</div>
	);
}

Sidebar.Menu = Menu;
Sidebar.Item = Item;
export default Sidebar;
