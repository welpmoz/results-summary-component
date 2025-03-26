import ResultCategory from "./result-category";

export default function App() {
	return (
		<>
			<main aria-labelledby="page_heading" className="l-result__wrapper">
				<div className="c-result">
					<h1 className="u-visually-hidden" id="page_heading">
						Test Result Summary
					</h1>
					<section
						className="c-result__header u-text-align-center u-fc-light-blue"
						aria-labelledby="score-heading"
					>
						<h2 className="c-result__title u-text-heading-m" id="score-heading">
							Your Result
						</h2>
						<div className="l-result__score">
							<div className="c-result__score">
								<span className="u-visually-hidden">Your average score is</span>
								<span className="c-result__score-value u-text-heading-xl u-fw-800 u-fc-white">
									76
								</span>
								<span className="c-result__score-max u-text-body u-fw-700">
									of 100
								</span>
							</div>
							<div className="l-result__achievement">
								<p className="c-result__status u-text-heading-l u-fw-700 u-fc-white">
									Great
								</p>
								<p className="c-result__description u-text-body u-fw-500">
									You scored higher than 65% of the people who have taken these
									tests.
								</p>
							</div>
						</div>
					</section>
					<section
						aria-labelledby="summary-heading"
						className="c-result__summary"
					>
						<h2 id="summary-heading" className="u-text-heading-m">
							Summary
						</h2>
						<ul className="l-result__category-list">
							<ResultCategory category="Reaction" score={80} />
							<ResultCategory category="Memory" score={92} />
							<ResultCategory category="Verbal" score={61} />
							<ResultCategory category="Visual" score={73} />
						</ul>
						<button
							className="c-button u-text-button u-fc-white u-fw-700"
							type="button"
						>
							Continue
						</button>
					</section>
				</div>
			</main>
		</>
	);
}
