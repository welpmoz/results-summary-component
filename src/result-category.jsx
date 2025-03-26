export default function ResultCategory({ category, score }) {
	return (
		<li className="c-result__category u-text-body" data-category={category}>
			<span className="c-result__category-name" aria-hidden>
				<img src={`/icons/icon-${category.toLowerCase()}.svg`} alt="" />
				{category}
			</span>
			<span className="u-visually-hidden">
				Your score in {category} category is
			</span>
			<span
				aria-hidden
				className="c-result__category-score u-fw-700 u-fc-dark-navy"
			>
				{score} <span className="u-opacity-50">/ 100</span>
			</span>
			<span className="u-visually-hidden">{score} of 100</span>
		</li>
	);
}
