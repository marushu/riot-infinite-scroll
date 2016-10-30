<app>

	<div class="contents"　each={ data, key in opts.datas } title={ title }>

		<script>
			//console.log( this.root.innerHTML )
		</script>

		<my-tag>
		  <b>{ text }</b>
		</my-tag>

		<div class="mount-test" riot-tag="my-tag"><b>{ text }</b></div>
		<div class="mount-test" riot-tag="raw"><b>{ data.content.rendered }</b></div>

		<h1 class="item wow fadeInUp">{ key } : <a href="{ data.link }">{ data.title.rendered }</a></h1>


			<div class="inner_content" riot-tag="row">
				<raw class="contents" content= { data.content.rendered } />
			</div>

	</div>

	<style>
		.contents {
			border-bottom: 10px solid red;
		}
	</style>

	<script>
		riot.mount( 'raw' )
	</script>

</app>
