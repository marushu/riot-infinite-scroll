<app>

	<div class="contents"　each={ data, key in opts.datas } title={ title }>

		<h1 class="item wow fadeInUp">{ key + 1 } : <a href="{ data.link }">{ data.title.rendered }</a></h1>

	</div>

	<style>
		.contents {
			border-bottom: 10px solid red;
		}
	</style>

</app>
