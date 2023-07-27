'use client'

import Image from 'next/image'

import Menu from '../Menu'
import logo from '/public/logo.svg'

export default function Nav() {
	return (
		<nav className="fixed left-6 top-1/2 flex min-h-[calc(100vh-48px)] w-28 translate-y-[-50%] flex-col items-center rounded-full bg-indigo-700 px-3 py-5">
			<Image src={logo} width={80} height={80} alt="Logo" />

			<Menu />
		</nav>
	)
}
