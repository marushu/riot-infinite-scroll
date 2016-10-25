<nextload>

	<div class="contents">
		<post each={ opts.posts } title={ title } content={ content }>
	</div>

	<script>
	  this.on('mount', function(){
	    // Contexted jQuery
			console.log( 'マウントされたよ？' )


	  })
		//this.update()
	  </script>

</nextload>
