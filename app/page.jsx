import React from 'react'
import Feed from '@components/feed'

const Home = () => {

	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Discover & Share
				<br className="max-md:hidden"/>
				<span className="orange_gradient text-center"> AI-Powered Propmts</span>
			</h1>
			<p className="desc text-center">Prompt Generator is a website that helps you generate prompts 
				for any kind of creative writing. Prompt Generator is the 
				ultimate tool for unleashing your imagination and finding 
				your voice.</p>
			<Feed/>
		</section>
	)
}

export default Home