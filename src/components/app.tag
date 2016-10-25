<app>
	<main-header></main-header>

	<div class="contents">
		<post each={ opts.posts } title={ title } content={ content }>
	</div>

	<style>
		.contents {
			border-bottom: 10px solid red;
		}
	</style>

</app>
