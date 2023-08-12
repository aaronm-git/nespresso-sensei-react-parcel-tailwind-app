import { useContext } from 'react';
import ImagesContext from '../context/imagePathsContext';
import FeatherIcon from './ui/FeatherIcon';
import Tag from './ui/Tag';
import Skeleton from './ui/Skeleton';
import SpecialListItem from './ui/SpecialListItem';
import Section from './ui/Section';
export default function RecipeInstructions({ recipe, loading }) {
	const images = useContext(ImagesContext);

	if (loading) {
		return (
			<div>
				<Skeleton>
					<Skeleton.Text>
						<div className="h-4 w-1/2"></div>
						<div className="h-4 w-1/4"></div>
					</Skeleton.Text>
					<Skeleton.Image>
						<div className="h-64 w-full"></div>
					</Skeleton.Image>
					<Skeleton.Text>
						<div className="h-4 w-1/2"></div>
						<div className="h-4 w-1/4"></div>
					</Skeleton.Text>
					<Skeleton.Text>
						<div className="h-4 w-1/2"></div>
						<div className="h-4 w-1/4"></div>
					</Skeleton.Text>
					<Skeleton.Text>
						<div className="h-4 w-1/2"></div>
						<div className="h-4 w-1/4"></div>
					</Skeleton.Text>
				</Skeleton>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-y-10">
			<Section>
				<h1 className="hidden text-4xl font-light md:block">{recipe.name}</h1>

				<div className="my-3 grid grid-cols-2 gap-1 md:grid-cols-3">
					<div className="flex items-center" title="Prep time">
						<FeatherIcon icon="clock" className="mr-1 stroke-1 text-nespresso-gold" />
						{recipe.prepTime}
					</div>
					<div className="flex items-center" title="Difficulty">
						<FeatherIcon icon="target" className="mr-1 stroke-1 text-nespresso-gold" />
						{recipe.difficulty}
					</div>
				</div>
				<hr className="my-3" />
				<p className="m-0">{recipe.description}</p>
			</Section>

			<Section title="RECIPE DETAILS">
				<div className="flex flex-wrap gap-2">
					{recipe.tags?.map((tag) => (
						<Tag key={tag} text={tag} />
					))}
				</div>
			</Section>
			{recipe.ingredients?.length > 0 && (
				<Section title="INGREDIENTS">
					{recipe.coffees.length > 0 && (
						<ul>
							{recipe.coffees?.map((coffee) => {
								const imgSrc = coffee.images.length && images[coffee.images[0]];
								return (
									<SpecialListItem key={coffee.id} imgSrc={imgSrc}>
										<a href={`/coffees/${coffee.id}`}>
											<span>{coffee.name}</span>
										</a>
										<span className="block font-light text-black">{coffee.description}</span>
									</SpecialListItem>
								);
							})}
						</ul>
					)}
					<ul className="ml-5 list-disc">
						{recipe.ingredients?.map((ingredient) => (
							<li key={ingredient} className="my-3">
								<span>{ingredient}</span>
							</li>
						))}
					</ul>
				</Section>
			)}
			{recipe.materials?.length > 0 && (
				<Section title="MATERIALS">
					<ul>
						{recipe.materials?.map((material) => {
							const imgSrc = material?.images.length && images[material.images[0]];
							return (
								<SpecialListItem key={material.id} imgSrc={imgSrc}>
									<a href={`/products/${material.id}`}>{material.name}</a>
								</SpecialListItem>
							);
						})}
					</ul>
				</Section>
			)}
			{recipe.instructions?.length > 0 && (
				<Section title="INSTRUCTIONS">
					<ol className="list-inside list-decimal">
						{recipe.instructions?.map((instruction) => (
							<li key={instruction} className="my-3">
								<span>{instruction}</span>
							</li>
						))}
					</ol>
				</Section>
			)}
		</div>
	);
}
